import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../../images/menuIcon.png'
import SideMenuPanel from "./SideMenuPanel"
import ReactResizeDetector from 'react-resize-detector'

const menuBar = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: 'auto',
  backgroundColor: '#324A5F',
  zIndex: '20',
}

const firstRow ={
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

const menuIconAStyle={
  marginRight: '20%',
  maxWidth: '3.4%',
  width: 'auto',
  height: 'auto',
}

const menuIconStyle = {
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
}

const h2Style={
  color: '#CFCFCF',
  marginRight: '10%',
  textAlign: 'left',
  textDecoration: 'none',
  fontSize: '0.8em',
}

const h3Style={
  fontSize: '0.9em',
  // marginRight: '2%',
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
    this.navigatePages = this.navigatePages.bind(this)
  }

  openMenu(){
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  navigatePages(event){

    const newPage={
      name: 'activeItem',
      value: event.currentTarget.dataset.id
    }
    this.props.updateRootState(newPage)
    if(this.state.openMenu) {
      this.openMenu()
    }
  }

  render(){
    return(
      <div style={menuBar}>
        <div style={firstRow}>
          <a style={menuIconAStyle} href="#menu" onClick={this.openMenu}>
            <img style={menuIconStyle} src={menuIcon} alt=""/>
          </a>
          <a
            style={h2Style}
            href='#resume'
            data-id=""
            onClick={this.navigatePages}
          >
            <h2>COLIN DANFORTH</h2>
          </a>
          <h3 style={h3Style}>Software Developer, Dev Ops, Game Design, Music Instructor, Martial Arts Instructor</h3>
        </div>
        {this.state.openMenu ?
          (
            <div >
              <SideMenuPanel
                navigatePages={this.navigatePages}
                activeItem={this.props.activeItem}
                openMenu={this.openMenu}
              />
            </div>
          )
          :
          (<div style={{'display': 'none'}}/>)
        }
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.onHeaderResize}/>
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
