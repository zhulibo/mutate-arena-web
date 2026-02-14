<script setup>
import { useRouter, useRoute } from 'vue-router'
import { BaseRoutes} from "@/router/index.js";

const router = useRouter()
const route = useRoute()

const navTo = (e) => {
  router.push({path: e})
}
</script>

<template>
  <div class="header">
    <ul class="nav">
      <template v-for="item in BaseRoutes">
        <li
          v-if="item.meta && item.meta.isNav"
          :key="item.name"
          @click="navTo(item.path)"
          :class="{active: item.name === route.name}">
          {{ $t(`nav.${item.name}`) }}
        </li>
      </template>

    </ul>
  </div>
</template>

<style scoped lang="pcss">
.header{
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 1;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav{
  overflow-x: auto;
  padding: 0 10px;
  white-space: nowrap;
  box-shadow: rgba(0,0,0,.2) 0 0 5px;
  background-color: rgba(255,255,255,.7);
  backdrop-filter: blur(2px);
  li{
    display: inline-block;
    padding: 5px 10px;
    min-width: 3em;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: color .2s;
    &.active{
      color: var(--main);
      font-weight: bold;
    }
  }
}
</style>
