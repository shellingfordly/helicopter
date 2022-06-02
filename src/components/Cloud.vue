<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import cloudTexture from "../assets/cloud.svg";
import { ContainerWidth } from "../contants";
import {
  createObstacle,
  createObstacles,
  OptionType,
  random,
} from "../game/obstacle";

const option: OptionType = {
  x: 0,
  y: random([0, 200]),
  width: [40, 90],
  height: [20, 90],
  spacing: 50,
};
const clouds = createObstacles(ref([]), option);

function move() {
  clouds.value.forEach((cloud) => {
    cloud.x -= 1;

    if (cloud.x + cloud.width < 0) {
      const index = clouds.value.indexOf(cloud);
      clouds.value.splice(index, 1);
    }
  });
  nextTick(() => {
    const prevCloud = clouds.value[clouds.value.length - 1];
    if (prevCloud.x < ContainerWidth) {
      const nextCloud = createObstacle(option);
      clouds.value.push(nextCloud);
    }
  });
  window.requestAnimationFrame(move);
}

// onMounted(move);
</script>

<template>
  <Container :x="cloud.x" :y="cloud.y" v-for="cloud in clouds">
    <Sprite
      :texture="cloudTexture"
      :width="cloud.width"
      :height="cloud.height"
    />
  </Container>
</template>
