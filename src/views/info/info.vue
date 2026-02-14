<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="ct">
      <h3>{{ $t('info.s1_title') }}</h3>
      <p>{{ $t('info.s1_content_p1') }}</p>
      <p>{{ $t('info.s1_content_p2') }}</p>
      <p>{{ $t('info.s1_content_p3') }}</p>
      <p>{{ $t('info.s1_content_p4') }}</p>
      <p>{{ $t('info.s1_content_p5') }}</p>
      <p>{{ $t('info.s1_content_p6') }}</p>

      <h3>{{ $t('info.s2_title') }}</h3>
      <p>{{ $t('info.s2_content') }}</p>

      <h3>{{ $t('info.s3_title') }}</h3>
      <p>{{ $t('info.s3_content') }}</p>

      <h3>{{ $t('info.s4_title') }}</h3>
      <p>{{ $t('info.s4_content_p1') }}</p>
      <p>{{ $t('info.s4_content_p2') }}</p>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  padding: 20px 20px 100px;
  white-space: pre-wrap;
  max-width: 1000px;
}
h3{
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
}
p{
  margin-top: 7px;
}
</style>
