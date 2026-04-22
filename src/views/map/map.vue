<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="map">
      <div class="item item-ConstructionSite">
        <div class="map-name">{{ $t('map.ConstructionSite') }}</div>
      </div>
      <div class="item item-Playground">
        <div class="map-name">{{ $t('map.Playground') }}</div>
      </div>
      <div class="item item-RoseManor">
        <div class="map-name">{{ $t('map.RoseManor') }}</div>
      </div>
      <div class="item item-Arena">
        <div class="map-name">{{ $t('map.Arena') }}</div>
      </div>
      <div class="item item-TrainingGround">
        <div class="map-name">{{ $t('map.TrainingGround') }}</div>
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
  .item-RoseManor{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-Playground{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-ConstructionSite{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-Arena{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
  .item-TrainingGround{
    background: rgba(0,0,0,.7) url("@/assets/img/bg.png") center center / cover no-repeat;
  }
}
</style>
