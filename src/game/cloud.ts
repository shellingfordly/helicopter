import { Ref } from "vue";
import { ContainerWidth } from "../contants";

export function createClouds(builds: Ref<any[]>) {
  builds.value = new Array(10).fill("").map((_) => {
    return {
      x: ContainerWidth / 3,
      y: random(0, 100),
      width: random(40, 90),
      height: random(0, 150),
    };
  });

  builds.value.reduce(
    (p, n) => {
      n.x = p.x + p.width;
      return n;
    },
    { x: ContainerWidth / 3, width: 0 }
  );

  return builds;
}

function random(min: number, max: number) {
  return Math.floor(min + Math.random() * max);
}
