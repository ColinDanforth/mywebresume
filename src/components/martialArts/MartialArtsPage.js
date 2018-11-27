import React from 'react'
import MartialBlock1 from "./MartialBlock1"

// const block1Style = {
//   textAlign: 'center',
//   display: 'flex',
//   flexDirection: 'column',
//   itemAlignment: 'center',
//   justifyContent: 'flex-start',
//   backgroundImage: `url(https://s3.amazonaws.com/colindanforthwebresume/images/fightingarts.jpg)`,
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// }

class MartialArtsPage extends React.Component{
  render(){
    return(
      <div>
        <MartialBlock1/>
      </div>
    )
  }
}

export default MartialArtsPage
