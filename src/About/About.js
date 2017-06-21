import React from 'react'

class About extends React.Component {
  render () {
    let styles={
      me:{
        textAlign:'center',
        width:'100%',
        marginTop:'20vh',
        fontSize:"20px"
      },
      contact:{

      }
    }
    return(
      <div style={styles.me}>
        <h1>个人信息</h1>
        <p>喜欢写代码，喜欢健身，文艺女青年</p>
        <p>邮箱:<a href="mailto:chunyuesmile@126.com" style={{textDecoration:"none"}}> chunyuesmile@126.com</a></p>
        <p>电话:<a href="tel:18713517935">点击此处直接拨打</a></p>
      </div>
    )
  }
}

export default About;
