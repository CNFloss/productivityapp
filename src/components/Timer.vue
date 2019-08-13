<template>
  <div class="timer">
    <div class="timer_face">
      <span class="timer_face-ticker">
        {{ formattedUITime }}
      </span>
    </div>
    <div class="timer_UI">
      <div class="timer_UI-input">
        <span id="hour">
          <label for="hours">Hours</label>
          <input type="number" v-model="timerInput[0]" name="hours" min="0" max="24">
        </span>
        <span id="minutes">
          <label for="minutes">Minutes</label>
          <input type="number" v-model="timerInput[1]" name="minutes" min="0" max="60">
        </span>
        <span id="seconds">
          <label for="seconds">Seconds</label>
          <input type="number" v-model="timerInput[2]" name="seconds" min="0" max="60">
        </span>
      </div>
      <button id="start" @click="startTimer"> Start </button>
      <button id="stop" @click="stopTimer"> Stop </button>
      <button id="pause" @click="pauseTimer"> Pause </button>
      <button id="continue" @click="continueTimer"> Continue </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "timer",
  data() {
    return {
      startTime: 0,
      start: null,
      ticker: 0,
      timeElapsed: [0, 0, 0],
      timerInput: [0, 0, 0],
    };
  },
  computed: {
    formattedUITime() {
      const h = this.timeElapsed[0] < 10 ? `0${this.timeElapsed[0]}` : `${this.timeElapsed[0]}`;
      const m = this.timeElapsed[1] < 10 ? `0${this.timeElapsed[1]}` : `${this.timeElapsed[1]}`;
      const s = this.timeElapsed[2] < 10 ? `0${this.timeElapsed[2]}` : `${this.timeElapsed[2]}`;
      return `${h}:${m}:${s}`;
    },
    inputInMilliseconds() {
      const h = (this.timerInput[0] * 3600000);
      const m = (this.timerInput[1] * 60000);
      const s = (this.timerInput[2] * 1000);
      return h + m + s;
    },
  },
  watch: {
    ticker() {
      if (this.inputInMilliseconds <= this.ticker - this.startTime) {
        clearInterval(this.tickerID);
        this.start = false;
        this.startTime = 0;
      }
      this.updateTicker();
    },
  },
  methods: {
    updateTicker() {
      // eslint-disable-next-line
      const temp = this.startTime > 0 ? this.inputInMilliseconds - (this.ticker - this.startTime) : 1;
      this.$set(this.timeElapsed, 0, Math.floor(temp / 3600000));
      this.$set(this.timeElapsed, 1, Math.floor(Math.round(temp / 1000) / 60));
      this.$set(this.timeElapsed, 2, (Math.round(temp / 1000)) % 60);
    },
    startTimer() {
      if (!this.start) {
        this.start = true;
        this.startTime = new Date().getTime();
        this.timeElapsed = this.timerInput.map(unit => Number(unit));
        this.tickerID = setInterval(() => {
          this.ticker = new Date().getTime();
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.tickerID);
      this.start = false;
      this.startTime = 0;
      this.timeElapsed = [0, 0, 0];
      this.timerInput = this.timeElapsed;
    },
    pauseTimer() {
      clearInterval(this.tickerID);
      this.start = false;
    },
    continueTimer() {
      this.startTime = new Date().getTime();
      this.timerInput = this.timeElapsed.map(unit => Number(unit));
      this.tickerID = setInterval(() => {
        this.ticker = new Date().getTime();
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">

input {
  text-align: center;
}

.timer {
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  border: solid black 4px;
  text-align: center;
  margin: 4px;

  &_face {
    flex: 1;
    align-self: center;
    width: 100%;
    border-bottom: solid black 4px;
  }

  &_UI {
    display: flex;
    flex: 1;
    flex-flow: column;
    width: 10vw;

    &-input {
      display: flex;
      flex-flow: column;
    }
  }
}
</style>
