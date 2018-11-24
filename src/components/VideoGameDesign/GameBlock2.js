import React from 'react'
import Unity from '../../images/Unity3d.png'

const block1Style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  width: '100%',
  height:'auto',
  paddingBottom: '2%',
}

const contentBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  marginTop: '2%',
  marginLeft: '10%',
}

const pStyle = {
  color: '#CCCCCC',
  fontSize: '1.3em',
  textAlign: 'left',
}

const unityImage = {
  maxWidth: '200px',
  width: 'auto',
  height:'auto',
}


class GamesBlock2 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <div style={contentBlockStyle}>
          <img style={unityImage} src={Unity} alt="Unity3d"/>

          <p style={pStyle}>
            About 6 years ago I started playing around with video game development in Unity3D. If you
            aren't familiar with the platform you should absolutely
            <a href="http://unity3d.com" rel="noreferrer noopener" target='_blank'> click here</a> and checkout their
            platform. There is a ton of great tutorials to help you learn coding for their platform, as well as how to
            place and use the features inside their editor.
          </p>
          <p style={pStyle}>
            One of the best things Unity has is single click deployment to all consoles, WebGL, desktop(mac, linux,
            and windows) as well as both Android and Iphone. This added to their asset store where developers can
            design and sell plugins, art assets, and scripts for use in your game makes it a very strong platform
            for the independant game designer.
          </p>
        </div>
      </div>
    )
  }
}

export default GamesBlock2
