import React from 'react'
import PropTypes from 'prop-types'
import wordCloud from '../../images/myWordCloud.png'
import profileImage from "../../images/profileImage.JPG"
import ReactResizeDetector from "react-resize-detector"
import LandingBlock2 from "./LandingBlock2"

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
  zIndex: '-1',
}

const wordCloudStyle = {
  flexShrink: '1',
  marginTop: '1%',
  marginBottom: '3%',
  width: '50%',
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
        width: '100%',
        top: '0px',
        textAlign: 'center',
        backgroundColor: '#1B2A41',
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
        backgroundColor: '#222D35',
        textAlign: 'center',
        top: '0px',
        width: '100%',
        height: 'auto',
        zIndex: '1',
      }
    }
  }

  componentWillMount(){
    const landingPageBackground = this.state.landingPageBackground
    const block3 = this.state.block3
    const jackOfAll = this.state.jackOfAllStyle

    this.setState({
      landingPageBackground: {
        position: landingPageBackground.position,
        top: (this.props.headerHeight) + 'px',
        textAlign: landingPageBackground.textAlign,
        backgroundColor: landingPageBackground.backgroundColor,
        width: landingPageBackground.width,
        height: landingPageBackground.height,
        zIndex: landingPageBackground.zIndex,
      },
      block3:{
        position: block3.position,
        backgroundColor: block3.backgroundColor,
        top: this.props.block3Position + 'px',
        textAlign: block3.textAlign,
        width: block3.width,
        height: block3.height,
        zIndex: block3.zIndex,
      },
      jackOfAllStyle: {
        position: jackOfAll.position,
        top: (this.props.jackOfAllPosition) + 'px',
        width: jackOfAll.width,
        height: jackOfAll.height,
        zIndex: jackOfAll.zIndex,
      },
    })
  }

  componentDidUpdate(Props){
    if(
      parseFloat(this.state.landingPageBackground.top, 10) !== (this.props.headerHeight)
      || parseFloat(this.state.jackOfAllStyle.top, 10) !== (this.props.jackOfAllPosition)
      || parseFloat(this.state.block3.top, 10) !== (this.props.block3Position)
    ){
      if(parseFloat(this.state.landingPageBackground.top, 10) !== (this.props.headerHeight)){
        const landingPageBackground = this.state.landingPageBackground
        this.setState({
          landingPageBackground: {
            position: landingPageBackground.position,
            top: (this.props.headerHeight) + 'px',
            textAlign: landingPageBackground.textAlign,
            backgroundColor: landingPageBackground.backgroundColor,
            width: landingPageBackground.width,
            height: landingPageBackground.height,
            zIndex: landingPageBackground.zIndex,
          }
        })
      }if(parseFloat(this.state.block3.top, 10) !== this.props.block3Position){
        const block3 = this.state.block3
        this.setState({
          block3:{
            position: block3.position,
            backgroundColor: block3.backgroundColor,
            top: this.props.block3Position + 'px',
            textAlign: block3.textAlign,
            width: block3.width,
            height: block3.height,
            zIndex: block3.zIndex,
          }
        })
      }
      if(parseFloat(this.state.jackOfAllStyle.top, 10) !== (this.props.jackOfAllPosition)){
        const jackOfAll = this.state.jackOfAllStyle
        this.setState({
          jackOfAllStyle: {
            position: jackOfAll.position,
            top: (this.props.jackOfAllPosition) + 'px',
            width: jackOfAll.width,
            height: jackOfAll.height,
            zIndex: jackOfAll.zIndex,
          },
        })
      }
    }
  }

  render(){
    return(
      <div>
        <div className="block1" style={this.state.landingPageBackground}>
          <h1 style={headerStyle}>Programmer, Administrator, Video Game Designer, and Much More</h1>
          <div style={flexBlock1}>
            <img style={profileImageStyle} src={profileImage} alt='profileImage'/>
            <img style={wordCloudStyle} src={wordCloud} alt='wordCloud'/>
          </div>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizelandingPageBackground}/>
        </div>
        <LandingBlock2
          jackOfAllStyle={this.state.jackOfAllStyle}
          block3Style={this.state.block3}
          onResizeBlock2={this.props.onResizeBlock2}
          phantomFooter={this.props.phantomFooter}
          updateRootState={this.props.updateRootState}
        />
      </div>
    )
  }
}

export default LandingPage

LandingPage.propTypes = {
  headerHeight: PropTypes.number,
  onResizelandingPageBackground: PropTypes.func,
  onResizeBlock2: PropTypes.func,
  jackOfAllPosition: PropTypes.number,
  block3Position: PropTypes.number,
  phantomFooter: PropTypes.object,
  updateRootState: PropTypes.func,
}
