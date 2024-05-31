export default {
  stamp2time_s:function(params){
    params = params*1000
    var y = new Date(params).getFullYear();
    var m = new Date(params).getMonth() + 1;
    var d = new Date(params).getDate();
    var time =
      y +
      "-" +
      (m < 10 ? "0" + m : m) +
      "-" +
      (d < 10 ? "0" + d : d) +
      " " +
      new Date(params).toTimeString().substr(0, 8);
    return time
  },
  stamp2time_ms:function(params){
    var y = new Date(params).getFullYear();
    var m = new Date(params).getMonth() + 1;
    var d = new Date(params).getDate();
    var time =
      y +
      "-" +
      (m < 10 ? "0" + m : m) +
      "-" +
      (d < 10 ? "0" + d : d) +
      " " +
      new Date(params).toTimeString().substr(0, 8);
    return time
  },
  stamp2time_d:function(params){
    params = params*1000
    var y = new Date(params).getFullYear();
    var m = new Date(params).getMonth() + 1;
    var d = new Date(params).getDate();
    var time =
      y +
      "-" +
      (m < 10 ? "0" + m : m) +
      "-" +
      (d < 10 ? "0" + d : d)
      
    return time
  },
}
