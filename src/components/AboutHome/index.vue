<script setup lang="ts">
import { onMounted, ref } from "vue";
import srcAboutHome from "../../assets/about/aboutHome.jpg";
</script>

<template>
  <div class="containerAbout">
    <picture class="containerImg">
      <img :src="srcAboutHome" alt="" />
    </picture>
    <div class="textContainer">
      <h2>Visit our About !</h2>
      <p>About is our page where we talking about of us!</p>
      <router-link class="button" to="/about">Follow About</router-link>
    </div>
  </div>
</template>

<style scoped>
.containerAbout {
  max-height: 500px;
  position: relative;

  margin: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.textContainer {
  position: absolute;
  color: white;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);

  height: auto;
  width: 100%;

  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-shadow: 0 0 10px black;
}

.textContainer > h2 {
  font-size: 5rem;
  margin: 0;
}
.textContainer > p {
  font-size: 3rem;
  margin: 0;
}
.containerImg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 500px;
}

.button {
  padding: 10px 20px;

  background: white;

  margin: 10px 0;

  font-size: 2rem;
  color: black;
  text-decoration: none;
  text-shadow: none;
}

img {
  width: 100%;
}
</style>
