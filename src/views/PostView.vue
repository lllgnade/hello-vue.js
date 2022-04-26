<script setup>
import Post from "@/components/PostComp.vue";
</script>

<template>
  <div class="hello">
    <Post msg="Hello Post!!" />
  </div>
  <!--라우터에서 설정한 Children Component-->
  <router-view></router-view>
</template>
