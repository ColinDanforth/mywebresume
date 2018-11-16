import React from 'react'
import StylizedHeader from "../Header/StylizedHeader"
import LandingPage from "./LandingPage"
import Footer  from '../footer/Footer'

const rootPosition = {
  position: 'flex',
  top: '0px'
}

class RootPageItem extends React.Component{
  constructor(){
    super()
    this.state = {
      headerHeight: 0,
      block2Height: 0,
    }

    this.onHeaderResize = this.onHeaderResize.bind(this)
    this.onResizeSection1 = this.onResizeSection1.bind(this)
    this.block2Position = this.block2Position.bind(this)
  }

  onResizeSection1(width, height){
    this.setState({
      block2Height: height,
    })
  }

  onHeaderResize(width, height){
    this.setState({
      headerHeight: height,
    })

  }

  block2Position(){
    return(
      {
        position: 'relative',
        top: (this.state.block2Height) + 'px',
        zIndex: '0',
        backgroundColor: '#777777',
      }
    )
  }

  render(){
    return(
      <div style={rootPosition}>
        <div>
          <StylizedHeader
            onHeaderResize={this.onHeaderResize}
          />
          <LandingPage
            headerHeight={this.state.headerHeight}
            onResizeSection1={this.onResizeSection1}
          />
        </div>
        <div style={this.block2Position()}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default RootPageItem
