import React from 'react'
import MartialBlock1 from "./MartialBlock1"

const rootDiv = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  itemAlignment: 'center',
  justifyContent: 'center',
  width: '100%',
}

class MartialArtsPage extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
        <MartialBlock1/>
      </div>
    )
  }
}

export default MartialArtsPage
