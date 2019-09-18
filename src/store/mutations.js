//store.commit("SET_SPARE_PARTS", [{}]);
const mutations = {
  SET_SPARE_PARTS: (state, arr) => {
    state.spareParts = arr;
  }
};
export default mutations;
