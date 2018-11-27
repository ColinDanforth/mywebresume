import React from 'react'

const block1Style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#000000',
  width: '100%',
  height: 'auto',
  paddingBottom: '2%',
}

const contentBlockStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  marginTop: '2%',
  marginLeft: '10%',
}

const imageBlock = {
  width: '30%,',
  marginRight: '3%',
}

const pStyle = {
  color: '#CCCCCC',
  fontSize: '1.2em',
  textAlign: 'justify',
  textJustify: 'auto',
}

const unityImage = {
  maxWidth: '400px',
  width: 'auto',
  height: 'auto',
}

const editorImage = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '80%',
  marginTop: '2%',
  marginLeft: '10%',
  marginBottom:'2%',
}

const unityEditorImage = {
  maxWidth: '400px',
  width: 'auto',
  height: 'auto',
  marginRight: '2%',
  cursor: 'pointer'
}

const divStyle = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  zIndex: '33',
  backgroundColor: '#000000'
}

const unityEditorImageFull = {
  maxWidth: '1200px',
  width: 'auto',
  height: 'auto',
  cursor: 'pointer',
}


class GamesBlock2 extends React.Component {
  constructor() {
    super()
    this.state = {
      showFullScreenImage: false,
    }
    this.showFullScreenImage = this.showFullScreenImage.bind(this)
    this.showImage = this.showImage.bind(this)
  }

  showImage() {
    if (this.state.showFullScreenImage) {
      return (
        <div style={divStyle}>
            <img style={unityEditorImageFull} src='https://s3.amazonaws.com/colindanforthwebresume/images/unityeditor.jpg' onClick={this.showFullScreenImage} alt='the Unity Editor'/>
        </div>
      )
    } else {
      return (
          <img style={unityEditorImage} src='https://s3.amazonaws.com/colindanforthwebresume/images/unityeditor.jpg' onClick={this.showFullScreenImage} alt='the Unity Editor'/>
      )
    }
  }

  showFullScreenImage() {
    this.setState({
      showFullScreenImage: !this.state.showFullScreenImage
    })
  }

  render() {
    return (
      <div style={block1Style}>
        <div style={contentBlockStyle}>
          <div style={imageBlock}>
            <a href="http://unity3d.com" rel="noreferrer noopener" target='_blank'>
              <img style={unityImage} src='https://s3.amazonaws.com/colindanforthwebresume/images/Unity3d.png' alt="Unity3d"/>
            </a>
          </div>
          <div>
            <p style={pStyle}>
              About 6 years ago I started playing around with video game development in Unity3D. If you
              aren't familiar with the platform you should absolutely
              <a style={{'margin-left': '3px'}} href="http://unity3d.com" rel="noreferrer noopener"
                 target='_blank'> click here</a> and checkout it out.
              There is a ton of great tutorials to help you learn coding for their platform, as well as how to
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
        <div style={editorImage}>
          {this.showImage()}
          <p style={pStyle}>
            this is an example of the unity interface. It seems like a lot to take in at first, but if you're
            excited about making games... you can learn it and make great use of the powerful tools that unity gives
            your access to. If you're interested in seeing the award winning tutorials that Unity supplies for free
            to learn how to use this tool to create awesome games
            <a style={{'margin-left': '3px'}} href="https://unity3d.com/learn/tutorials" rel="noreferrer noopener"
               target='_blank'> click here.</a>
          </p>
        </div>
      </div>
    )
  }
}

export default GamesBlock2
