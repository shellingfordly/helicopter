import { Application } from "pixi.js";
export * from "./plane";

export const ContainerWidth = document.body.clientWidth;
export const ContainerHeight = 400;

export const game = new Application({
  width: ContainerWidth,
  height: ContainerHeight,
});
