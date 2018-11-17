import React from 'react'
import PropTypes from 'prop-types'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import ReactResizeDetector from "react-resize-detector"


const profileImageStyle = {
  position: 'relative',
  marginLeft: '2%',
  marginTop: '1%',
  marginBottom: '5%',
  maxWidth: '24%',
  width: 'auto',
  height: 'auto',
  zIndex: '-1',
}

const wordCloudStyle = {
  position: 'relative',
  maxWidth: '50%',
  marginTop: '1%',
  marginBottom: '5%',
  width: 'auto',
  height: 'auto',
  zIndex: '-1',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFCF',
  position: 'relative',
  fontSize: '2em',
}

class LandingPage extends React.Component{
  constructor(){
    super()
    this.state={
      LandingPageBackground: {
        position: 'absolute',
        top: '0px',
        textAlign: 'center',
        backgroundColor: '#1B2A41',
        width: '100%',
        height: 'auto',
        zIndex: '-2',
      }
    }
  }

  componentDidUpdate(Props){
    if(parseInt(this.state.LandingPageBackground.top, 10) !== Math.floor(this.props.headerHeight)){
      const wordCloudBackGround = this.state.LandingPageBackground
      console.log(this.props.headerHeight)
      this.setState({
        LandingPageBackground: {
          position: wordCloudBackGround.position,
          top: Math.floor(this.props.headerHeight) + 'px',
          textAlign: wordCloudBackGround.textAlign,
          backgroundColor: wordCloudBackGround.backgroundColor,
          width: wordCloudBackGround.width,
          height: wordCloudBackGround.height,
          zIndex: wordCloudBackGround.zIndex,
        }
      })
    }
  }

  render(){
    return(
      <div style={this.state.LandingPageBackground}>
        <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
        <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
        <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizeSection1}/>
      </div>
    )
  }
}

export default LandingPage

LandingPage.propTypes = {
  headerHeight: PropTypes.number,
  onResizeSection1: PropTypes.func,
}
