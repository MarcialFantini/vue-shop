<script setup lang="ts">
import srcHeader from "../../assets/header/header.jpg";
</script>

<template>
  <header class="header">
    <div class="textContainer">
      <h1>Gaming House</h1>
      <p>You can see the new games in our page !</p>
    </div>
    <picture class="imgContainer">
      <img :src="srcHeader" alt="" />
    </picture>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: auto;
  min-height: 400px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  margin: 50px 0;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
}

.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;

  text-shadow: 0 0 20px black;
}

.textContainer > h1 {
  font-size: 5rem;
  margin: 0;
}

.textContainer > p {
  font-size: 2rem;
  margin: 0;
}

.imgContainer {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  padding: 5px;
}

.imgContainer > img {
  width: 100%;
}
</style>
