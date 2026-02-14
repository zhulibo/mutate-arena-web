<script setup>
import Header from "@/views/components/Header.vue";
import Footer from "@/views/components/Footer.vue";

import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

const PagesWithoutFooter = [
  'map',
  'game',
]
</script>

<template>
  <Header />

  <router-view v-slot="{ Component }">
    <keep-alive :include="['game']">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <Footer v-if="!PagesWithoutFooter.includes(route.name)" />
</template>

<style lang="pcss">
@layer base;
@layer common;

@import url(./assets/css/base.pcss) layer(base);
@import url(./assets/css/common.pcss) layer(common);

#app{
  position: relative;
}
</style>
