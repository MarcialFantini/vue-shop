<script setup lang="ts">
import { GameInterface } from "../../interfaces";
import { ref, onMounted } from "vue";

const props = defineProps<{
  Game: GameInterface;
  index: number;
}>();

const isElementHover = ref(false);
const handlerHover = () => {
  isElementHover.value = !isElementHover.value;
};
const Active = ref(false);

onMounted(() => {
  setTimeout(() => {
    Active.value = true;
  }, 300 * props.index);
});
</script>

<template>
  <div :class="{ active: Active }" :key="props.Game.id" class="gameContainer">
    <div class="text">
      <h2>{{ props.Game.title }}</h2>
      <p>{{ props.Game.short_description }}</p>
    </div>
    <picture class="picture">
      <img
        @mouseover="handlerHover"
        @mouseleave="handlerHover"
        :class="{ activeImg: isElementHover }"
        :src="props.Game.thumbnail"
        :alt="props.Game.title"
      />
    </picture>
  </div>
</template>

<style scoped>
.gameContainer {
  width: 100%;
  height: 100%;

  margin: auto;

  background: rgb(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  padding: 20px 10px;

  color: white;

  display: flex;
  flex-direction: column;
  gap: 20px;

  transform: translate(100px);
  opacity: 0;

  transition: 0.3s all;
}

.active {
  opacity: 1;
  transform: translate(0);
}

.text {
  height: 40%;
}

.text > h2 {
  margin: 0;
  font-size: 2.4rem;
}

.text > p {
  margin: 0;
  font-size: 1.6rem;
}

.picture {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.picture > img {
  width: 100%;

  cursor: pointer;

  transition: all 1s;
}

.activeImg {
  transform: scale(130%);
}
</style>
