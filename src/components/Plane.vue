<script setup lang="ts">
import { onMounted, reactive } from "vue";
import planeTexture from "../assets/plane.svg";
import { initGame } from "../game";

const plane = initGame(reactive({}));

window.addEventListener("keydown", (e) => {
  const { code } = e;
  if (code === "Space") {
    plane.moveUp(5);
  }
});

function move() {
  plane.moveDown(1);
  window.requestAnimationFrame(move);
}

// onMounted(move);
</script>

<template>
  <Container>
    <Sprite
      :x="plane.x"
      :y="plane.y"
      :texture="planeTexture"
      width="40"
      height="40"
    />
  </Container>
</template>
