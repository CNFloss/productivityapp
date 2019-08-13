<template>
  <div id="utilities">
    <div class="toolbox">

    </div>
    <div class="workbench">
      <div class="calendar">
        <DayPlanner v-for = "(day, row) in calendar" :key = "row" :meta = "{day: day, row: row}" />
      </div>
    </div>
    <div class="dashboard">
      <Clock />
      <Timer />
    </div>
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";
import Timer from "../components/Timer.vue";
import DayPlanner from "../components/DayPlanner.vue";

export default {
  name: "utilities",
  components: {
    Clock,
    Timer,
    DayPlanner,
  },
  data() {
    return {
      calendar: this.$store.state.week,
    };
  },
};
</script>

<style scoped lang="scss">
#utilities {
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  max-height: 94vh;
  max-width: 100vw;
}

.calendar {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 5px;
}

.dashboard {
  flex: 1;
  max-width: 15vw;
}

.toolbox {
  flex: 1;
}

.workbench {
  flex: 8;
  width: auto;
  overflow: auto;
}
</style>
