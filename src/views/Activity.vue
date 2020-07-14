<template>
  <div class="activity">
    <router-link :to="{name: 'academic'}">学术讨论</router-link>
    <router-link to="/activity/personal">个人中心</router-link>
    <router-link to="/activity/download">资源下载</router-link>
    <div class="activity-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
    padding: 5px 10px;
    margin-right: 10px;
  }
  a.link-exact-active {
    background-color: #3385ff;
    color: #fff;
  }
  .activity-view {
    margin-top: 40px;
    padding-left: 10px;
  }
</style>