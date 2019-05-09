import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts);

const options = {
    chart :{ //图类型 默认为折线图
        type :'column' 
    },
  title: {
    text: '直方图'//标题
  },
  subtitle :{
    text: 'Source: Test'//副标题
  },
  xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true,
        title: {
            text: 'capital',
            align: 'high'
        }
    },
  yAxis : {
    title: {//Y轴文字
        text: 'Rainfall (mm)',
        align: 'high'
    }
  },
  tooltip: {//显示鼠标移动区域的信息
        shared: true,
        useHTML: true
    },
  
  legend: {//
    layout: 'vertical',
    align: 'right',
    
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [
      {
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

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
class Zhifang extends Component { 
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

export default Zhifang;
