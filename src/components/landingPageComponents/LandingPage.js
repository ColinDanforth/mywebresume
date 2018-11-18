import React from 'react'
import PropTypes from 'prop-types'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import jackOfAll from "../../images/jackofalltradesmyth.jpg"
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
      jackHeight: 0,
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
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: 'auto',
        zIndex: '-5',
      }
    }

    // this.onResize = this.onResize.bind(this)
    this.updateStyleStates = this.updateStyleStates.bind(this)
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
        // .then(() => this.props.onResizeSection1(parseInt(this.state.landingPageBackground.top, 10) + parseInt(this.state.jackOfAllStyle.top, 10) + this.state.jackHeight))
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

  // onResize(width, height){
  //   console.log(height)
  //   this.setState({
  //     jackHeight: height
  //   })
  // }

  render(){
    return(
      <div>
        <div style={this.state.landingPageBackground}>
          <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
          <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
          <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizelandingPageBackground}/>
        </div>
        <div>
          <img style={this.state.jackOfAllStyle} src={jackOfAll} alt='jackBackground'/>
          {/*<ReactResizeDetector handleWidth handleHeight onResize={this.onResize}/>*/}
        </div>
      </div>
    )
  }
}

export default LandingPage

LandingPage.propTypes = {
  headerHeight: PropTypes.number,
  onResizeSection1: PropTypes.func,
  onResizelandingPageBackground: PropTypes.func,
  jackOfAllPosition: PropTypes.number
}
