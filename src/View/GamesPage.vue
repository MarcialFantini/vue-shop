<script lang="ts" setup>
import { computed } from "vue";
import { useGameStore } from "../store/products";
import Product from "../components/Product/index.vue";

const store = useGameStore();

const handlerInputPlus = () => {
  store.plus();
};

const handlerInputLess = () => {
  store.decrement();
  console.log("pa tras");
};

const arrayComputed = computed(() => store.data);
</script>

<template>
  <div class="containerButtons">
    <button @click="handlerInputLess">Prev</button>
    <button @click="handlerInputPlus">Next</button>
  </div>

  <div class="containerGames">
    <template v-for="(item, i) in arrayComputed"
      ><Product :index="i" :Game="item"></Product
    ></template>
  </div>

  <div class="containerButtons">
    <button @click="handlerInputLess">Prev</button>
    <button @click="handlerInputPlus">Next</button>
  </div>
</template>

<style scoped>
.containerGames {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));

  gap: 20px;

  width: 95%;
  min-height: 400px;

  margin: 20px auto;
}

.containerButtons {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.containerButtons button {
  width: auto;
  height: auto;

  background: black;
  border: none;

  color: white;

  font-size: 2rem;
  padding: 10px 30px;

  border-radius: 10px;

  cursor: pointer;

  margin: 20px 0;
}
</style>
