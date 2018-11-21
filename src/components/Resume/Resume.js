import React from 'react'

const resumeRootStyle =  {
  textAlign: 'center',
  backgroundColor: '#BCC4C0',
  width: '100%',
}

class Resume extends React.Component{

  render(){
    return(
      <div style={resumeRootStyle}>
        <h1>Colin Danforth</h1>
        <p>This is where you rebuild your entire resume and give some examples of the things you've done and why they're awesome. Do some shit shit brick!!</p>
      </div>
    )
  }
}

export default Resume
