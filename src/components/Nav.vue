<template>
  <div class="main_nav">
    <router-link to="/opus">仓库</router-link>
    <router-link to="/userOpus">个人信息详细页</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.main_nav {
  background: blue;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
}
</style>