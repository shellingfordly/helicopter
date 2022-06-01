import App from "./App.vue";
import { game } from "./game";
import { createApp } from "./runtime-canvas";
import "./styles/index.css";

document.body.append(game.view);

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("Container");
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("Sprite");

app.mount(game.stage);
