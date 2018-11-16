import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../images/menuIcon.png'
import SideMenuPanel from "./SideMenuPanel"
import ReactResizeDetector from 'react-resize-detector'

const menuBar = {
  position: 'sticky',
  top: '0px',
  left: '0px',
  width: '100%',
  height: 'auto',
  backgroundColor: '#607d8a',
}

const menuIconStyle = {
  position: 'relative',
  left: '5px',
  top: '2px',
  width: '35px',
  height: '35px',
}

const sideMenuPanelStyle ={
  position: 'fixed',
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
        {this.state.openMenu ?
          (<div style={sideMenuPanelStyle}>
            <SideMenuPanel/>
          </div>)
          :
          (<div style={{'display': 'none'}}/>)
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.handleHeaderResize}/>
      </div>
    )
  }
}

export default StylizedHeader

StylizedHeader.propTypes = {
  handleHeaderResize: PropTypes.func,
}
