import React, { Component } from 'react';
import Jibenzhexian from './component/jibenzhexian'
import Zhuzhuangtu from './component/zhuzhuangtu'
import Zhifang from './component/zhifangtu'
import Binzhuangtu from './component/binzhuangtu'
class App extends Component { 
  render() {
    return (
      <div style={{width:'1000px'}}>
      <Jibenzhexian/>
      <Zhuzhuangtu/>
      <Zhifang/>
      <Binzhuangtu/>
      </div>
    );
  }
}

export default App;
