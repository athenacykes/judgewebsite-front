<template>
  <div v-loading.fullscreen.lock="loading">
    <Main id="content" @loading="get_loading" ref="main" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { map } from "lodash";
import Main from "../MainContent";

export default {
  data() {
    return {
      get_search: {
        start_num: 0,
        total_num: 10,
        mark_type: "read"
      },
      loading: false
    };
  },
  computed: {
    ...mapGetters(["get_lang_zh", "get_user_index"])
  },
  components: {
    Main
  },
  watch: {
    get_search: function(options) {
      this.$refs.pagination.internalCurrentPage = 1;
      this.searchNews(options);
      console.log("success");
    },
    get_user_index: function(val) {
      this.searchNews(this.get_search);
    }
  },
  created() {},
  mounted() {
    this.$refs.main.set_history();
  },
  methods: {
    get_loading(data) {
      // this.loading = data;
    },
    menuselect(index, indexPath) {
      this.get_search.collect_id = this.collect_id_list[index];
      var arr = [];
      for (var i = 0; i < this.collect_id_list.length; i++) {
        arr.push(false);
      }
      this.select_arr = arr;
      this.select_arr[index] = true;
      this.searchNews(this.get_search);
    },
    main_switch(u, i) {
      this.$store.commit("set_show_id", [u.id, u.type, i]);
      if (u.type === "3") {
        this.$store.commit("set_user_index", "video");
      } else {
        this.$store.commit("set_user_index", "content");
      }
    },
    searchNews(params) {
      
    },
    page_change(n) {
      if (this.$route.name == "user") {
        document.getElementById("content").scrollIntoView();
        this.get_search.start_num = n * 10 - 10;
        this.get_search.total_num = 10;
        this.searchNews(this.get_search);
      } else {
        document.getElementById("content").scrollIntoView();
        console.log(this.follow_params);
        this.follow_params.start_num = n * 10 - 10;
        this.follow_params.total_num = 10;
        this.get_follow(this.follow_params);
      }
    },
    test(i) {
      this.get_content[i].type = "1";
    },
    star(i) {
      this.get_content[i].star = !this.get_content[i].star;
      var params = {
        mark_type: "collect",
        item_id: this.get_content[i].id,
        item_name: this.get_content[i].item_name,
        operate_type: "add"
      };
      // console.log(params);
      if (!this.get_content[i].star) {
        params.operate_type = "remove";
      }
      this.$ajaxAPI
        .postMarkLabel(params)
        .then(res => {
          // console.log(res);
        })
        .catch(err => {
          this.$message.error('删除失败')
          console.warn(err);
        });
    },
    star_enter(e) {
      e.target.children[0].className = "fa fa-star fa-1x";
    },
    star_leave(e) {
      e.target.children[0].className = "fa fa-star-o fa-1x";
    },
    get_user_collect_list() {
      this.$ajaxAPI
        .getCollectList({ operate_type: "get_count" })
        .then(res => {
          this.collect_list = map(res.data.data, "name");
          this.collect_id_list = map(res.data.data, "id");
          var arr = [];
          for (var i = 0; i < res.data.data.length; i++) {
            arr.push(false);
          }
          this.select_arr = arr;
          this.select_arr[0] = true;
        })
        .catch(err => {
          console.warn(err);
        });
    },
    delete_enter(e) {
      e.target.children[0].style.color = "rgba(253, 52, 52, 1)";
    },
    delete_leave(e) {
      e.target.children[0].style.color = "#c0c0c0";
    },
    delete_content(i) {
      var params = {
        mark_type: "remove",
        item_id: this.get_content[i].id,
        item_name: this.get_content[i].item_name
      };
      // console.log(params);
      this.$ajaxAPI
        .postMarkLabel(params)
        .then(res => {
          // console.log(res);
          this.$message({
            type: "success",
            message: "删除成功"
          });
        })
        .catch(err => {
          this.$message.error('删除失败')
          console.warn(err);
        });
      this.get_content.splice(i, 1);
    },
    get_follow(params) {
       
    }
  }
};
</script>
<style scoped>
#content {
  width: calc(100% - 20px);
  float: left; /* border-left: #e6e3e3 1px solid; */ /* padding-bottom: 30px; */
  margin-top: 10px;
}
</style>
