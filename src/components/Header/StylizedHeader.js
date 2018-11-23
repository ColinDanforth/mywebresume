import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../../images/menuIcon.png'
import ReactResizeDetector from 'react-resize-detector'
import homeIcon from '../../images/homeIcon.png'
import Menu from "./Menu"

const menuBar = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: 'auto',
  backgroundColor: '#324A5F',
  zIndex: '20',
}
const menuBarFull = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: '#324A5F',
  zIndex: '20',
}

const centerMenu = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

const firstRow ={
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const menuIconAStyle={
  position: 'fixed',
  top: '0.5%',
  left: '0.5%',
  maxWidth: '3.4%',
  width: 'auto',
  height: 'auto',
}

const menuIconStyle = {
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
}

const phantomDivForMenuIcon = {
  width: '10%',
  height: 'auto',
}

const h2Style={
  color: '#CFCFCF',
  marginRight: '10%',
  textAlign: 'left',
  textDecoration: 'none',
  fontSize: '0.8em',
}

const homeIconStyle ={
  maxWidth: '5%',
  width: 'auto',
  height: 'auto',
  marginRight: '1%',
}

const h3Style={
  whiteSpace: 'nowrap',
  fontSize: '0.9em',
  textAlign: 'left',
  color: '#CFCFCF',
}

class StylizedHeader extends React.Component{
  constructor(){
    super()
    this.state = {
      openMenu: false,
    }

    this.openMenu = this.openMenu.bind(this)
    this.hyperLinkMenu = this.hyperLinkMenu.bind(this)
  }

  openMenu(){
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  hyperLinkMenu(){
    if(this.state.openMenu){
      return (
        <div style={menuBarFull}>
          <div style={firstRow}>
            <span style={menuIconAStyle} onClick={this.openMenu}>
              <img style={menuIconStyle} src={menuIcon} alt=""/>
            </span>
          </div>
          <div style={centerMenu}>
            <Menu/>
          </div>
        </div>
      )
    }else {
      return (
        <div style={menuBar}>
          <div style={firstRow}>
            <span style={menuIconAStyle} onClick={this.openMenu}>
              <img style={menuIconStyle} src={menuIcon} alt=""/>
            </span>
            <div style={phantomDivForMenuIcon}/>
            <a
              style={h2Style}
              href='/'
            >
              <h2>
                <img style={homeIconStyle} src={homeIcon} alt='homeIcon'/>
                COLIN DANFORTH
              </h2>
            </a>
            <h3 style={h3Style}>Software Developer, Dev Ops, Game Design, Music Instructor, Martial Arts Instructor</h3>
          </div>
          <ReactResizeDetector handleWidth handleHeight onResize={this.props.onHeaderResize}/>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.hyperLinkMenu()}
      </div>
    )
  }
}

export default StylizedHeader

StylizedHeader.propTypes = {
  updateRootState: PropTypes.func,
  onHeaderResize: PropTypes.func,
  activeItem: PropTypes.string,
}
