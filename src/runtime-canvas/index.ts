import { Container, Sprite, Texture, Text } from "pixi.js";
import { createRenderer } from "vue";

export const renderer = createRenderer({
  createElement(type, ...args) {
    console.log("t", args);

    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      case "Text":
        element = new Text("xx");
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

export function createApp(rootComponent: any) {
  return renderer.createApp(rootComponent);
}
