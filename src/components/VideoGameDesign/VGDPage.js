import React from 'react'
import GamesBlock1 from "./GamesBlock1"
import GamesBlock2 from "./GameBlock2"
import GamesBlock3 from "./GamesBlock3"

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
      </div>
    )
  }
}

export default VGDPage
