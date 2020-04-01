/* global echarts:true*/
var xdata = [0],
    ydata = [0];

for(var p = 0.1;p<=1;p+=0.1){
  xdata.push(o(p,1));
  if(o(p,1) === 1){
    ydata.push(0);
  } else {
    ydata.push(h(o(p,1)).toFixed(2));
  }
}

function h(p){
  return (-1)*p*Math.log2(p) - (1-p)*Math.log2(1-p);
}

function o(t,a){
  return Math.round(t * Math.pow(10, a)) / Math.pow(10, a);
}
var myChart = echarts.init($('.main')[0]);

var option = {
    title: {
        text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
        data:['信息量']
    },
    xAxis: {
      data:xdata
    },
    yAxis: {},
    series: [{
        name: '信息量',
        type: 'line',
        smooth:true,
        data:ydata
    }]
};
myChart.setOption(option);
