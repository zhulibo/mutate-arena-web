<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { LOCALE_KEY } from "@/lang/index.js";

import {ref} from "vue";
import dayjs from "dayjs";

const router = useRouter()
const navTo = (e) => {
  router.push({path: e})
}

const { locale } = useI18n();
const switchLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh';
  localStorage.setItem(LOCALE_KEY, locale.value);
}

const dateStr = ref()
dateStr.value = dayjs().format('YYYY')

const openUrl = (url) => {
  window.open(url)
}

</script>

<template>
  <div class="footer">
    <div class="top">
      <ul class="test-server">
        <li @click="navTo('testServer')">加入测试服</li>
      </ul>
      <div class="lang-switch" @click="switchLang()">
        <span class="lang-btn" :class="{ active: locale === 'zh' }">中</span>
        <span class="divider">/</span>
        <span class="lang-btn" :class="{ active: locale === 'en' }">en</span>
      </div>
    </div>
    <div class="links">
      <ul class="list1">
        <li @click="navTo('privacy')">{{ $t('footer.privacy') }}</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      <ul class="list2">
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      <ul class="list3">
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      <ul class="list4">
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </div>
    <ul class="media">
      <li title="bilibili" @click="openUrl('https://space.bilibili.com/11741743')">
        <icon name="bilibili" size="40px" />
      </li>
      <li title="qq频道" @click="openUrl('https://pd.qq.com/s/2b4kjxms7')">
        <icon name="qq-channel" size="20px" />
      </li>
      <li title="discord" @click="openUrl('https://discord.gg/2tNJpfHfXK')">
        <icon name="discord" size="25px" />
      </li>
      <li title="github" @click="openUrl('https://github.com/zhulibo/MutateArena')">
        <icon name="github" size="25px" />
      </li>
    </ul>
    <p class="copyright">Copyright © 2023-{{dateStr}} zhulibo(yoyoyoochn@outlook.com)</p>
  </div>
</template>

<style scoped lang="pcss">
.footer{
  padding-top: 10px;
  padding-bottom: 5px;
  color: #444;
  background-color: rgba(var(--main-rgb), .5);
  box-shadow: rgba(0,0,0,.2) 0 0 10px;
}
.top{
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.test-server{
  flex: 1;
  li{
    display: inline-block;
    padding: 5px 10px;
    color: #eee;
    font-weight: bold;
    background-color: var(--main);
    cursor: pointer;
  }
}
.lang-switch {
  cursor: pointer;
  .lang-btn {
    opacity: 0.4;
    transition: all 0.2s;
    padding: 2px 2px;
    &:hover {
      opacity: 0.6;
    }
    &.active {
      opacity: 1;
    }
  }
}
.links{
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  ul{
    flex: 1;
    li{
      padding: 2px 5px;
      cursor: pointer;
    }
  }
}
.media{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  li{
    padding: 0 15px;
    cursor: pointer;
    &:hover{
      color: #000;
    }
    filter: drop-shadow(0 0 5px rgba(255,255,255,.4));
  }
}
.copyright{
  text-align: center;
  font-size: 12px;
  color: #444;
}
</style>
