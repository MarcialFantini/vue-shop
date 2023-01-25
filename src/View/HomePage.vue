<script lang="ts" setup>
import Header from "../components/Header/index.vue";
import ListProductsHome from "../components/ListProductsHome/index.vue";
import AboutHome from "../components/AboutHome/index.vue";
</script>

<template>
  <div>
    <Header></Header>
    <ListProductsHome start="30"></ListProductsHome>
    <AboutHome></AboutHome>
    <ListProductsHome start="20"></ListProductsHome>
  </div>
</template>

<style></style>
