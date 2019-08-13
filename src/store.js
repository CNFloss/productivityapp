import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    week: [
      { name: "Sunday", plan: new Array(24) },
      { name: "Monday", plan: new Array(24) },
      { name: "Tuesday", plan: new Array(24) },
      { name: "Wednesday", plan: new Array(24) },
      { name: "Thursday", plan: new Array(24) },
      { name: "Friday", plan: new Array(24) },
      { name: "Saturday", plan: new Array(24) },
    ],
    draggedTask: [],
  },
  mutations: {
    addTaskToDay(state, { task, hour, day }) {
      if (!state.week[day].plan[hour]) {
        state.week[day].plan.splice(hour, 1, task);
      }
    },
    moveTask(state, {
      xOld, yOld, xNew, yNew,
    }) {
      if (!state.week[xOld + xNew].plan[yOld + yNew] && !!state.week[xOld].plan[yOld]) {
        state.week[xOld + xNew].plan.splice((yOld + yNew), 1, state.week[xOld].plan[yOld]);
        state.week[xOld].plan.splice(yOld, 1, null);
      }
    },
    transferTaskPickUp(state, { x, y, text }) {
      if (state.draggedTask.length === 0) {
        state.draggedTask.push({ task: text, day: x, hour: y });
      }
    },
    transferTaskDropOff(state, { x }) {
      if (state.draggedTask.length === 1
      && state.week[x].plan[state.draggedTask[0].hour] !== state.draggedTask[0].task) {
        state.week[x].plan.splice(state.draggedTask[0].hour, 1, state.draggedTask[0].task);
        state.week[state.draggedTask[0].day].plan.splice(state.draggedTask[0].hour, 1, null);
        state.draggedTask.pop();
      }
    },
  },
  actions: {

  },
});
