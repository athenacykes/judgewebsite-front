const state = {
  user_all:{},
  username:"",
  user_head:"",
  user_show_star:[],
  user_index:"",
  user_show_id:[],
  user_demand_show:0
};

const getters = {
  get_user_all: state => state.user_all,
  get_username: state => state.username,
  get_user_head: state => state.user_head,
  get_user_show_star: state => state.user_show_star,
  get_user_index:state => state.user_index,
  get_user_show_id: state => state.user_show_id,
  get_user_demand_show: state => state.user_demand_show,

};
const mutations = {
  set_user_all(state, index) {
    state.user_all = index;
  },
  set_username(state, index) {
    state.username = index;
  },
  set_user_head(state, index) {
    state.user_head = index;
  },
  set_user_show_star(state, index) {
    state.user_show_star = index;
  },
  set_user_index(state, index) {
    state.user_index = index;
  },
  set_user_show_id(state, index) {
    state.user_show_id = index;
  },
  set_user_demand_show(state, index) {
    state.user_demand_show = index;
  },
};

export default {
  state,
  getters,
  mutations
};
