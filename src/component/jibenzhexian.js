import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts);

const options = {
  title: {
    text: '基本折线图'//标题
  },
  subtitle :{
    text: 'Source: Test'//副标题
  },
  // xAxis: {//X轴
  //   categories: ['A', 'B', 'C','D','E','F','G','H'],
  //   },
  // plotOptions: {
  //   line: {//显示数据标签在点上
  //       dataLabels: {
  //           enabled: true
  //       },
  //       enableMouseTracking: true 
  //   },
  //   series: {
  //     label: {
  //       connectorAllowed: false
  //     },
  //     pointStart: 2010
  //   }
  // },

  yAxis : {
    title: {//Y轴文字
      text: 'Temperature (\xB0C)',
      align: 'high'
    }
  },
    tooltip: {//指向每个点都能对比数据
		  shared: true
    },
  legend: {//
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [ //数据源
    {
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 45000, 60000, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }
  ],
  exporting:{//菜单按钮
    enabled:true,
  },
  credits:{//版权信息
    enabled:true,
    text:'Test提供',
    href:'http://www.baidu.com'
  },
}
class Jibenzhexian extends Component { 
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

export default Jibenzhexian;
