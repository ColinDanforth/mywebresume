import React from 'react'
import SoftwareBlock1 from "./SoftwareBlock1"
import coding from '../../images/coding.gif'


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
      </div>
    )
  }
}

export default SoftwarePage
