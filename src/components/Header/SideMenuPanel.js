import React from 'react'
import PropTypes from 'prop-types'

const initialLinkPosition = {
  color: '#000000',
  position: 'relative',
  float: 'left',
  margin: '10px',
}

const linkPosition = {
  position: 'relative',
  float: 'left',
  margin: '10px',
}

class SideMenuPanel extends React.Component{
  render(){
    return(
      <div>
        <a
          href='#resume'
          style={initialLinkPosition}
          data-id="resume"
          onClick={this.props.navigatePages}
        >Resume
        </a>
        <p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p>
      </div>
    )
  }
}

export default SideMenuPanel

SideMenuPanel.propTypes = {
  navigatePages: PropTypes.func,
  activeItem: PropTypes.string,
}
