<template>
  <nav>
    <ul>
      <span class="gutter"></span>
      <li>
        <router-link class="blue" to="/">
          <span class="link_text">Home</span>
        </router-link>
      </li>
      <span class="gutter"></span>
      <li>
        <router-link class="orange" to="/portfolio">
          <span class="link_text">Portfolio</span>
        </router-link>
      </li>
      <span class="gutter"></span>
      <li>
        <router-link class="gray" to="/utilities">
          <span class="link_text">Utilities</span>
        </router-link>
      </li>
      <span class="gutter"></span>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "navbar",
};
</script>

<style scoped lang="scss">
a{
  flex: 1;
  display: flex;
  border: solid black 2px;
  vertical-align: middle;
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
}

ul {
  display: flex;
}

li {
  flex: 3;
  display: flex;
  list-style: none;
  margin-top: 1vh;
  text-align: center;
  height: 5vh;
}

.gray {
  background-color: lightgray;
}

.blue {
  background-color: lightblue;
}

.orange {
  background-color: rgb(255, 166, 0);
}

.router-link-exact-active.orange {
  border-bottom-color: rgb(255, 166, 0);
}

.router-link-exact-active.gray {
  border-bottom-color: lightgray;
}

.router-link-exact-active.blue {
  border-bottom-color: lightblue;
}

.gutter {
  flex: 1;
  border-bottom: solid black 2px;
}

.link_text {
  flex: 1;
  align-self: center;
}
</style>
