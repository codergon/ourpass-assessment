import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import invoice from "./invoice";

export default store(function () {
  const Store = createStore({
    modules: {
      invoice,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
