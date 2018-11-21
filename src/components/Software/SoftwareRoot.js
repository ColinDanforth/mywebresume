import React from 'react'

const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#CFCFCF',
}

const block1Style = {
  textAlign: 'center'
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#1B2A41',
  position: 'relative',
  fontSize: '2em',
}

class SoftwareRoot extends React.Component{
  render(){
    return(
      <div style={rootFlex}>
        <div style={block1Style}>
          <h1 style={headerStyle}>Full Stack Developer and Dev Ops Career Progression</h1>
        </div>
      </div>
    )
  }
}

export default SoftwareRoot
