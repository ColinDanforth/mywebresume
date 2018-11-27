import React from 'react'

const block1Style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'center'
}

const flexBlock1 = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const profileImageStyle = {
  marginTop: '1%',
  marginBottom: '3%',
  maxWidth: '350px',
  width: 'auto',
  height: 'auto',
}

const wordCloudStyle = {
  flexShrink: '1',
  marginTop: '1%',
  marginBottom: '3%',
  width: '650px',
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
          <img style={profileImageStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/profileImage.JPG' alt='profileImage'/>
          <img style={wordCloudStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/myWordCloud.png' alt='wordCloud'/>
        </div>
      </div>
    )
  }
}

export default LandingBlock1
