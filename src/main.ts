import App from "./App.vue";
import { Application, Container, Sprite, Text, Texture } from "pixi.js";
import { createRenderer } from "vue";
import "./styles/index.css";
import { ContainerHeight, ContainerWidth } from "./contants";

const game = new Application({
  width: ContainerWidth,
  height: ContainerHeight,
  backgroundColor: 0,
});

document.body.append(game.view);

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`can't find ${type}`);
    }
    return element;
  },
  createText(text) {
    return new Text(text);
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  patchProp(el, key, _, nextValue) {
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  setText() {},
  setElementText() {},
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  nextSibling() {
    return null;
  },
  parentNode(node) {
    return node.parent;
  },
  createComment(text) {
    return new Text(text);
  },
});

renderer.createApp(App).mount(game.stage);
