import React from 'react'
import ReactResizeDetector from "react-resize-detector"
import PropTypes from 'prop-types'

const footerStyle = {
  position: 'fixed',
  display: 'inline-block',
  backgroundColor: '#000000',
  bottom: 0,
  width: '100%',
  zIndex: 10,
}

const leftTextStyle = {
  color: '#DDDDDD',
  fontSize: '0.8em',
  margin: '3px',
  float: 'right',
}

const rightTextStyle = {
  color: '#DDDDDD',
  fontSize: '0.8em',
  margin: '3px',
  float: 'left',
}

const leftBlockStyle={
  position: 'relative',
  float: 'left',
  width: '48%',
  height: 'auto',
  marginRight: '2%',
}

const rightBlockStyle={
  position: 'relative',
  float: 'right',
  width: '48%',
  height: 'auto',
  marginLeft: '2%',
}

class Footer extends React.Component{
  render(){
    return (
      <div style={footerStyle}>
        <div style={leftBlockStyle}>
          <a style={leftTextStyle} href="mailto:colin.danforth@gmail.com?Subject=Subject" target="_newtab">colin.canforth@gmail.com</a>
          <p style={leftTextStyle}>Email Contact:</p>
        </div>
        <div style={rightBlockStyle}>
          <p style={rightTextStyle}>Phone Contact:</p>
          <p style={rightTextStyle}>416-388-4294</p>
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
