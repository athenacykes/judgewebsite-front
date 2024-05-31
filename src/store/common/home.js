const state = {
  show_id:[],
  search:{},
  lang_zh:"",
  home_show_star:[],
  home_index: "",
  setting_index: "",
  password_index: "",
  login_index: "",
  collect_list:[],//收藏夹列表
  collect_id_list:[],//收藏夹id列表
   
  search_form: {
    time: "不限",
    keywords: "",
    maybe_in_keywords: "",
    exclude_keywords: "",
    tag: {
      keywords: [],
      maybe_in_keywords: [],
      exclude_keywords: []
    },
    time_params: {
      start_time: 0,
      end_time: parseInt(new Date().getTime() / 1000)
    },
    region_params: ["不限"], //区域
    field_params: ["不限"], //领域
    column_params: ["不限"], //话题
    // source_params: ["不限"], //数据源
    lang_params: ["不限"], //语种
    sort_params: {},
    search_fields: ["概况.标题", "概况.全文", "概况.作者",,  "概况.关键词"],
    // publish_name: "",  
    relation_search_params:[ ],
    start_num: 0,
    total_num: 10,
  },
};

const getters = {
  get_home_index: state => state.home_index,
  get_content: state => state.content,
  get_search_form: state => state.search_form,
  get_show_id: state => state.show_id,
  get_search:state => state.search,
  get_home_show_star:state => state.home_show_star,
  get_lang_zh:state => state.lang_zh,
  get_collect_list:state => state.collect_list,
  get_collect_id_list:state => state.collect_id_list,
};
const mutations = {
  set_home_index(state, index) {
    state.home_index = index;
  },
  set_content(state, index) {
    state.content = index;
  },
  set_search_form(state, index) {
    state.search_form = index;
  },
  set_show_id(state, index) {
    state.show_id = index;
  },
  set_search(state, index) {
    state.search = index;
  },
  set_home_show_star(state, index) {
    state.home_show_star = index;
  },
  set_lang_zh(state, index) {
    state.lang_zh = index;
  },
  set_collect_list(state, index) {
    state.collect_list = index;
  },
  set_collect_id_list(state, index) {
    state.collect_id_list = index;
  },
};

export default {
  state,
  getters,
  mutations
};
