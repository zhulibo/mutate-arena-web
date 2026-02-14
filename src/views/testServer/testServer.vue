<script setup>

</script>

<template>
  <div class="wrapper">
    <h3>如何加入测试服？</h3>
    <p>
      你需要打开并登录<a href="https://www.epicgames.com/account/personal">https://www.epicgames.com/account/personal</a>，复制账号ID发送到邮箱 yoyoyoochn@outlook.com，我大概每周会看一次。
    </p>
    <img src="@/assets/img/send-id.png" alt="">
    <p>我会把账号添加进玩家组(只有添加进组的账号才有访问Epic在线服务的权限)，然后发key。</p>
    <p>
      你会收到两个key，stage为测试环境，dev为开发环境（极不稳定），在Epic Game Launcher中兑换即可（请使用之前提供ID的账号兑换，不然无法联机）。
    </p>
    <img src="@/assets/img/read-code.png" alt="">
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  padding: 20px 20px 100px;
}
h3{
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
}
p{
  margin-top: 10px;
}
img{
  margin-top: 5px;
  max-width: 700px;
  width: 100%;
}
a{
  color: -webkit-link;
}
</style>
