import React from 'react'
import LandingBlock2 from "./LandingBlock2"
import LandingBlock3 from "./LandingBlock3"
import LandingBlock1 from "./LandingBlock1"

const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#1B2A41',
}



class LandingPage extends React.Component{

  render(){
    return(
      <div style={rootFlex}>
        <LandingBlock1/>
        <LandingBlock2/>
        <LandingBlock3/>
      </div>
    )
  }
}

export default LandingPage
