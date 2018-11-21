import React from 'react'
import SoftwareBlock1 from "./SoftwareBlock1"

const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#CFCFCF',
}

class SoftwarePage extends React.Component{
  render(){
    return(
      <div style={rootFlex}>
        <SoftwareBlock1/>
      </div>
    )
  }
}

export default SoftwarePage
