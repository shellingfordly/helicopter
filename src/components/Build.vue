<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import buildTexture1 from "../assets/build1.svg";
import { createObstacle, createObstacles, OptionType } from "../game/obstacle";
import { ContainerWidth } from "../contants";

const defaultOptions: OptionType = {
  x: ContainerWidth / 3,
  y: 0,
  height: [50, 150],
  width: [40, 0],
  spacing: 50,
};

const builds = createObstacles(ref([]), defaultOptions);

function move() {
  builds.value.forEach((build) => {
    build.x -= 1;

    if (build.x + build.width < 0) {
      const index = builds.value.indexOf(build);
      builds.value.splice(index, 1);
    }
  });

  nextTick(() => {
    const prevBuild = builds.value[builds.value.length - 1];
    if (prevBuild.x < ContainerWidth) {
      const nextBuild = createObstacle({
        ...defaultOptions,
        x: prevBuild.x + prevBuild.width,
      });
      builds.value.push(nextBuild);
    }
  });
  window.requestAnimationFrame(move);
}

onMounted(move);
</script>

<template>
  <template v-for="build in builds" :key="build.width">
    <Container :x="build.x" :y="build.y">
      <Sprite
        :texture="buildTexture1"
        :width="build.width"
        :height="build.height"
      />
    </Container>
  </template>
</template>
