import React from 'react'
import PropTypes from 'prop-types'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import jackOfAll from "../../images/jackofalltradesmyth.jpg"
import ReactResizeDetector from "react-resize-detector"
import LandingBlock2 from "./LandingBlock2"

const profileImageStyle = {
  position: 'relative',
  marginLeft: '2%',
  marginTop: '1%',
  marginBottom: '2%',
  maxWidth: '24%',
  width: 'auto',
  height: 'auto',
  zIndex: '-1',
}

const wordCloudStyle = {
  position: 'relative',
  maxWidth: '50%',
  marginTop: '1%',
  marginBottom: '2%',
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
      landingPageBackground: {
        position: 'absolute',
        top: '0px',
        textAlign: 'center',
        backgroundColor: '#1B2A41',
        width: '100%',
        height: 'auto',
        zIndex: '-2',
      },
      jackOfAllStyle: {
        position: 'relative',
        top: '0px',
        width: '100%',
        height: 'auto',
        zIndex: '-1',
      },
      block3:{
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: 'auto',
        zIndex: '1',
      }
    }

    this.updateStyleStates = this.updateStyleStates.bind(this)
    this.onResizeATag = this.onResizeATag.bind(this)
  }

  componentDidUpdate(Props){
    console.log('landing' ,parseInt(this.state.landingPageBackground.top, 10), Math.floor(this.props.headerHeight))
    console.log('jack', parseInt(this.state.jackOfAllStyle.top, 10), Math.floor(this.props.jackOfAllPosition))
    if(
      parseInt(this.state.landingPageBackground.top, 10) !== Math.floor(this.props.headerHeight)
      || parseInt(this.state.jackOfAllStyle.top, 10) !== Math.floor(this.props.jackOfAllPosition)
    ){
      let landingPageBackground = this.state.landingPageBackground.top
      let jackOfAll = this.state.jackOfAllStyle.top
      if(parseInt(this.state.landingPageBackground.top, 10) !== Math.floor(this.props.headerHeight)){
        landingPageBackground= Math.floor(this.props.headerHeight) + 'px'
      }
      if(parseInt(this.state.jackOfAllStyle.top, 10) !== Math.floor(this.props.jackOfAllPosition)){
        jackOfAll = Math.floor(this.props.jackOfAllPosition) + 'px'
      }
      this.updateStyleStates(landingPageBackground, jackOfAll)
    }
  }

  async updateStyleStates(landingPageBackgroundtop, jackOfAlltop){
    const landingPageBackground = this.state.landingPageBackground
    const jackOfAll = this.state.jackOfAllStyle
    await this.setState({
      landingPageBackground: {
        position: landingPageBackground.position,
        top: landingPageBackgroundtop,
        textAlign: landingPageBackground.textAlign,
        backgroundColor: landingPageBackground.backgroundColor,
        width: landingPageBackground.width,
        height: landingPageBackground.height,
        zIndex: landingPageBackground.zIndex,
      },
      jackOfAllStyle: {
        position: jackOfAll.position,
        top: jackOfAlltop,
        width: jackOfAll.width,
        height: jackOfAll.height,
        zIndex: jackOfAll.zIndex,
      }
    })
  }

  onResizeATag(width, height){
    const block3 = this.state.block3
    console.log('thisHeight', height, 'jackOfAll', this.state.jackOfAllStyle.top, 'block3', this.state.block3.top)
    this.setState({
      block3: {
        position: block3.position,
        top: height + parseInt(this.state.jackOfAllStyle.top, 10) + 'px',
        width: block3.width,
        height: block3.height,
        zIndex: block3.zIndex,
      }
    })
  }

  render(){
    return(
      <div>
        <div className="block1" style={this.state.landingPageBackground}>
          <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
          <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
          <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizelandingPageBackground}/>
        </div>
        <LandingBlock2
          jackOfAllStyle={this.state.jackOfAllStyle}
          block3Style={this.state.block3}
          onResizeATag={this.onResizeATag}
        />
      </div>
    )
  }
}

export default LandingPage

LandingPage.propTypes = {
  headerHeight: PropTypes.number,
  onResizelandingPageBackground: PropTypes.func,
  jackOfAllPosition: PropTypes.number
}
