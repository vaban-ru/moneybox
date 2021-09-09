import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boxes: [],
  },
  mutations: {
    setAllBoxes(state, boxes) {
      state.boxes = boxes;
    },
    addNewBox(state, box) {
      state.boxes.push(box);
    },
    editBox(state, box) {
      const index = state.boxes.findIndex((findBox) => box.id === findBox.id);
      state.boxes[index] = box;
    },
    deleteBox(state, boxId) {
      const index = state.boxes.findIndex((findBox) => boxId === findBox.id);
      state.boxes.splice(index, 1);
    },
  },
  actions: {
    getAllBoxes({ commit }) {
      const allBoxes = JSON.parse(window.localStorage.getItem("moneyboxes"));
      if (allBoxes && allBoxes.length > 0) {
        commit("setAllBoxes", allBoxes);
      }
    },
    addNewBox({ commit }, box) {
      commit("addNewBox", box);
      window.localStorage.setItem(
        "moneyboxes",
        JSON.stringify(this.state.boxes)
      );
    },
    editBox({ commit }, box) {
      commit("editBox", box);
      window.localStorage.setItem(
        "moneyboxes",
        JSON.stringify(this.state.boxes)
      );
    },
    deleteBox({ commit }, boxId) {
      commit("deleteBox", boxId);
      window.localStorage.setItem(
        "moneyboxes",
        JSON.stringify(this.state.boxes)
      );
    },
  },
  modules: {},
});
