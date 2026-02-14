<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="ct">
      <div class="top">
        <h1>{{ $t('gameName') }}</h1>
        <h3 style="white-space: pre-wrap">{{ $t('gameDesc') }}</h3>
      </div>
      <div class="bottom">
        <p>{{ $t('inDevelopment') }}<b>🚧</b></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  margin-top: -32.4px;
}
.ct{
  position: relative;
  min-height: 100vh;
  background: rgba(0,0,0,.7) url(@/assets/img/bg.png) center center / cover no-repeat;
  .top{
    margin-left: 12vw;
    padding-top: 40vh;
    max-width: 570px;
    h1{
      color: var(--main);
      font-size: 36px;
      font-weight: bold;
      text-shadow: rgba(0, 0, 0, .8) 0 0 20px;
    }
    h3{
      padding-top: 20px;
      color: rgba(255,255,255,.8);
      font-size: 20px;
    }
  }
  .bottom{
    position: absolute;
    bottom: 5vh;
    width: 100%;
    p{
      text-align: center;
      font-size: 20px;
      color: rgba(255,255,255,.8);
      b{
        font-size: 40px;
      }
    }
  }
}
</style>
