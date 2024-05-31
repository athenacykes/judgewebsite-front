const state = {
  news_data: [
     
  ],
  news_show: 0,
  setting_demand_form_show:false,
  setting_demand_form_confirm_show:false,
  setting_demand_form:{}
};
const getters = {
  get_news_data: state => state.news_data,
  get_news_show: state => state.news_show,
  get_setting_demand_form_show: state => state.setting_demand_form_show,
  get_setting_demand_form_confirm_show: state => state.setting_demand_form_confirm_show,
  get_demand_form: state => state.demand_form,

};
const mutations = {
  set_news_data(state, index) {
    state.news_data = index;
  },
  set_news_show(state, index) {
    state.news_show = index;
  },
  set_setting_demand_form_show(state, index) {
    state.setting_demand_form_show = index;
  },
  set_setting_demand_form_confirm_show(state, index) {
    state.setting_demand_form_confirm_show = index;
  },
  set_demand_form(state, index) {
    state.demand_form = index;
  }
};

export default {
  state,
  getters,
  mutations
};
