<template>
  <div>
    <div id="search_compenent">
      <div style="display: flex;">
        <div class="title">裁判综合讨论区</div>
        <div class="post">
          <img class="post_icon" src="./static/message-edit.png" />
          <span class="post_title">发贴</span>
        </div>
      </div>

      <div id="search_header">
        <!-- 简单搜索 -->
        <div style="display: flex;width: 25%;" id="input-btn" v-if="search_simple">
          <div id="simple_input" class="search_input">
            <el-tag :key="tag" v-for="tag in choose_options.tag.keywords" closable :disable-transitions="false"
              style="float: left; max-width: 200px; margin: 5px 5px 0 5px" @close="handleClose(tag, 'keywords')">
              <p :title="tag" style="
                  max-width: 160px;
                  margin: 0;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: inline-block;
                ">
                {{ tag }}
              </p>
            </el-tag>
            <el-input class="input" v-model="choose_options.keywords" placeholder="请输入内容" style="float: left"
              @keydown.enter.native="keydown_enter($event, 'keywords')"></el-input>
          </div>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </div>
        <!-- 与或非检索 -->
        <div v-if="!search_simple" id="threeinput-btn">
          <div class="search_input andornot_input" style="margin-left: 30px">
            <el-tag :key="tag" v-for="tag in choose_options.tag.keywords" closable :disable-transitions="false"
              style="float: left; max-width: 200px; margin: 5px 5px 0 5px" @close="handleClose(tag, 'keywords')">
              <p :title="tag" style="
                  max-width: 160px;
                  margin: 0;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: inline-block;
                ">
                {{ tag }}
              </p>
            </el-tag>
            <el-input v-model="choose_options.keywords" placeholder="+与关键词(必要关键词)" style="width: 200px; float: left"
              @keydown.enter.native="keydown_enter($event, 'keywords')"></el-input>
          </div>
          <div class="search_input andornot_input">
            <el-tag :key="tag" v-for="tag in choose_options.tag.maybe_in_keywords" closable :disable-transitions="false"
              style="float: left; max-width: 200px; margin: 5px 5px 0 5px"
              @close="handleClose(tag, 'maybe_in_keywords')">
              <p :title="tag" style="
                  max-width: 160px;
                  margin: 0;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: inline-block;
                ">
                {{ tag }}
              </p>
            </el-tag>
            <el-input v-model="choose_options.maybe_in_keywords" placeholder="+或关键词(至少一个)"
              style="width: 200px; float: left"
              @keydown.enter.native="keydown_enter($event, 'maybe_in_keywords')"></el-input>
          </div>
          <div class="search_input andornot_input">
            <el-tag :key="tag" v-for="tag in choose_options.tag.exclude_keywords" closable :disable-transitions="false"
              style="float: left; max-width: 200px; margin: 5px 5px 0 5px"
              @close="handleClose(tag, 'exclude_keywords')">
              <p :title="tag" style="
                  max-width: 160px;
                  margin: 0;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: inline-block;
                ">
                {{ tag }}
              </p>
            </el-tag>
            <el-input v-model="choose_options.exclude_keywords" placeholder="+非关键词(过滤关键词)" style="float: left"
              @keydown.enter.native="keydown_enter($event, 'exclude_keywords')"></el-input>
          </div>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </div>

        <!-- 按钮div -->
        <div class="header_button_div" :style="search_simple ? 'width:calc(50% + 200px)' : 'width:500px'">
    

          <div>
            <div class="search_button">
              <el-button type="primary" @click="hide">
                高级检索<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
            </div>
            <div class="search_button" v-if="$route.name == 'home'">
              <el-dropdown trigger="click" @command="search">
                <el-button type="primary">
                  {{ searchValue.name }}<i :class="searchValue.class"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="moren" style="text-align: center">
                    默 认</el-dropdown-item>
                  <el-dropdown-item command="a"><i class="el-icon-top"></i>时间升序</el-dropdown-item>
                  <el-dropdown-item command="b"><i class="el-icon-bottom"></i>时间降序</el-dropdown-item>
                  <el-dropdown-item command="c"><i class="el-icon-top"></i>热度升序</el-dropdown-item>
                  <el-dropdown-item command="d"><i class="el-icon-bottom"></i>热度降序</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="search_button" v-if="$route.name == 'analysis'">
              <el-dropdown trigger="click" @command="set_analysis_type">
                <el-button type="primary">
                  筛选分类<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown"> 
                  <el-dropdown-item command="概况.报道者">报道者</el-dropdown-item>  
                  <el-dropdown-item command="概况.标签">标签</el-dropdown-item>
                  <el-dropdown-item command="概况.领域">领域</el-dropdown-item>
                  <el-dropdown-item command="概况.话题">话题</el-dropdown-item> 
                  <el-dropdown-item command="概况.日期">日期</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
      <!-- 选择框 -->
      <div id="choose" v-show="button_name == '收起'">
        <div id="match_range" style="width: 100%; float: left">
          <div class="choose_type">
            <p>匹配范围</p>
          </div>
          <el-checkbox-group v-model="choose_options.search_fields" style="margin-top: 19px">
            <el-checkbox v-for="(field, i) in search_field_arr" :key="i" :label="field">{{ field.slice(3)
              }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="search_choose">
          <div class="choose_type">
            <p>时间</p>
          </div>
          <el-radio-group v-model="choose_options.time">
            <el-radio-button label="不限" @click.native="time2stamp('不限')"></el-radio-button>
            <el-radio-button v-for="(option, j) in time_options" :key="j" :label="option"
              @click.native="time2stamp(option)">
            </el-radio-button>
            <el-date-picker v-model="datepicker" type="daterange" value-format="timestamp" range-separator="至"
              start-placeholder="开始日期" end-placeholder="结束日期" @click.native="choose_options.time = ''">
            </el-date-picker>
          </el-radio-group>
        </div>
        <div v-for="(option_name, i) in other_options_type" class="search_choose" :key="i">
          <div class="choose_type">
            <p>{{ other_options_type_name[i] }}</p>
          </div>
          <el-checkbox-group v-model="choose_options[option_name]">
            <el-checkbox-button label="不限" @change="nolimit(option_name)">不限</el-checkbox-button>
            <el-checkbox-button v-for="(option, j) in other_options[option_name]" :key="j" :label="option.name"
              @change="limit(option_name)">{{ option.name }}</el-checkbox-button>
            <el-link v-if="option_name == 'lang_params'" type="primary" @click="language_choose">{{ language_more
              }}</el-link>
            <el-link v-if="option_name == 'region_params'" type="primary" @click="country_choose">{{ country_more
              }}</el-link>
          </el-checkbox-group>
        </div>
        <div class="search_choose" style="
            border-top: 2px solid #b4a996;
            margin-top: 20px;
            padding-top: 20px;
          ">
          <div v-for="(relation, i) in choose_options.relation_search_params" :key="i" style="width: 30%; float: left">
            <div class="choose_type">
              <p>{{ relation.key_name.slice(3) }}</p>
            </div>
            <el-input v-model="choose_options.relation_search_params[i].key_keywords" placeholder="请输入"
              style="max-width: 300px"></el-input>
          </div>

   
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { map, each } from "lodash";
import { mapGetters } from "vuex";
// import { delete } from "vue/types/umd";

export default {
  data() {
    return {
      dic: {
        field_params: {},
        column_params: {},
        region_params: {},
        lang_params: {}
      },
      search_simple: true,
      button_name: "更多",
      button_icon_class: {
        更多: "el-icon-arrow-down",
        收起: "el-icon-arrow-up"
      },
      language_more: "更多>>",
      country_more: "更多>>",
      all_language: {},
      all_country: {
        common: [],
        no_common: []
      },
      datepicker: "",
      choose_options: {},
      time_options: [
        "一天内",
        "三天内",
        "一周内",
        "一月内",
        "一季度内",
        "一年内"
      ],
      other_options_type_name: ["领域", "话题"],
      other_options_type: [
        "field_params",
        // "source_params",
        "lang_params",
        "region_params",
        "column_params"
      ],
      other_options: {
        field_params: [],
        // source_params: ["BBC", "CNN", "CNBC", "SKY", "AFP"],
        lang_params: [],
        region_params: [],
        column_params: []
      },
      search_field_arr: [
        "概况.标题",
        "概况.概述",
        "概况.全文",
        "概况.报道者",
        "概况.机构",
        "概况.国家",
        "概况.标签",
        "概况.关键词"
      ],
      //xiaoguai-start
      searchValue: {
        name: "排序",
        class: "el-icon-arrow-down el-icon--right"
      }
      //xiaoguai-end
    };
  },
  computed: {
    ...mapGetters(["get_search_form", "get_search"])
  },
  created() {
    let _this = this;
    this.$ajaxAPI
      .getAllLabel()
      .then(res => {
        var data = res.data.data_list;
        // console.log(data);
        // this.other_options.region_params = map(data["地区"], "name");
        // this.other_options.field_params = map(data["领域"], "name");
        // this.other_options.column_params = map(data["话题"], "name");
        this.other_options.region_params = data["地区"];
        this.other_options.field_params = data["领域"];
        each(data["领域"], function (v, k) {
          _this.dic.field_params[v.name] = v.item_id;
        });
        this.other_options.column_params = data["话题"];
        each(data["话题"], function (v, k) {
          _this.dic.column_params[v.name] = v.item_id;
        });
        this.all_country.common_country_list = this.other_options.region_params;
      })
      .catch(err => {
        console.warn(err);
      });

    this.$ajaxAPI
      .getRegionLang()
      .then(res => {
        // console.log(res.data);
        var data = res.data;
        this.other_options.lang_params = data.lang_data.common_lang_list;

        this.all_language = data.lang_data;
        this.all_country.no_common_country_list =
          data.country_data.no_common_country_list;
        each(data.country_data.no_common_country_list, function (v, k) {
          _this.dic.region_params[v.name] = v.item_id;
        });
        each(data.country_data.common_country_list, function (v, k) {
          _this.dic.region_params[v.name] = v.item_id;
        });
        each(data.lang_data.common_lang_list, function (v, k) {
          _this.dic.lang_params[v.name] = v.item_id;
        });
        each(data.lang_data.no_common_lang_list, function (v, k) {
          _this.dic.lang_params[v.name] = v.item_id;
        });
      })
      .catch(err => {
        console.warn(err);
      });
    this.choose_options = this.get_search_form;
  },
  mounted() {
    let _this = this;
    document.addEventListener("mousedown", function (e) {
      if (_this.button_name == "收起") {
        if (document.getElementsByClassName("el-picker-panel").length == 0) {
          if (!document.getElementById("search_compenent").contains(e.target)) {
            _this.button_name = "更多";
          }
        } else {
          if (
            !document.getElementById("search_compenent").contains(e.target) &&
            !document
              .getElementsByClassName("el-picker-panel")[0]
              .contains(e.target)
          ) {
            _this.button_name = "更多";
          }
        }
      }
    });
  },
  watch: {
    datepicker: function (val) {
      // console.log(val);
      if (!val) {
        this.choose_options.time = "不限";
      }
    },
    get_search_form: function (val) {
      this.choose_options = this.get_search_form;
    },
    choose_options: {
      deep: true,
      handler: function (newV, oldV) {
        this.$store.commit("set_search_form", newV);
      }
    }
  },
  methods: {
    hide() {
      if (this.button_name === "更多") {
        this.button_name = "收起";
      } else {
        this.button_name = "更多";
      }
    },
    nolimit(e) {
      this.choose_options[e] = ["不限"];
    },
    limit(e) {
      if (this.choose_options[e].indexOf("不限") !== -1) {
        this.choose_options[e].splice(
          this.choose_options[e].indexOf("不限"),
          1
        );
      }
      if (this.choose_options[e].length == 0) {
        this.choose_options[e] = ["不限"];
      }
    },
    language_choose() {
      if (this.language_more == "更多>>") {
        this.language_more = "<<收起";
        this.other_options.lang_params = this.all_language.common_lang_list.concat(
          this.all_language.no_common_lang_list
        );
      } else {
        this.language_more = "更多>>";
        this.other_options.lang_params = this.all_language.common_lang_list;
      }
    },
    country_choose() {
      if (this.country_more == "更多>>") {
        this.country_more = "<<收起";
        this.other_options.region_params = this.all_country.common_country_list.concat(
          this.all_country.no_common_country_list
        );
      } else {
        this.country_more = "更多>>";
        this.other_options.region_params = this.all_country.common_country_list;
      }
    },
    search(command) {
      // var post_search = [];
      // each(this.choose_options, function(v, k) {
      //   if (v == "" || v == "不限" || v == ["不限"]) {
      //   } else {
      //     post_search = post_search.concat(v);
      //   }
      // });
      if (this.choose_options.keywords != "") {
        this.choose_options.tag.keywords.push(this.choose_options.keywords);
        this.choose_options.keywords = "";
      }
      if (this.choose_options.maybe_in_keywords != "") {
        this.choose_options.tag.maybe_in_keywords.push(
          this.choose_options.maybe_in_keywords
        );
        this.choose_options.maybe_in_keywords = "";
      }
      if (this.choose_options.exclude_keywords != "") {
        this.choose_options.tag.exclude_keywords.push(
          this.choose_options.exclude_keywords
        );
        this.choose_options.exclude_keywords = "";
      }
      var post_search = JSON.parse(JSON.stringify(this.choose_options));
      delete post_search.time;
      delete post_search.tag;
      if (!this.datepicker) {
        this.datepicker = "";
      }
      if (this.datepicker != "") {
        post_search.time_params.start_time = parseInt(
          this.datepicker[0] / 1000
        );
        post_search.time_params.end_time = parseInt(this.datepicker[1] / 1000);
      }
      // console.log(post_search.time_params);
      var re_list = [
        "lang_params",
        "region_params",
        "field_params",
        "column_params"
      ];
      console.log(post_search.lang_params);
      for (var i = 0; i < re_list.length; i++) {
        var arr = [];
        for (var j = 0; j < post_search[re_list[i]].length; j++) {
          if (post_search[re_list[i]][j] == "不限") {
            arr = ["不限"];
            break;
          }
          arr = arr.concat(this.dic[re_list[i]][post_search[re_list[i]][j]]);
        }
        post_search[re_list[i]] = arr;
      }
      console.log(post_search);
      each(post_search, function (v, k) {
        if (typeof v != "string") {
          post_search[k] = JSON.stringify(v);
        }
        if (v == "不限") {
          post_search[k] = JSON.stringify([]);
        }
      });

      if (command == "a") {
        post_search.sort_params = JSON.stringify({
          sort_by: "概况.日期",
          asc_or_desc: "asc"
        });
      } else if (command == "b") {
        post_search.sort_params = JSON.stringify({
          sort_by: "概况.日期",
          asc_or_desc: "desc"
        });
      } else if (command == "c") {
        post_search.sort_params = JSON.stringify({
          sort_by: "read_count",
          asc_or_desc: "asc"
        });
      } else if (command == "d") {
        post_search.sort_params = JSON.stringify({
          sort_by: "read_count",
          asc_or_desc: "desc"
        });
      } else {
        post_search.sort_params = JSON.stringify({});
      }
      if (this.search_simple) {
        post_search.keywords = "";
        for (var i = 0; i < this.choose_options.tag.keywords.length; i++) {
          post_search.keywords += this.choose_options.tag.keywords[i];
          post_search.keywords += ",";
        }
        post_search.maybe_in_keywords = "";
        post_search.exclude_keywords = "";
      } else {
        post_search.keywords = "";
        for (var i = 0; i < this.choose_options.tag.keywords.length; i++) {
          post_search.keywords += this.choose_options.tag.keywords[i];
          post_search.keywords += ",";
        }
        post_search.maybe_in_keywords = "";
        for (
          var i = 0;
          i < this.choose_options.tag.maybe_in_keywords.length;
          i++
        ) {
          post_search.maybe_in_keywords += this.choose_options.tag.maybe_in_keywords[
            i
          ];
          post_search.maybe_in_keywords += ",";
        }
        post_search.exclude_keywords = "";
        for (
          var i = 0;
          i < this.choose_options.tag.exclude_keywords.length;
          i++
        ) {
          post_search.exclude_keywords += this.choose_options.tag.exclude_keywords[
            i
          ];
          post_search.exclude_keywords += ",";
        }
      }
      post_search.keywords = post_search.keywords.slice(0, -1);
      post_search.maybe_in_keywords = post_search.maybe_in_keywords.slice(
        0,
        -1
      );
      post_search.exclude_keywords = post_search.exclude_keywords.slice(0, -1);
      this.$store.commit("set_search", post_search);
      this.button_name = "更多";
      this.$store.commit("set_home_index", "main");
      if (this.$route.name != "analysis") {
        this.$router.push({ path: "/home" });
      }
    },
    time2stamp(option) {
      if (option == "一天内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24;
        this.datepicker = [start, end];
      } else if (option == "三天内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24 * 3;
        this.datepicker = [start, end];
      } else if (option == "一周内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24 * 7;
        this.datepicker = [start, end];
      } else if (option == "一月内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24 * 30;
        this.datepicker = [start, end];
      } else if (option == "一季度内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24 * 90;
        this.datepicker = [start, end];
      } else if (option == "一年内") {
        var end = new Date().getTime();
        var start = end - 3600 * 1000 * 24 * 365;
        this.datepicker = [start, end];
      } else {
        this.datepicker = "";
      }
    },
    keydown_enter(event, jug) {
      // if (this.choose_options.keywords != "") {
      //   this.search();
      // }'
      if (this.choose_options[jug] != "") {
        this.choose_options.tag[jug].push(this.choose_options[jug]);
        this.choose_options[jug] = "";
      }
      event.preventDefault();
    },
    set_analysis_type(com) {
      if (com == "概况.日期") {
        this.$store.commit("set_analysis_time_show", true);
      } else {
        this.$store.commit("set_analysis_type", com);
        this.search();
      }
    },
    handleClose(tag, jug) {
      this.choose_options.tag[jug].splice(
        this.choose_options.tag[jug].indexOf(tag),
        1
      );
    }
  }
};
</script>
<style scoped>
#search_compenent {
  float: right;
  width: calc(80% - 112px);
  height: 80px;
  /* margin-right: 10px; */
  /* background-color: rgba(248, 247, 252, 1); */
}

#search_header {
  float: left;
  width: 100%;
  height: 80px;
  display: flex;
  margin-left: -30px;
}

#simple_input {
  /* width: 25%; */
  margin-left: 30px;
  /* height: 140px; */
  height: 40px;
  display: flex;
  width: 100%;
}

#input-btn .el-button--default {
  height: 40px;
  margin-top: 20px;
  background-color: #dcdfea;
}

#threeinput-btn {
  display: flex;
  /* width: 75%; */
  width: calc(100% - 500px);
}

#threeinput-btn .el-button--default {
  height: 40px;
  margin-top: 20px;
  background-color: #dcdfea;
}

.search_input {
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
  overflow: scroll;
  float: left;
}

.search_input.andornot_input {
  /* width: 25%; */
  width: 100%;
  margin-left: 10px;
  /* height: 140px; */
  height: 40px;
}

#simple_input .el-textarea {
  height: 140px;
  font-size: 20px;
}

/deep/#search_input .el-textarea textarea {
  height: 140px;
  /* text-align: center; */
  border-radius: 25px;
  font-weight: 500;
  font-family: "siyuan";
  color: black;
}

/deep/.header_button_div .search_button .el-button--primary {
  background-color: #3494D2;
}

.search_button {
  margin-left: 30px;
  /* width: 70px; */
  /* margin-top: 120px; */
  float: left;
}

/deep/ .search_input .el-icon-close {
  top: -10px;
}

/deep/.search_input input {
  /* border-radius: 20px; */
  border: 0px;
  text-align: left;
  width: 100%;
}

.search_choose {
  width: 100%;
  float: left;
  /* height: 60px; */
}

.header_button_div {
  float: left;
  height: 80px;
  display: flex;
  align-items: center;
}

#choose {
  position: relative;
  width: 100%;
  /* height: 320px; */
  max-height: 600px;
  float: left;
  background-color: rgba(248, 247, 252, 1);
  z-index: 999;
  box-shadow: 0 5px 5px #dcdcdc;
  padding-bottom: 20px;
  overflow: scroll;
}

/deep/#choose span {
  border-color: #dcdfe6;
}

.choose_type {
  float: left;
  width: 100px;
}

.choose_type p {
  font-size: 16px;
  float: left;
  text-align: center;
  margin-top: 18px;
  margin-left: 20px;
}

#choose .el-radio-group {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}

#choose .el-checkbox-group {
  float: left;
  width: calc(100% - 120px);
  margin-top: 10px;
  margin-left: 20px;
}

#choose .el-radio-group {
  float: left;
  width: calc(100% - 120px);
  margin-top: 10px;
  margin-left: 20px;
}

#choose .el-checkbox-group label {
  float: left;
}

/deep/.search_choose .el-checkbox-group label span {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 0 0 0;
}

/deep/#match_range .el-checkbox-group label span {
  font-size: 18px;
}

/deep/#match_range .el-checkbox-group label .el-checkbox__inner {
  width: 18px;
  height: 18px;
}

/deep/#match_range .el-checkbox-group label .el-checkbox__inner::after {
  left: 6px;
  top: 3px;
}

/deep/.search_input input {
  background-color: #ECF0F4;
}

#choose .el-radio-group label {
  float: left;
}

#choose .el-checkbox-group a {
  float: left;
  margin: 11px 0 0 18px;
}

.search_choose .el-input {
  float: left;
  width: calc(100% - 150px);
  margin-left: 20px;
  padding: 10px 30px 0 0;
}

.el-date-editor {
  float: left;
  margin-left: 50px;
}

.input {
  width: 320px;
  height: 38px;
  background: #ECF0F4;
  border-radius: 8px 8px 8px 8px;
}

.title {
  width: 834px;
  height: 36px;
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 28px;
  color: #384953;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top:5%;

}

.post {
  width: 90px;
  height: 42px;
  background: #3494D2;
  border-radius: 400px 400px 400px 400px;
  position: absolute;
  right: 15%;
  top:7%;
}

.post_title {
  width: 28px;
  height: 22px;
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 12px;
  position: absolute;
  
}

.post_icon {
  position: absolute;
  left: 16px;
  top: 10px;
}
</style>
