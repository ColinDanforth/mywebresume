import React from 'react'
import StylizedHeader from "./StylizedHeader"
import LandingPage from "./LandingPage"

const rootPosition = {
  position: 'flex',
  top: '0px'
}

class RootPageItem extends React.Component{
  constructor(){
    super()
    this.state = {
      headerHeight: 0,
      block2Position: {
        position: 'absolute',
        top: '0px',
      },
    }

    this.landingPageResize = this.landingPageResize.bind(this)
    this.onHeaderResize = this.onHeaderResize.bind(this)
  }

  onHeaderResize(width, height){
    this.setState({
      headerHeight: height,
    })

  }

  landingPageResize(width, height){
    this.setState({
      block2Position: {
        position: this.state.block2Position.position,
        top: height + 'px',
      }
    })

  }

  render(){
    return(
      <div style={rootPosition}>
            <StylizedHeader
              handleHeaderResize={this.onHeaderResize}
            />
            <LandingPage
              headerHeight={this.state.headerHeight}
            />
            <p>asdhga;lablngr</p>
      </div>
    )
  }
}

export default RootPageItem
