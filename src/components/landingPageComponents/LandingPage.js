import React from 'react'
import PropTypes from 'prop-types'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import ReactResizeDetector from "react-resize-detector"


const profileImageStyle = {
  position: 'relative',
  marginLeft: '2%',
  marginTop: '2%',
  marginBottom: '5%',
  maxWidth: '30%',
  width: 'auto',
  height: 'auto',
  zIndex: '-1',
}

const wordCloudStyle = {
  position: 'relative',
  maxWidth: '60%',
  marginTop: '2%',
  marginBottom: '5%',
  width: 'auto',
  height: 'auto',
  zIndex: '-1',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFC',
  position: 'relative',
  fontSize: '2em',
}

class LandingPage extends React.Component{
  constructor(){
    super()
    this.state={
      wordCloudBackGround: {
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
    if(parseInt(this.state.wordCloudBackGround.top, 10) !== Math.floor(this.props.headerHeight)){
      const wordCloudBackGround = this.state.wordCloudBackGround
      console.log(this.props.headerHeight)
      this.setState({
        wordCloudBackGround: {
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
      <div style={this.state.wordCloudBackGround}>
        <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
        <img style={profileImageStyle} src={profileImage} alt=''/>
        <img style={wordCloudStyle} src={wordCloud} alt=''/>
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
