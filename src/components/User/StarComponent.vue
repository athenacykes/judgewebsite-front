<template>
  <div v-loading.fullscreen.lock="loading">
    <div id="card">
      <div
        v-for="(collect, i) in get_collect_list"
        :key="i"
        :class="i == card_choose ? 'onchoose' : 'nochoose'"
      >
        <i
          @click="choose(i)"
          :class="i == card_choose ? 'el-icon-folder-opened' : 'el-icon-folder'"
        ></i>
        <p @click="choose(i)">{{ collect }}</p>
        <i
          v-if="i != 0"
          class="el-icon-edit"
          title="编辑"
          @click="edit_folder(i)"
        ></i>
        <i
          v-if="i != 0"
          class="el-icon-delete"
          title="删除"
          @click="delete_folder(i)"
        ></i>
      </div>
      <div id="add_folder">
        <i
          @click="add_folder"
          class="el-icon-circle-plus-outline"
          style="font-size:80px;margin-top:35px;color:#095280;cursor:pointer"
        ></i>
      </div>
    </div>
    <!-- <HistoryComponent style="width:60%;float:left" /> -->
    <Main id="content" @loading="get_loading" ref="main" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { map } from "lodash";
// import HistoryComponent from "../User/HistoryComponent";
import Main from "../MainContent";

export default {
  data() {
    return {
      get_content: [],
      page_number: 1,
      get_search: {
        start_num: 0,
        total_num: 10,
        collect_id: 0,
        mark_type: "collect"
      },
      page_all: 10,
      collect_list: [],
      collect_id_list: [],
      select_arr: [],
      card_choose: 0,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["get_lang_zh", "get_collect_list", "get_collect_id_list"])
  },
  components: {
    Main
  },

  watch: {
    get_search: function(options) {
      this.$refs.pagination.internalCurrentPage = 1;
      this.searchNews(options);
      console.log("success");
    }
  },
  created() {
    this.get_user_collect_list();
  },
  mounted() {},
  methods: {
    get_loading(data) {
      this.loading = data;
    },
    get_user_collect_list() {
      this.$ajaxAPI
        .getCollectList({ operate_type: "get_count" })
        .then(res => {
          // this.collect_list = map(res.data.data, "name");
          // this.collect_id_list = map(res.data.data, "id");
          this.$store.commit("set_collect_list", map(res.data.data, "name"));
          this.$store.commit("set_collect_id_list", map(res.data.data, "id"));
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
    choose(i) {
      this.card_choose = i;
      // this.get_search.collect_id = this.collect_id_list[i];
      this.$refs.main.choose_collect_folder(this.get_collect_id_list[i]);
    },
    edit_folder(i) {
      this.$prompt("请输入收藏夹名称", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          this.$ajaxAPI
            .getCollectList({
              name: value,
              operate_type: "rename",
              id: this.get_collect_id_list[i]
            })
            .then(res => {
              // console.log(res);
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "修改成功"
                });
              } else if (res.data.code == 600) {
                this.$message({
                  type: "error",
                  message: "名称重复"
                });
              } else {
                this.$message({
                  type: "error",
                  message: "修改失败"
                });
              }
              this.get_user_collect_list();
            })
            .catch(err => {
              console.warn(err);
            });
        })
        .catch(err => {
          console.warn(err);
        });
    },
    delete_folder(i) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$ajaxAPI
            .getCollectList({
              operate_type: "remove",
              id: this.get_collect_id_list[i]
            })
            .then(res => {
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "删除成功"
                });
              } else {
                this.$message({
                  type: "error",
                  message: "删除失败"
                });
              }
              this.card_choose = 0;
              this.get_user_collect_list();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add_folder() {
      this.$prompt("请输入收藏夹名称", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          this.$ajaxAPI
            .getCollectList({ name: value, operate_type: "add" })
            .then(res => {
              // console.log(res);
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "创建成功"
                });
              } else if (res.data.code == 600) {
                this.$message({
                  type: "error",
                  message: "名称重复"
                });
              } else {
                this.$message({
                  type: "error",
                  message: "创建失败"
                });
              }
              this.get_user_collect_list();
            })
            .catch(err => {
              console.warn(err);
            });
        })
        .catch(err => {
          console.warn(err);
        });
    }
  }
};
</script>
<style scoped>
#content {
  width: calc(100% - 470px);
  float: left;
  border-left: #e6e3e3 1px solid;
  /* padding-bottom: 30px; */
  margin-top: 10px;
}
#card {
  width: 460px;
  float: left;
  min-height: 100px;
  height: calc(100vh - 70px);
  overflow: auto;
}

/* 收藏夹css */
.onchoose {
  width: 130px;
  height: 150px;
  background-color: #ffb900;
  margin: 30px 0px 0px 15px;
  box-shadow: #cecece 5px 5px 5px;
  float: left;
  border: 1px solid #94938f;
  border-radius: 5px;
}
.onchoose .el-icon-folder-opened {
  font-size: 70px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 10px 30px 0 30px;
}
.nochoose {
  width: 130px;
  height: 150px;
  background-color: rgb(255, 255, 255);
  margin: 30px 0px 0px 15px;
  box-shadow: #cecece 5px 5px 5px;
  float: left;
  border-radius: 5px;
  border: 1px solid #94938f;
}
.nochoose .el-icon-folder {
  font-size: 70px;
  color: #182b45;
  cursor: pointer;
  padding: 10px 30px 0 30px;
}
#card p {
  font-size: 16px;
  margin: 5px 0 5px 0;
  color: white;
  cursor: pointer;
}
#card .nochoose p {
  color: #182b45;
  margin: 5px 0 5px 0;
  cursor: pointer;
}
#card .el-icon-edit {
  cursor: pointer;
  font-size: 16px;
  color: white;
}
#card .nochoose .el-icon-edit {
  cursor: pointer;
  color: #182b45;
}
#card .el-icon-delete {
  cursor: pointer;
  font-size: 16px;
  color: white;
  margin-left: 20px;
}
#card .nochoose .el-icon-delete {
  cursor: pointer;
  color: #182b45;
}
#add_folder {
  width: 130px;
  height: 150px;
  margin: 30px 0px 0px 15px;
  box-shadow: #cecece 5px 5px 5px;
  float: left;
  border: 1px solid #94938f;
  border-radius: 5px;
}
.el-dropdown {
  float: left;
}
</style>
