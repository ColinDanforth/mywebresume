import React from 'react'
import PropTypes from 'prop-types'
import profileImage from "../images/profileImage.JPG"
import menuIcon from '../images/menuIcon.png'
import ReactResizeDetector from 'react-resize-detector'
import SideMenuPanel from "./SideMenuPanel"

const menuBar = {
  position: 'fixed',
  backgroundColor: '#89b5c9',
  top: '0px',
  width: '100%',
  height: '40px',
}

const menuIconStyle = {
  position: 'fixed',
  left: '5px',
  top: '2px',
  width: '35px',
  height: '35px',
}

const profileImageStyle = {
  position: 'fixed',
  borderRadius: '100%',
  right: '10px',
  top: '10px',
  width: '100px',
  height: '150px',
}

const sideMenuPanelStyle ={
  position: 'fixed',
  left: '0px',
  top: '40px',
  width: '150px',
  height: '100%',
  backgroundColor: '#607d8a',
}

class StylizedHeader extends React.Component{
  constructor(){
    super()
    this.state = {
      openMenu: false,
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(){
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  render(){
    return(
      <div style={menuBar}>
        <a style={menuIconStyle} href="#menu" onClick={this.openMenu}>
          <img style={menuIconStyle} src={menuIcon} alt=""/>
        </a>
        <img style={profileImageStyle} src={profileImage} alt=''/>
        {this.state.openMenu ?
          (<div style={sideMenuPanelStyle}>
            <SideMenuPanel/>
          </div>)
          :
          (<div style={{'display': 'blocked'}}/>)
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.onHeaderResize}/>
      </div>
    )
  }
}

export default StylizedHeader

StylizedHeader.propTypes = {
  onHeaderResize: PropTypes.func,
}
