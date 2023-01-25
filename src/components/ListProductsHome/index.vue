<script setup lang="ts">
import Product from "../Product/index.vue";
import { useGameStore } from "../../store/products";
import { computed, defineProps } from "vue";

const store = useGameStore();

const props = defineProps<{ start: string }>();

const arrayList = computed(() => {
  const newStart = Number(props.start);
  const newArr = store.games.slice(newStart, newStart + 5);
  return newArr;
});
</script>

<template>
  <div class="containerList">
    <template v-for="(game, i) in arrayList">
      <Product :index="i" :Game="game"></Product>
    </template>
  </div>
</template>

<style scoped>
.containerList {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  margin: 50px auto;

  gap: 10px;
}
</style>
