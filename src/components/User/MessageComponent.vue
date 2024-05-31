<template>
  <div style="height:100%;width:100%">
    <div id="main_news_alert">
      <div
        v-for="(news, i) in get_news_data"
        :key="i"
        class="news_alert"
        @click="show_news(i)"
      >
        <div v-if="get_news_show == i" class="onchoose">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-volume-down fa-stack-1x fa-inverse"></i>
          </span>
          <div class="news_alert_from">{{ news.from }}</div>
          <div class="news_alert_time">{{ news.time }}</div>
          <div class="news_alert_short_message">{{ news.short_message }}</div>
        </div>
        <div
          v-else
          class="nochoose"
          @mouseenter="mouseenter($event)"
          @mouseleave="mouseleave($event)"
        >
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-volume-down fa-stack-1x fa-inverse"></i>
          </span>
          <div class="news_alert_from">{{ news.from }}</div>
          <div class="news_alert_time">{{ news.time }}</div>
          <div class="news_alert_short_message">{{ news.short_message }}</div>
     
        </div>
      </div>
    </div>

    <div id="main_news_show">
      <div class="news_show_title">
        <p>{{ get_news_data[get_news_show].from }}</p>
      </div>
      <div class="news_show_spetime">
        <p>{{ get_news_data[get_news_show].spe_time }}</p>
      </div>
      <div id="bar"></div>
      <div class="news_show_long">
        <p v-html="get_news_data[get_news_show].long_message"></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import time_func from "@/request/time";

export default {
  data() {
    return {
      get_news_data: [
        {
          from: "系统消息",
          time: "",
          short_message: "",
          spe_time: "",
          long_message: ""
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["get_news_show"])
  },
  created() {
    this.get_message();
  },
  mounted() {},
  methods: {
    show_news(i) {
      if (i !== this.get_news_show) {
        this.$store.commit("set_news_show", i);
        this.drawline();
        // this.get_news_data[this.get_news_show].alert = 0;
      }
    },
    mouseenter(e) {
      e.target.className = "onchoose";
    },
    mouseleave(e) {
      e.target.className = "nochoose";
    },
    get_message() {
      this.$ajaxAPI.getHistoryMessage().then(res => {
        var data = res.data.data;
        console.log(res);

        if (data.length != 0) {
          this.get_news_data = [];
        }
        for (var i = 0; i < data.length; i++) {
          var from = data[i].class_name;
          var time = time_func.stamp2time_d(data[i].timestamp);

          var spe_time = time_func.stamp2time_s(data[i].timestamp);
          var all_count = data[i].data.all_count||0;
          var success_count = data[i].data.success_count||0;
          var error_count = data[i].data.error_count||0;
          var run_count = success_count + error_count;
          var long_message =
            from +
            "共有<b style='font-size:20px;color:#050f2c'>" +
            all_count +
            "</b>条" +
            "<br/>" +
            from +
            "成功<b style='font-size:20px;color:#008374'>" +
            success_count +
            "</b>条<br/>失败<b style='font-size:20px;color:#ce181e'>" +
            error_count +
            "</b>条<br/>已执行<b style='font-size:20px;color:#050f2c'>" +
            run_count +
            "</b>条";
          var short_message =
            "共有" +
            all_count +
            "条,成功" +
            success_count +
            "条,失败" +
            error_count +
            "条,已执行" +
            run_count +
            "条";
          console.log('--------------'+run_count);
          this.get_news_data.push({
            from,
            time,
            short_message,
            spe_time,
            long_message,
            all_count,
            success_count,
            error_count,
            run_count
          });
        }
        this.drawline();
      });
    },
    drawline() {
      let barChart = this.$echarts.init(document.getElementById("bar"));
      console.log(this.get_news_data);
      var all_data = [
        ["score", "amount", "product"],
        [
          (this.get_news_data[this.get_news_show].error_count * 100) /
            this.get_news_data[this.get_news_show].all_count,
          this.get_news_data[this.get_news_show].error_count,
          "失败"
        ],
        [
          (this.get_news_data[this.get_news_show].success_count * 100) /
            this.get_news_data[this.get_news_show].all_count,
          this.get_news_data[this.get_news_show].success_count,
          "成功"
        ],

        [
          (this.get_news_data[this.get_news_show].run_count * 100) /
            this.get_news_data[this.get_news_show].all_count,
          this.get_news_data[this.get_news_show].run_count,
          "已执行"
        ],
        [100, this.get_news_data[this.get_news_show].all_count, "共有"]
      ];
      barChart.setOption({
        dataset: {
          source: all_data
        },
        grid: { containLabel: true },
        xAxis: { name: "数量" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["100%", "0%"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#D7DA8B", "#E15457"]
          }
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product"
            },
            label: {
              show: true,
              position: "inside"
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.news_alert {
  width: 100%;
  height: 80px;
  cursor: pointer;
}
.news_alert img {
  float: left;
  margin-top: 10px;
  padding-left: 20px;
}
.news_alert_from {
  float: left;
  font-size: 16px;
  font-weight: 900;
  margin-top: 15px;
  margin-left: 6px;
}
.news_alert_time {
  float: right;
  font-size: 14px;
  margin-right: 20px;
  margin-top: 18px;
}
.news_alert_short_message {
  float: left;
  font-size: 14px;
  margin-top: 7px;
  margin-left: 7px;
  text-align: left;
  width: calc(100% - 100px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.onchoose {
  background-color: rgba(88, 64, 186, 1);
  width: 100%;
  height: 100%;
}
.onchoose .news_alert_from {
  color: white;
}
.onchoose .news_alert_time {
  color: white;
}
.onchoose .news_alert_short_message {
  color: white;
}
.nochoose {
  background-color: white;
  width: 100%;
  height: 100%;
}

.nochoose .news_alert_from {
  color: black;
}
.nochoose .news_alert_time {
  color: #a1a1a1;
}
.nochoose .news_alert_short_message {
  color: #a1a1a1;
}
.news_alert .fa-stack {
  float: left;
  width: 60px;
  margin-top: 10px;
  padding-left: 20px;
  font-size: 30px;
}
.onchoose .fa-stack .fa-circle {
  color: white;
}
.onchoose .fa-stack .fa-volume-down {
  color: rgba(88, 64, 186, 1);
}
.nochoose .fa-stack .fa-circle {
  color: rgba(88, 64, 186, 1);
}
.nochoose .fa-stack .fa-volume-down {
  color: white;
}

.circle {
  float: left;
  width: 18px;
  height: 18px;
  background: red;
  border-radius: 50%;
  margin-top: 7px;
  margin-left: 6px;
}
.long_circle {
  float: left;
  width: 30px;
  height: 18px;
  background: red;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  margin-top: 7px;
}
.circle span {
  float: center;
  font-size: 13px;
  color: white;
}
.long_circle span {
  float: center;
  font-size: 13px;
  color: white;
}
#main_news_alert {
  width: 30%;
  float: left;
  height: 100%;
  overflow-y: scroll;
}

#main_news_show {
  background-color: rgba(242, 242, 244, 1);
  width: 70%;
  height: 100%;
  float: right;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
#main_news_show .news_show_title {
  width: 100%;
  margin-top: 40px;
}
#main_news_show .news_show_title p {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}
#main_news_show .news_show_spetime {
  width: 100%;
  margin-top: 20px;
}
#main_news_show .news_show_spetime p {
  margin-right: 10%;
  font-size: 14px;
  color: #666666;
  text-align: right;
}
#main_news_show .news_show_long {
  width: 100%;
  margin-top: 10px;
}
#main_news_show .news_show_long p {
  margin-left: 10%;
  margin-right: 10%;
  font-size: 16px;
  color: #000000;
  line-height: 40px;
  /* text-indent: 2em; */
  text-align: left;
}
#bar {
  width: 100%;
  height: 500px;
}
</style>
