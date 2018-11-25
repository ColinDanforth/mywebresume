import React from 'react'
import GamesBlock1 from "./GamesBlock1"
import GamesBlock2 from "./GamesBlock2"
import GamesBlock3 from "./GamesBlock3"
import GamesBlock4 from "./GamesBlock4"

const rootFlex={
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#000000',
}

class VGDPage extends React.Component{
  render(){
    return(
      <div style={rootFlex}>
        <GamesBlock1/>
        <GamesBlock2/>
        <GamesBlock3/>
        <GamesBlock4/>
      </div>
    )
  }
}

export default VGDPage
