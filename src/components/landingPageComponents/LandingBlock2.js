import React from 'react'
// import PropTypes from 'prop-types'
import jackOfAll from "../../images/jackofalltradesmyth.jpg"
// import ReactResizeDetector from "react-resize-detector"

const jackOfAllStyle = {
  width: '100%',
}

class LandingBlock2 extends React.Component{
  render(){
    return(
      <div>
        <div>
          <a href='https://medium.muz.li/the-myth-of-the-jack-of-all-trades-master-of-none-1eb28900e7d5' rel="noreferrer noopener" target='_blank'>
            <img style={jackOfAllStyle} src={jackOfAll} alt='jackBackground'/>
          </a>
        </div>
      </div>
    )
  }
}

export default LandingBlock2
