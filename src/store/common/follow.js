const state = {
  follow_name:{},

};

const getters = {
  get_follow_name :state => state.follow_name,

};
// const actions = {};
const mutations = {
  set_follow_name(state, index) {
    state.follow_name = index;
  },

};

export default {
  state,
  getters,
  mutations
};
