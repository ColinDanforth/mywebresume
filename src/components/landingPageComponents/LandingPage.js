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

const headerStyleMarginBottom = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFCF',
  position: 'relative',
  fontSize: '2em',
  marginBottom: '2%',
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
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: 'auto',
        zIndex: '1',
      }
    }

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

  render(){
    return(
      <div>
        <div style={this.state.landingPageBackground}>
          <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
          <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
          <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
          <h1 style={headerStyleMarginBottom}>T Shaped Employees, Fungibility in work and life</h1>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizelandingPageBackground}/>
        </div>
        <div>
          <a href='https://medium.muz.li/the-myth-of-the-jack-of-all-trades-master-of-none-1eb28900e7d5' target='_blank'>
            <img style={this.state.jackOfAllStyle} src={jackOfAll} alt='jackBackground'/>
          </a>
        </div>
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
