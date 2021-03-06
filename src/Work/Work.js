import React from 'react'

class Work extends React.Component {
  render () {
    let styles={
      aColor:{
        color:"#fff"
      }
    }
    return(
      <div className="work-container">
        <div className="work-card">

          <img src="http://orikkfb0h.bkt.clouddn.com/%281%29.jpg" />
          <div className="work-text">
            <h3><a href="http://demo.gagogroup.cn/luochuan" style={styles.aColor} >洛川数字服务平台</a></h3>
            <p>2016.12</p>
          </div>
        </div>
        <div className="work-card">
          <img src="http://orikkfb0h.bkt.clouddn.com/%282%29.jpg" />
          <div className="work-text">
            <h3><a href="https://gagogroup.cn" style={styles.aColor}>佳格官网</a></h3>
            <p>2017.1</p>
          </div>
        </div>
        <div className="work-card">
          <img src="http://orikkfb0h.bkt.clouddn.com/%283%29.jpg" />
          <div className="work-text">
            <h3>海升气象数字服务平台</h3>
            <p>2017.11</p>
          </div>
        </div>
        <div className="work-card">
          <img src="http://orikkfb0h.bkt.clouddn.com/4-2.png" />
          <div className="work-text">
            <h3>保利知识检索平台</h3>
            <p>2016.9</p>
          </div>
        </div>
        <div className="work-card">
          <img src="http://orikkfb0h.bkt.clouddn.com/%285%29.png" />
          <div className="work-text">
            <h3>认知功能检测系统</h3>
            <p>2016.5</p>
          </div>
        </div>
        <div className="work-card">
          <img src="http://orikkfb0h.bkt.clouddn.com/6.png" />
          <div className="work-text">
            <h3><a href="http://yun.honghe-tech.com/web" style={styles.aColor}>鸿合教育云平台</a></h3>
            <p>2014.8</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
