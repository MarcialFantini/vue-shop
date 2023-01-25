<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useGameStore } from "./store/products";
import Navbar from "./components/Navbar/index.vue";

import srcBlackBack from "./assets/back/backBlack.jpg";
import srcWhiteBack from "./assets/back/backWhite.jpg";
import Footer from "./components/Footer/Footer.vue";

const src = ref(srcBlackBack);

const store = useGameStore();

const themeUpdate = computed(() => {
  if (store.theme) {
    return srcBlackBack;
  }

  return srcWhiteBack;
});

onMounted(async () => {
  await store.getData();
});
</script>

<template>
  <div class="containerAll">
    <img class="img" :src="themeUpdate" alt="" />
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.containerAll {
  width: 100%;
  min-height: 100vh;

  transition: all 0.3s;

  overflow: hidden;
}

.changeImg {
  opacity: 0;
}
.img {
  position: fixed;

  left: 0;
  top: 0;

  width: auto;
  height: 110%;
  transition: all 0.3s;
  z-index: -1;
}
</style>
