import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const initialLinkPosition = {
  color: '#CFCFCF',
  margin: '10px',
}

const linkPosition = {
  color: '#CFCFCF',
  position: 'relative',
  margin: '10px',
}

class SideMenuPanel extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
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
