<template>
  <div id="app">
    <Navbar />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
