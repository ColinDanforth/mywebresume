import React from 'react'
import ReactResizeDetector from "react-resize-detector"
import PropTypes from 'prop-types'

const footerStyle = {
  position: 'fixed',
  backgroundColor: '#000000',
  bottom: 0,
  width: '100%',
  zIndex: 10,
}

const flexDiv = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

}

const textStyle = {
  color: '#DDDDDD',
  margin: '0px',
}

const blockStyle={
  display:  'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginLeft:'0.8%',
  marginRight:'0.8%'
}

class Footer extends React.Component{
  render(){
    return (
      <div style={footerStyle}>
        <div style={flexDiv}>
          <div style={blockStyle}>
            <p style={textStyle}>Email Contact:</p>
            <a style={textStyle} href="mailto:colin.danforth@gmail.com?Subject=Subject" target="_newtab">colin.canforth@gmail.com</a>
          </div>
          <div style={blockStyle}>
            <p style={textStyle}>Phone Contact:</p>
            <p style={textStyle}>416-388-4294</p>
          </div>
          <a href='/resume' style={blockStyle}>
              <span style={textStyle}>View and Download my resume</span>
          </a>
        </div>
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizeFooterHeight}/>
      </div>
    )
  }
}

export default Footer

Footer.propTypes={
  onResizeFooterHeight: PropTypes.func,
}
