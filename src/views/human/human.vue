<script setup>
</script>

<template>
  <div class="wrapper">
    <ul class="human">
      <li>
        <div class="img-ct">
          <img src="../../assets/img/bg.png" alt="">
          <img src="../../assets/img/bg.png" alt="">
        </div>
        <p>{{ $t('human.solider') }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  padding: 20px 10px 100px;
}
.human{
  li{
    margin: 10px 10px 0;
    display: inline-block;
    .img-ct{
      position: relative;
      width: 200px;
      height: 300px;
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity 0.3s;
      }
      img:nth-child(2){
        opacity: 0;
      }
      &:hover img:nth-child(1){
        opacity: 0;
      }
      &:hover img:nth-child(2){
        opacity: 1;
      }
    }
    p{
      margin-top: 5px;
      text-align: center;
    }
  }
}
</style>
