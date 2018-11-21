import React from 'react'
import ColinDanforth from '../../images/Colin_Danforth_Resume.pdf'

const resumeRootStyle =  {
  position: 'absolute',
  textAlign: 'center',
  backgroundColor: '#BCC4C0',
  width: '100%',
  height: '100%',
}

const iFrameStyle = {
  width: '100%',
  height: '100%',
  border: 'none'
}

class Resume extends React.Component{

  render(){
    return(
      <div style={resumeRootStyle}>
        <iframe src={ColinDanforth} style={iFrameStyle}></iframe>
      </div>
    )
  }
}

export default Resume
