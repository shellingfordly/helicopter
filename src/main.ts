import App from "./App.vue";
import { game } from "./game";
import { createApp } from "./runtime-canvas";
import "./styles/index.css";

const container = document.getElementById("app");
container && container.append(game.view);

const app = createApp(App);
app.mount(game.stage);
