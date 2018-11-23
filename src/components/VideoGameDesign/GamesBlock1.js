import React from 'react'

const block1Style = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80%',
  marginLeft: '10%',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CCCCCC',
  fontSize: '2em',
}

const pStyle = {
  color: '#CCCCCC',
  fontSize: '1.3em',
  textAlign: 'left',
}

const pCommentStyle = {
  color: '#CCCCCC',
  fontSize: '1em',
  fontStyle: 'italic',
  marginBottom: '4%',
}

class GamesBlock1 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <h2 style={headerStyle}>Video Game Design: Spit Take Games</h2>
        <p style={pStyle}>
          So you hear the words 'I'm old school' tossed around a lot when it comes to video games.
          Seriously though... I'm old school. When I was young my family was one of the first families
          on our block to have a computer. My father worked for IBM and like me taught himself to be
          a computer engineer on his own. As such he knew the value of having a computer on hand
          and how this would be important in the future. For me it was important to play all the shareware
          games I could find... and then eventually all the solid games I could buy. Growing up we had Atari,
          NES, SNES, N64, and then I moved out and started buying everything I could get my hands on.
        </p>
        <p style={pCommentStyle}>
          I'll post some links to great retro games at the bottom of the page.
        </p>
      </div>
    )
  }
}

export default GamesBlock1
