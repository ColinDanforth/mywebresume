import React from 'react'
import PropTypes from 'prop-types'

class Resume extends React.Component{
  constructor(){
    super()
    this.state={
      resumeRootStyle: {
        position: 'absolute',
        top: '0px',
        textAlign: 'center',
        backgroundColor: '#BCC4C0',
        width: '100%',
        height: 'auto',
        zIndex: '-2',
      }
    }

  }
  componentDidMount(){
    const resumeRootStyle = this.state.resumeRootStyle
    console.log(this.props.headerHeight)
    this.setState({
      resumeRootStyle: {
        position: resumeRootStyle.position,
        top: Math.floor(this.props.headerHeight) + 'px',
        textAlign: resumeRootStyle.textAlign,
        backgroundColor: resumeRootStyle.backgroundColor,
        width: resumeRootStyle.width,
        height: resumeRootStyle.height,
        zIndex: resumeRootStyle.zIndex,
      }
    })
  }

  componentDidUpdate(Props){
    if(parseInt(this.state.resumeRootStyle.top, 10) !== Math.floor(this.props.headerHeight)){
      const resumeRootStyle = this.state.resumeRootStyle
      console.log(this.props.headerHeight)
      this.setState({
        resumeRootStyle: {
          position: resumeRootStyle.position,
          top: Math.floor(this.props.headerHeight) + 'px',
          textAlign: resumeRootStyle.textAlign,
          backgroundColor: resumeRootStyle.backgroundColor,
          width: resumeRootStyle.width,
          height: resumeRootStyle.height,
          zIndex: resumeRootStyle.zIndex,
        }
      })
    }
  }

  render(){
    return(
      <div style={this.state.resumeRootStyle}>
        <h1>Colin Danforth</h1>
        <p>This is where you rebuild your entire resume and give some examples of the things you've done and why they're awesome. Do some shit shit brick!!</p>
      </div>
    )
  }
}

export default Resume

Resume.propTypes={
  headerHeight: PropTypes.number,
  onResizeSection1: PropTypes.func,
}
