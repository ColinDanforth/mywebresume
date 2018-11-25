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
  width: '86%',
  marginLeft: '7%',
  paddingTop:'2%',
  paddingBottom:'2%',
}

const flexContentBlock = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  width: '90%',
  marginLeft:'5%',
}

const flexItemColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '30%',
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
  textAlign: 'justify',
  textJustify: 'auto',
}

const pIframeStyle = {
  textAlign: 'justify',
  textJustify: 'auto',
}

class GamesBlock3 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <div style={textBlock}>
          <h2 style={headerStyle}>Game Projects</h2>
          <p style={pStyle}>
            Below are soem examples from my youtube channel showing some of the games I've
            worked on over the past few years. Some have been completed, some were labours of love that frankly just
            couldn't be completed in a way that would satisfy my goals. Either way it was fun, and I'm happy to show
            them to you here as examples of what can be accomplished as a self taught video game designer.
          </p>
        </div>
        <div style={flexContentBlock}>
          <div style={flexItemColumn}>
          <iframe width="373" height='210' src="https://www.youtube.com/embed/OrLSm8fsEIs" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title="PadoruKonbatto"
                  allowFullScreen/>
          <p style={pIframeStyle}>
            This Game is the first VR game I ever attempted. I worked on it with another colleague from LoyaltyOne.
            The Game was designed to be focus on a multiplayer experience for the HTC Vive. Padoru Konbatto has a
            pretty fast moving ball component and with online game mechanics it was too difficult to make the active
            paddle accurate due to lag for multiplayer. The host would have no issues, but the remote player saw
            dramatic issues with aiming which unfortunately became an insurmountable issue.
          </p>
          </div>
          <div style={flexItemColumn}>
          <iframe width="373" height="210" src="https://www.youtube.com/embed/SEh57tQCnDo" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title="DroneTest"
                  allowFullScreen/>
            <p style={pIframeStyle}>
              This video is a functional test for another VR game I worked on independantly. The level design and
              drone design were generated, and built respectively by me. This was an excellent experience but the game
              scale was more than I could accomplish on my own. I used this project to better understand 3d modelling
              principals and see what kind of performance I would get from the terrain and physics interactions in unity
              for this PC game. All in all I was very pleased with the result and carried this knowledge forward into
              future projects.
            </p>
          </div>
          <div style={flexItemColumn}>
          <iframe width="373" height="210" src="https://www.youtube.com/embed/svB8APRXcrA" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title="Rivalry Low G"
                  allowFullScreen/>
            <p style={pIframeStyle}>
              This game is a desktop racing game I began working on independantly as well. All terrain and ship models
              designed and implemented by me. I used substance painter for the texturing. This demo was showing the
              multiplayer interface I loaded from a unity package. As well as the adjustable ship performance features
              which I was working on to better strategize upgrade functionality within the game. Unfortunately the scale
              of the game was too immense for me to complete on my own.
            </p>
          </div>
        </div>
        <div style={flexContentBlock}>
        </div>
      </div>
    )
  }
}

export default GamesBlock3
