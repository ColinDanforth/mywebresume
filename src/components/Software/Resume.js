import React from 'react'

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
        <iframe title="myResume" src='https://s3.amazonaws.com/colindanforthwebresume/resume/Colin_Danforth_Resume.pdf' style={iFrameStyle}/>
      </div>
    )
  }
}

export default Resume
