import React from 'react'
import profileImage from "../images/profileImage.JPG"

const accordionDataPosition = {
  position: 'absolute',
  backgroundColor: '#64a5ff',
  top: '170px',
  left: '0px',
  width: '200px',
  zIndex:'19'
}

const linkStyle ={
  fontSize: '1.3em',
  marginBottom: '15px'
}

const linkBackGround = {
  backgroundColor: '#ffb06a',
  margin: '10px'
}

const backGroundColor = {
  position: 'absolute',
  top: '0px',
  width: '200px',
  height: '170px',
  backgroundColor: '#64a5ff',
}

const imageStyle = {
  position: 'absolute',
  top: '10px',
  left: '25%',
  width: '100px',
  height: '150px',
  borderRadius: '100%',
  zIndex:'19'
}

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      showMenu: false,
      activeItem: 'default'
    }

    this.handleAccordion = this.handleAccordion.bind(this)
    this.showMenuOptions = this.showMenuOptions.bind(this)
    this.handleOption = this.handleOption.bind(this)
  }

  handleAccordion(){
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  handleOption(){

  }

  showMenuOptions(){
    return(
      <div>
        <div style={linkBackGround}>
          <a style={linkStyle} href="#resume" option="resume" onClick={this.handleOption}>
          <span>My Resume
          </span>
          </a>
        </div>
        <div style={linkBackGround}>
          <a style={linkStyle} href="#martialarts" option="martial arts" onClick={this.handleOption}>
          <span>My Martial Arts Experience
          </span>
          </a>
        </div>
        <div style={linkBackGround}>
          <a style={linkStyle} href="#music" option="music" onClick={this.handleOption}>
          <span>My Band, and Music
          </span>
          </a>
        </div>
        <div style={linkBackGround}>
          <a style={linkStyle} href="#videogames" option="video games" onClick={this.handleOption}>
          <span>My Video Game Projects
          </span>
          </a>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div style={backGroundColor}>
        <a href="#menu" onClick={this.handleAccordion}>
          <img src={profileImage} alt="profileImage" style={imageStyle}/>
        </a>
        {this.state.showMenu ?
          (
            <div style={accordionDataPosition}>
              {this.showMenuOptions()}
            </div>
          )
          :
          (
            <div style={{'display': 'blocked'}}/>
          )
        }
      </div>
    )
  }
}

export default Header
