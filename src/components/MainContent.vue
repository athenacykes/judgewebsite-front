<template>
  <div style="width: 100%">
    <el-table :data="tableData" @row-click="rowClick">
      <el-table-column label="帖子" min-width="640">
        <template slot-scope="scope">
          <div style="display: flex;">
            <img style="width: 64px;height: 64px;" src="./static/content_icon.png">
            <div style="margin-left: 15px;">
              <div class="article_title"> {{ scope.row.titlle }}</div>
              <div class="block">
                <div class="article_name">{{ scope.row.name }}</div>
                <img class="dot" src="./static/Dot.png">
                <div class="article_time">{{ scope.row.date }}</div>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="reply" label="回复" width="120">
      </el-table-column>
      <el-table-column prop="province" label="访问量" width="120">
      </el-table-column>

      <el-table-column label="评价" width="120">
        <template slot-scope="scope">
          <div style="display: flex;">
            <img class="point" src="./static/custom.png">
            <div style="margin-top: 2.5px;margin-left: 3px;">123</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        reply: '1',
        province: '2',
        titlle: '颅内植入20240528',
        name: '吉米'

      }, {
        date: '2016-05-02',
        reply: '3',
        province: '4',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }, {
        date: '2016-05-04',
        reply: '5',
        province: '6',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }, {
        date: '2016-05-01',
        reply: '7',
        province: '8',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }, {
        date: '2016-05-08',
        reply: '9',
        province: '10',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }, {
        date: '2016-05-06',
        reply: '11',
        province: '12',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }, {
        date: '2016-05-07',
        reply: '13',
        province: '14',
        zip: 200333,
        titlle: '颅内植入20240528',
        name: '吉米'
      }]
    }
  },
  methods: {
    rowClick(row, column, event) {
      this.$router.push({ path: 'content' });
      if (p == "/home") {
        this.$store.commit("set_home_index", "content");
      }
      // console.log(row,column,event)
    }
  }
}
</script>
<style scoped>
.article_title {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 16px;
  color: #384953;
  line-height: 26px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  /* margin-left: 30%; */
  width: 100%;
}

.article_name {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #065A90;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-decoration-line: underline;
  text-transform: none;
}

.point {
  width: 24px;
  height: 24px;
  border-radius: 0px 0px 0px 0px;
}

.article_time {
  font-family: Roboto, Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #8F97A6;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.dot {
  width: 6px;
  height: 6px;
  /* background: #8F97A6; */
  /* border-radius: 0px 0px 0px 0px; */
  margin-top: 7px;
  margin-left: 26px;
  margin-right: 3px;
}

.block {
  display: flex;
  margin-top: 10px;
}
</style>