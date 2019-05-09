import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts);

const options = {
    chart :{ //图类型 默认为折线图
        type :'bar' 
    },
  title: {
    text: '柱状图'//标题
  },
  subtitle :{
    text: 'Source: Test'//副标题
  },
    tooltip: {//显示鼠标移动区域的信息
        shared: true,
        useHTML: true
    },
  xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: 'country',
            align: 'high'
        }
    },
  yAxis : {
    title: {//Y轴文字
        text: 'Population (millions)',
        align: 'high'
    }
  },

  legend: {//
    layout: 'vertical',
    align: 'right',
    
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
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
class Zhuzhuang extends Component { 
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

export default Zhuzhuang;
