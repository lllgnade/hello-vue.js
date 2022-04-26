<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hello">Hello</router-link> |
    <router-link :to="{ name: 'detailPost', params: { id: 125321 } }"
      >Post</router-link
    >
    |
    <!-- /post/125321/comments 경로를, name과 param을 명시함으로써 자동으로 완성해줌. -->
    <router-link :to="{ name: 'comments', params: { id: 125321 } }"
      >Comments</router-link
    >
  </nav>
  <router-view class="view left-sidebar" name="NotFoundView" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
