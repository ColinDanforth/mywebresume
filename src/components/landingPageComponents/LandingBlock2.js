import React from 'react'
import PropTypes from 'prop-types'
import jackOfAll from "../../images/jackofalltradesmyth.jpg"
import ReactResizeDetector from "react-resize-detector"
import LandingBlock3 from "./LandingBlock3"

class LandingBlock2 extends React.Component{
  render(){
    return(
      <div>
        <div>
          <a href='https://medium.muz.li/the-myth-of-the-jack-of-all-trades-master-of-none-1eb28900e7d5' rel="noreferrer noopener" target='_blank'>
            <img style={this.props.jackOfAllStyle} src={jackOfAll} alt='jackBackground'/>
          </a>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizeATag}/>
        </div>
        <LandingBlock3
          block3Style={this.props.block3Style}
        />
      </div>
    )
  }
}

export default LandingBlock2

LandingBlock2.propTypes = {
  jackOfAllStyle: PropTypes.object,
  block3Style: PropTypes.object,
  onResizeATag: PropTypes.func,
}
