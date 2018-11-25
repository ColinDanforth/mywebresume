import React from 'react'

const block1Style = {
  backgroundColor: '#FFFFFF',
  width: '100%',
  height:'auto',
  paddingBottom: '4%',
}

const textBlock = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  marginLeft: '10%',
  paddingTop:'2%',
  paddingBottom:'2%',
}

const flexContentBlock = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90%',
  marginLeft:'5%',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#000000',
  fontSize: '2em',
}

const pStyle = {
  color: '#000000',
  fontSize: '1.3em',
  textAlign: 'left',
}

class GamesBlock3 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <div style={textBlock}>
          <h2 style={headerStyle}>Game Projects</h2>
          <p style={pStyle}>
            Below I will connect a series of YouTube videos from my youtube channel showing some of the games I've
            worked on over the past few years. Some have been completed, some were labours of love that fankly just
            couldn't be completed as it stands. Either way it was fun, and I'm happy to show them to you.
          </p>
        </div>
        <div style={flexContentBlock}>
          <iframe width="373" height='210' src="https://www.youtube.com/embed/OrLSm8fsEIs" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
          <iframe width="373" height="210" src="https://www.youtube.com/embed/SEh57tQCnDo" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
          <iframe width="373" height="210" src="https://www.youtube.com/embed/svB8APRXcrA" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        </div>
        <div style={flexContentBlock}>
        </div>
      </div>
    )
  }
}

export default GamesBlock3
