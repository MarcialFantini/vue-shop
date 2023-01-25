<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useGameStore } from "../../store/products";

const isMountedNav = ref(false);

const store = useGameStore();

onMounted(() => {
  setTimeout(() => {
    isMountedNav.value = true;
  }, 500);
});
</script>

<template>
  <nav :class="{ navbarContainer: true, activeNavbarContainer: isMountedNav }">
    <div><h1 class="title">Game</h1></div>

    <ul class="list">
      <li><router-link class="item" to="/">Home</router-link></li>
      <li><router-link class="item" to="/games">Games</router-link></li>
      <li><router-link class="item" to="/about">About</router-link></li>
      <li><button @click="store.toggleTheme()">Theme</button></li>
    </ul>
  </nav>
</template>

<style scoped>
.title {
  color: white;
  font-size: 3rem;
  margin: 0;
}
.navbarContainer {
  width: 100%;
  height: auto;

  padding: 30px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);

  transform: translateY(-50px);

  transition: all 0.3s;

  margin: 0 0 50px 0;
}

.activeNavbarContainer {
  transform: translateX(0);
}

.list {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
  justify-items: center;
  list-style: none;
  padding: 0;
  gap: 20px;
  margin: 0;
}

.item {
  color: white;
  background: black;

  padding: 10px;
  border-radius: 10px;

  text-decoration: none;
  margin: 0;
  transition: all 0.3s;

  font-size: 2rem;
}

button {
  font-size: 2rem;
  color: white;
  background: black;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  color: red;
}
button:hover {
  color: red;
}
</style>
