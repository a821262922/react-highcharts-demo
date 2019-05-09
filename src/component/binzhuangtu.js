import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts);

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '饼状图'//标题
    },
    subtitle :{
        text: 'Source: Test'//副标题
    },
  yAxis : {
    title: {//Y轴文字
      text: 'Temperature (\xB0C)',
      align: 'high'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',//指向标
      dataLabels: {
        enabled: true,//数据标签
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,//有混合颜色
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }]
  }],
  exporting:{//菜单按钮
    enabled:true,
  },
  credits:{//版权信息
    enabled:true,
    text:'Test提供',
    href:'http://www.baidu.com'
  },
}
class Binzhuangtu extends Component { 
  render() {
    return (
      <div style={{width:'1000px'}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
}

export default Binzhuangtu;
