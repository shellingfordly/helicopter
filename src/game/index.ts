import { Application } from "pixi.js";
import { ContainerHeight, ContainerWidth } from "../contants";
export * from "./plane";

export const game = new Application({
  width: ContainerWidth,
  height: ContainerHeight,
});
