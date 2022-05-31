<script setup lang="ts">
import { reactive } from "vue";
import planeTexture from "../assets/plane.svg";
import { initGame } from "../game";

const plane = initGame(reactive({}));

window.addEventListener("keydown", (e) => {
  const { code } = e;
  switch (code) {
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowDown":
      plane.moveDown();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    case "ArrowLeft":
      plane.moveLeft();
      break;
  }
});
</script>

<template>
  <Container>
    <Sprite
      :x="plane.x"
      :y="plane.y"
      :texture="planeTexture"
      width="80"
      height="80"
    />
  </Container>
</template>
