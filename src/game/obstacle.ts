import { Ref } from "vue";
import { ContainerHeight, ContainerWidth } from "../contants";

export interface ObstacleType {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface OptionType {
  x: number;
  y: number;
  width: [number, number];
  height: [number, number];
  spacing: number;
}

export function createObstacles(
  obstacles: Ref<ObstacleType[]>,
  options: OptionType
) {
  Array.from({ length: 10 }).forEach(() => {
    const obstacle = createObstacle(options);
    options.x = obstacle.x + obstacle.width + options.spacing;

    obstacles.value.push(obstacle);
  });

  return obstacles;
}
export function createObstacle(option: OptionType): ObstacleType {
  const height = random(option.height);
  const width = random(option.width);

  return {
    width,
    height,
    x: option.x + option.spacing || ContainerWidth / 3,
    y: option.y ? random([0, 150]) : ContainerHeight - height,
  };
}

export function random([min, max]: [number, number]) {
  return Math.floor(min + Math.random() * max);
}
