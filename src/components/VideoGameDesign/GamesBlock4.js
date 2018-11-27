import React from 'react'

const rootDiv = {
  backgroundColor: '#000000',
  width: '100%',
  height:'auto',
}

const block4Style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '90%',
  marginLeft:'5%',
  height:'auto',
  paddingTop: '4%',
}

const textDiv={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '86%',
    marginLeft: '7%',
    paddingBottom:'2%',
}

const nowWhatStyle ={
  maxWidth: '300px',
  width: 'auto',
  height: 'auto',
}

const soNowWhatStyle ={
  maxWidth: '300px',
  width: 'auto',
  height: 'auto',
}

const merauderStyle = {
  maxWidth: '600px',
  width: 'auto',
  height: 'auto',
}

const h1Style={
  fontSize: '1.8em',
  color:'#FFF',
  marginRight: '0.5%',
  marginLeft: '0.5%',
}

const pStyle = {
  color: '#FFF',
  fontSize: '1.3em',
  textAlign: 'justify',
  textJustify: 'auto',
  marginBottom: '3%',
}

const pCommentStyle = {
  color: '#FFF',
  fontSize: '1em',
  fontStyle: 'italic',
  textAlign: 'justify',
  textJustify: 'auto',
  width: '60%',
  marginBottom: '4%',
}


class GamesBlock4 extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
        <div style={block4Style}>
          <img style={nowWhatStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/whatnow.jpg' alt='now what'/>
          <h1 style={h1Style}>What's next? Working on anything new Colin?</h1>
          <img style={soNowWhatStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/sonowwhat.jpg' alt='so Now what'/>
        </div>
        <div style={textDiv}>
          <p style={pStyle}>Well I'm glad you asked. That was very thoughtful of you.</p>
          <p style={pStyle}>
            Recently I've decided to start working on a bullet hell fighter pilot game for mobile platforms. I've been working on building
            solid low poly models that will render quickly and smoothly on mobile devices. This has given me some
            challenges and taught me a lot about using Blender to make high resolution models with an exceedingly low
            poly count.
          </p>
          <img style={merauderStyle} src='https://s3.amazonaws.com/colindanforthwebresume/images/Merauder2.png' alt='Merauder screen shot'/>
          <p style={pCommentStyle}>
            Sorry for nerding out, but its so satisfying to create a solid looking 3d model knowing full well that
            its been done in such a manner that you are also able to efficiently render it in real time.
          </p>
          <p style={pStyle}>

          </p>
          <p style={pStyle}>
            I'm hoping to include a webGl version of the unity application here for you to check out. I'm still in the
            early stages of development so I'm not sure if this will be completed by the time this site goes live.
          </p>
        </div>
      </div>
    )
  }
}

export default GamesBlock4
