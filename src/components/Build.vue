<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import buildTexture1 from "../assets/build1.svg";
import { createObstacle, createObstacles } from "../game/obstacle";
import { ContainerWidth } from "../contants";

const builds = createObstacles(ref([]));

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
        x: prevBuild.x + prevBuild.width,
        y: 0,
        height: [50, 150],
        width: [50, 80],
        spacing: [0, 30],
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
