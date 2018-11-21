import React from 'react'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import LandingBlock2 from "./LandingBlock2"
import LandingBlock3 from "./LandingBlock3"

const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#1B2A41',
}

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

class LandingPage extends React.Component{

  render(){
    return(
      <div style={rootFlex}>
        <div style={block1Style}>
          <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
          <div style={flexBlock1}>
            <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
            <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
          </div>
        </div>
        <LandingBlock2/>
        <LandingBlock3/>
      </div>
    )
  }
}

export default LandingPage
