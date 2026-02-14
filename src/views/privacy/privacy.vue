<script setup>
</script>

<template>
  <div class="wrapper">
    <h2>{{ $t('privacy.title') }}</h2>

    <h3>{{ $t('privacy.s1_title') }}</h3>
    <p>{{ $t('privacy.s1_content_p1') }}</p>
    <p>{{ $t('privacy.s1_content_p2') }}</p>

    <h3>{{ $t('privacy.s2_title') }}</h3>
    <p>{{ $t('privacy.s2_content_p1') }}</p>
    <p>{{ $t('privacy.s2_content_p2') }}</p>
    <p>{{ $t('privacy.s2_content_p3') }}</p>

    <h3>{{ $t('privacy.s3_title') }}</h3>
    <p>{{ $t('privacy.s3_content_p1') }}</p>
    <p>{{ $t('privacy.s3_content_p2') }}</p>

    <h3>{{ $t('privacy.s4_title') }}</h3>
    <p>{{ $t('privacy.s4_content_p1') }}</p>
    <p>{{ $t('privacy.s4_content_p2') }}</p>

    <h3>{{ $t('privacy.s5_title') }}</h3>
    <p>{{ $t('privacy.s5_content') }}</p>

    <h3>{{ $t('privacy.s6_title') }}</h3>
    <p>{{ $t('privacy.s6_content') }}</p>

    <h3>{{ $t('privacy.s7_title') }}</h3>
    <p>{{ $t('privacy.s7_content') }}</p>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  padding: 20px 20px 100px;
  white-space: pre-wrap;
  max-width: 1000px;
}
h2{
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: #444;
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
