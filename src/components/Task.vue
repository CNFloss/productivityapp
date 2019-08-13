<template>
  <div class="container" >
    <span class="arrows">
      <span
        class="arrow"
        v-if = "meta.column !== 0"
        @click = "move({x:0, y:-1})"
      >
        &uarr;
      </span>
      <span
        class="arrow"
        v-if = "meta.row !== 0"
        @click = "move({x:-1, y:0})"
      >
        &larr;
      </span>
    </span>
    <span class="task" draggable="true" @drag = "handleDrag">
      <h5> Hour: {{ meta.column }} </h5>
      <p>
        {{ meta.task }}
      </p>
    </span>
    <span class="arrows">
      <span
        class="arrow"
        v-if = "meta.row !== 6"
        @click = "move({x:1, y:0})"
      >
      &rarr;
    </span>
    <span
        class="arrow"
        v-if = "meta.column !== 23"
        @click = "move({x:0, y:1})"
      >
        &darr;
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    meta: {
      value: Object,
      task: String,
      row: Number,
      column: Number,
    },
  },
  methods: {
    move({ x, y }) {
      this.$store.commit("moveTask", {
        xOld: this.meta.row,
        yOld: this.meta.column,
        xNew: x,
        yNew: y,
      });
    },
    handleDrag(event) {
      event.preventDefault();
      this.$store.commit("transferTaskPickUp", {
        x: this.meta.row,
        y: this.meta.column,
        text: this.meta.task,
      });
    },
  },
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

span {
  text-align: center;
  align-self: center;
}

p {
  text-align: center;
}

.arrow {
  box-sizing: content-box;
  flex: 1;
  background-color: white;
  border: solid black 1px;
  width: 1vw;
}

.arrow:hover {
  cursor: pointer;
}

.arrows {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  margin: 0 4px 4px 4px;
  background-color: lightgrey;
  min-height: 8vh;
}

.task {
  flex: 6;
}
</style>
