/*
 * store.dispatch('setSpareParts', [{}])
 * */
const actions = {
  setSpareParts({ commit, state }, arr) {
    commit("SET_SPARE_PARTS", arr);
  }
};
export default actions;
