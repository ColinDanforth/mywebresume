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
}

const menuIconStyle = {
  position: 'relative',
  margin: '2px',
  width: '2.5%',
  height: 'auto',
}

const h2Style={
  color: '#000000',
  position: 'fixed',
  transform: 'translate(0, -30%)',
  fontSize: '1.2em',
  top: '0',
  left: '10%',
}

const h3Style={
  position: 'fixed',
  fontSize: '0.9em',
  transform: 'translate(0, 0%)',
  top: '0',
  left: '25%',
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
  }

  render(){
    return(
      <div style={menuBar}>
        <a style={menuIconStyle} href="#menu" onClick={this.openMenu}>
          <img style={menuIconStyle} src={menuIcon} alt=""/>
        </a>
        <a href='#resume'
           data-id=""
           onClick={this.navigatePages}
        >
          <h2 style={h2Style}>COLIN DANFORTH</h2>
        </a>
        <h3 style={h3Style}>Software Developer, Dev Ops, Game Design, Music Instructor, Martial Arts Instructor</h3>

          {this.state.openMenu ?
          (
            <SideMenuPanel
              navigatePages={this.navigatePages}
              activeItem={this.props.activeItem}
            />
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
