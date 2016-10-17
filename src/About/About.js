import React from 'react'

class About extends React.Component {
  render () {
    let styles={
      me:{
        textAlign:'center',
        width:'100%',
        marginTop:'20vh'
      }
    }
    return(
      <div style={styles.me}>
        <h1>个人信息</h1>
        <p>喜欢写代码，喜欢健身，文艺女青年</p>
      </div>
    )
  }
}

export default About;
