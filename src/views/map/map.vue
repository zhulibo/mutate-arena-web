<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="map">
      <div class="item item-dust">
        <div class="map-name">{{ $t('map.dust') }}</div>
      </div>
      <div class="item item-farm">
        <div class="map-name">{{ $t('map.farm') }}</div>
      </div>
      <div class="item item-playground">
        <div class="map-name">{{ $t('map.playground') }}</div>
      </div>
      <div class="item item-crossroads">
        <div class="map-name">{{ $t('map.crossroads') }}</div>
      </div>
      <div class="item item-arena">
        <div class="map-name">{{ $t('map.arena') }}</div>
      </div>
      <div class="item item-trainingGround">
        <div class="map-name">{{ $t('map.trainingGround') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.map{
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  .item{
    height: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .map-name{
      padding-right: 7vw;
      padding-bottom: 7vh;
      font-size: 25px;
      color: rgba(255,255,255,0.8);
      text-shadow: rgba(0,0,0,0.8) 0 0 5px;
    }
  }
  .item-dust{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-farm{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-playground{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-crossroads{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-arena{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-trainingGround{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
}
</style>
