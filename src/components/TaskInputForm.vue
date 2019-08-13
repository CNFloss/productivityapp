<template>
  <div class="taskInputForm">
    <span class="hourSelection">
      <label for="hours">Select Hour</label>
      <input type="number" v-model = "selectedHour" min="0" max="23" name="hours">
    </span>
    <textarea class="textInput" rows="5" cols="20" v-model = "currentInput"></textarea>
    <button @click="passTaskMetaToStore">+ Add Task</button>
  </div>
</template>

<script>

export default {
  name: "taskInputForm",
  props: {
    meta: {
      value: Object,
      index: Number,
    },
  },
  data() {
    return {
      currentInput: "",
      selectedHour: 0,
    };
  },
  methods: {
    passTaskMetaToStore() {
      this.$store.commit("addTaskToDay", {
        task: this.currentInput,
        hour: this.selectedHour,
        day: this.meta.index,
      });
      this.currentInput = "";
    },
  },
};
</script>

<style scoped lang="scss">
input {
  flex: 1;
  text-align: center;
  margin: 2px;
}

label {
  flex: 1;
  margin-left: 10px;
}

.hourSelection {
  flex: 1;
  display: flex;
}

.taskInputForm {
  display: flex;
  flex-flow: column;
}

.textInput {
  flex: 1;
  margin: 2px;
  resize: none;
}
</style>
