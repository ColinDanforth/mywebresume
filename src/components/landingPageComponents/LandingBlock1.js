import React from 'react'
import profileImage from "../../images/profileImage.JPG"
import wordCloud from "../../images/myWordCloud.png"

const block1Style = {
  textAlign: 'center'
}

const flexBlock1 = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const profileImageStyle = {
  flexShrink: '1',
  marginTop: '1%',
  marginBottom: '3%',
  maxWidth: '24%',
  width: 'auto',
  height: 'auto',
}

const wordCloudStyle = {
  flexShrink: '1',
  marginTop: '1%',
  marginBottom: '3%',
  width: '50%',
  height: 'auto',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFCF',
  position: 'relative',
  fontSize: '2em',
}

class LandingBlock1 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
        <div style={flexBlock1}>
          <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
          <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
        </div>
      </div>
    )
  }
}

export default LandingBlock1
