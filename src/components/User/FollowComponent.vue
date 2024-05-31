<template>
  <div style="width:100%">
    <div style="width:30%;float:left">
      <p style="margin-left:30px;width:calc(80% + 6px)">已关注</p>
      <div id="choose">
        <el-tag
          :key="i"
          v-for="(tag, i) in choose_data"
          closable
          :disable-transitions="false"
          @close="close_tag(tag)"
          class="choose_tag"
          type="success"
        >
          {{ tag.name }}
        </el-tag>
      </div>
    </div>

    <div id="nochoose">
      <p v-for="(type, i) in datalist" :key="i + '1'">{{ i }}</p>
      <div v-for="(type, i) in datalist" :key="i" class="nochoose">
        <el-tag
          :key="j"
          v-for="(tag, j) in type"
          @click="add_tag(tag)"
          class="add_tag"
          type="warning"
          v-show="tag_isshow"
        >
          <i class="el-icon-circle-plus-outline"></i> {{ tag.name }}
        </el-tag>
      </div>
    </div>
    <div style="width:80%;margin-top:30px;float:left">
      <el-button @click="submit" style="float:right" type="primary"
        >提交</el-button
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { map, each } from "lodash";
export default {
  data() {
    return {
      data_dic: {},
      datalist: [],
      choose_data: [],
      tag_isshow:false,
    };
  },
  created() {
    this.get_label();
  },
  mounted() {},
  methods: {
    get_follow() {
      this.$ajaxAPI
        .getLabel()
        .then(res => {
          this.choose_data = res.data.data;
          var label = this.datalist;
          var dic = this.data_dic;
          each(this.choose_data, function(v, k) {
            label[v.type].splice(label[v.type].indexOf(dic[v.name]), 1);
          });
          this.datalist = label;
          this.tag_isshow=true
        })
        .catch(err => {
          console.warn(err);
        });
    },
    get_label() {
      this.$ajaxAPI
        .getAllLabel()
        .then(res => {
          // console.log(res);
          this.datalist = res.data.data_list;
          var in_dic = {};
          delete res.data.data_list['百科'];
          each(res.data.data_list, function(v, k) {
            console.log(v,k,'vkvkvk')
            each(v, function(vv, kk) {
              delete res.data.data_list[k][kk].en_name;
              in_dic[vv.name] = vv;
            });
          });
          this.data_dic = in_dic;
          this.get_follow();
        })
        .catch(err => {
          console.warn(err);
        });
    },
    add_tag(tag) {
      var index = this.datalist[tag.type].indexOf(tag);
      this.datalist[tag.type].splice(index, 1);
      this.choose_data.push(tag);
    },
    close_tag(tag) {
      var index = this.choose_data.indexOf(tag);
      this.choose_data.splice(index, 1);
      this.datalist[tag.type].push(tag);
    },
    submit() {
      var params = this.choose_data; 

      if (params.length == 0) {
        this.$message.error("请至少关注一项");
        return;
      }
      this.$ajaxAPI
        .saveLabel({ label_info: JSON.stringify(params) })
        .then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.get_label();
        })
        .catch(err => {
          this.$message.error('关注失败');
        });
    }
  }
};
</script>
<style scoped>
#choose {
  float: left;
  width: 80%;
  height: 300px;
  margin: 10px 0 0 30px;
  border: 3px #cfcfcf solid;
  background-color: rgba(248, 247, 252, 1);
  overflow-y: scroll;
}
#nochoose {
  float: left;
  width: 70%;
}
.nochoose {
  float: left;
  width: calc(30% - 30px);
  height: 300px;
  margin: 10px 0 0 30px;
  border: 3px #cfcfcf solid;
  background-color: rgba(248, 247, 252, 1);
  overflow-y: scroll;
}
#nochoose p {
  float: left;
  width: calc(30% - 24px);
  margin-left: 30px;
}
.add_tag {
  cursor: pointer;
  font-size: 14px;
  float: left;
  margin: 5px;
}
.choose_tag {
  font-size: 14px;
  float: left;
  margin: 5px;
}
.title_p {
  font-size: 25px;
  float: left;
}
</style>
