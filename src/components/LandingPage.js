import React from 'react'
import wordCloud from '../images/myWordCloud.png'
import profileImage from "../images/profileImage.JPG"

const profileImageStyle = {
  position: 'relative',
  transform: 'translate(0%, 25%)',
  float: 'left',
  marginLeft: '12%',
  width: '20%',
  height: 'auto',
  zIndex: '-1',
}

const wordCloudStyle = {
  position: 'relative',
  width: '60%',
  height: 'auto',
  zIndex: '-1',
}

const wordCloudBackGround = {
  position: 'relative',
  textAlign: 'center',
  backgroundColor: '#444444',
  marginLeft: '5%',
  width: '90%',
  height: 'auto',
  zIndex: '-2',
}

const headerStyle = {
  color: '#FFFFFF',
  position: 'relative',
  marginTop: '5%',
  fontSize: '1.5em',
}

class LandingPage extends React.Component{
  render(){
    return(
      <div style={wordCloudBackGround}>
        <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
        <img style={profileImageStyle} src={profileImage} alt=''/>
        <img style={wordCloudStyle} src={wordCloud} alt=''/>
      </div>
    )
  }
}

export default LandingPage
