import React from 'react'

const jackOfAllStyle = {
  marginTop: '3%',
  marginBottom: '3%',
  maxWidth: '1000px',
  width: 'auto',
  height: 'auto',
}

const rootDiv={
  backgroundColor: '#000000',
  width: '100%',
  height: 'auto',
}

const flextBlock = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}


class LandingBlock2 extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
        <div style={flextBlock}>
          <a href='https://medium.muz.li/the-myth-of-the-jack-of-all-trades-master-of-none-1eb28900e7d5' rel="noreferrer noopener" target='_blank'>
            <img style={jackOfAllStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/jackofalltradesmyth.jpg' alt='jackBackground'/>
          </a>
        </div>
      </div>
    )
  }
}

export default LandingBlock2
