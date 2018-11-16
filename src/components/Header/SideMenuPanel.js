import React from 'react'

const initialLinkPosition = {
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
        <p style={initialLinkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p><p style={linkPosition}> a bunch of shit</p>
      </div>
    )
  }
}

export default SideMenuPanel
