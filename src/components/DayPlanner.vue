<template>
  <div class="day" @dragenter="handleDragEnter" @dragover="handleDragEnter" @drop="handleDrop">
    <h3 class="title">
      {{ meta.day.name }}
    </h3>
    <span
      class="expandButton"
      v-if = "!expanded"
      @click = "expanded = !expanded"
    >
      &darr;
    </span>
    <span
      class="collapseButton"
      v-if = "expanded"
      @click = "expanded = !expanded"
    >
      &uarr;
    </span>
    <keep-alive>
      <TaskInputForm
        :meta = "{ index: meta.row }"
        v-if = "expanded"
      />
    </keep-alive>
    <div class="schedule" v-if = "expanded">
      <Task
        v-for = "(todo, column) in meta.day.plan"
        :key = "column"
        :meta = "{task:todo, row: meta.row, column: column}"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import TaskInputForm from "./TaskInputForm.vue";

export default {
  name: "dayPlanner",
  components: {
    Task,
    TaskInputForm,
  },
  props: {
    meta: {
      value: Object,
      day: Object,
      row: Number,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();
      this.$store.commit("transferTaskDropOff", {
        x: this.meta.row,
      });
    },
    handleDragOver(event) {
      event.preventDefault();
    },
    handleDragEnter(event) {
      event.preventDefault();
    },
  },
};
</script>

<style scoped lang="scss">
.day {
  display: flex;
  background-color: darkgrey;
  flex-direction: column;
  flex: 1;
  margin-left: 5px;
}

.day:last-of-type {
  margin-right: 5px;
}

.title {
  text-align: center;
  padding: 1rem;
}

.schedule {
  flex-direction: column;
  flex: 1;
  display: flex;
}
</style>
