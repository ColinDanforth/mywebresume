import React from 'react'
import SoftwareBlock1 from "./SoftwareBlock1"
import coding from '../../Gif/coding.gif'
import SoftwareBlock2 from "./SoftwareBlock2"


const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundImage: `url(${coding})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat-y',
}

class SoftwarePage extends React.Component{
  render(){
    return(
      <div style={rootFlex}>
        <SoftwareBlock1/>
        <SoftwareBlock2/>
      </div>
    )
  }
}

export default SoftwarePage
