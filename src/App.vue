<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Build from "./components/Build.vue";
import Cloud from "./components/Cloud.vue";
import bgTexture from "./assets/bg.jpeg";
import { ContainerWidth } from "./contants";
</script>

<template>
  <Container>
    <Sprite :texture="bgTexture" :width="ContainerWidth" />
    <Text text="sh" />
    <!-- <Plane />
    <Cloud />
    <Build /> -->
  </Container>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #000;
}
</style>
