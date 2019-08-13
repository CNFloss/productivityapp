import Utilities from "./views/Utilities.vue";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";

export default [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/utilities", component: Utilities },
];
