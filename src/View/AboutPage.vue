<script setup lang="ts">
import img1 from "../assets/about/1.jpg";
import img2 from "../assets/about/2.jpg";
import img3 from "../assets/about/3.jpg";
</script>
<template>
  <h2>We are:</h2>
  <div class="containerAbout">
    <div class="card">
      <h2>Gamers</h2>
      <picture>
        <img :src="img1" alt="" />
      </picture>
    </div>
    <div class="card">
      <h2>Friends</h2>
      <picture>
        <img :src="img2" alt="" />
      </picture>
    </div>
    <div class="card">
      <h2>Community</h2>
      <picture>
        <img :src="img3" alt="" />
      </picture>
    </div>
  </div>
</template>
<style scoped>
.containerAbout {
  width: 95%;
  height: auto;

  margin: 40px auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 20px;
}

img {
  width: 100%;
}

h2 {
  width: 100%;
  height: auto;

  color: white;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(40px);

  text-align: center;

  font-size: 3rem;

  padding: 20px 0;

  margin: 0;
}
</style>
