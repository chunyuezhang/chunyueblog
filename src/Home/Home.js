import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      }
    }
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2 style={styles.h2}>HI, I'M <span style={{color:'#00bcd4'}}>CHUNYUE</span></h2>
            <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
            <button className="home-btn"><Link to="about" style={{color:"#fff"}}>HIRE ME</Link></button>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
