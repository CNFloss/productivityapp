<template>
  <div class="clock">
    <div class="clock_face">
      <div class="clock_face-hand">
          <span class="hours">{{ hours }}</span>
      </div>
      <div class="clock_face-hand">
          <span class="minutes">{{ minutes }}</span>
      </div>
      <div class="clock_face-hand">
          <span class="seconds">{{ seconds }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "clock",
  data() {
    return {
      time: new Date(),
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  watch: {
    time() {
      this.updateTime();
    },
  },
  methods: {
    updateTime() {
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentTime();
      }, 1000);
    },
    currentTime() {
      this.time = new Date();
      this.hours = this.time.getHours() % 12 === 0 ? 12 : this.time.getHours() % 12;
      this.minutes = this.time.getMinutes() % 60 === 0 ? 60 : this.time.getMinutes() % 60;
      this.seconds = this.time.getSeconds() % 60 === 0 ? 60 : this.time.getSeconds() % 60;
    },
  },
  mounted() {
    this.currentTime();
  },
};
</script>

<style scoped lang="scss">
.hours {
  flex: 1;
  align-self: center;
}

.minutes {
  flex: 1;
  align-self: center;
}

.seconds {
  flex: 1;
  align-self: center;
}

.clock {
  display: flex;
  flex-flow: column;

  &_face {
    display: flex;
    text-align: center;

    &-hand {
      flex: 1;
      height: 25vh;
      display: flex;
      border: solid black 4px;
      border-radius: 50% 50% 50% 50%;
      margin: 4px 5%;
    }
  }
}
</style>
