<template>
  <div id="home">
    <header class="title">
      <h2 class="title_one">Colin Floss</h2>
      <span class="decal"> | </span>
      <h2 class="title_two">Web Developer</h2>
    </header>
    <main class="container">
      <div class="bio">
        <div class="bio_card">
          <h4 class="bio_card-title">About Me</h4>
          <p class="bio_card-paragraph">
            This will hold some text describing myself and my personal likes
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {

  },
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  background-color: lightblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.bio {
  display: flex;

  &_card {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    background-color: white;
    border: black solid 2px;

    &-title {
      flex: 1;
    }

    &-paragraph {
      flex: 1;
      margin-top: 1rem;
    }
  }
}

.container {
  display: flex;
  justify-content: center;
}

.decal {
  flex: 1;
  align-self: center;
}

.title {
  display: flex;
  height: 20vh;
  max-width: 20%;
  margin-left: 50%;
  transform: translateX(-50%);

  &_one {
    box-sizing: border-box;
    flex: 6;
    margin-left: 25px;
    padding-left: 25px;
    align-self: center;
  }

  &_two {
    box-sizing: border-box;
    flex: 6;
    margin-right: 25px;
    align-self: center;
  }
}
</style>
