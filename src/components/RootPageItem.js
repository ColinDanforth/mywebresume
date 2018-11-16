import React from 'react'
import StylizedHeader from "./StylizedHeader"
import LandingPage from "./LandingPage"

const rootStyle = {
  position: 'relative',
  top: '0px',
  width: '100%',
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
      <div style={rootStyle}>
        <div>
          <div>
            <StylizedHeader
              handleHeaderResize={this.onHeaderResize}
            />
            <LandingPage/>
          </div>
          <div>
            <p>asdhga;lablngr</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RootPageItem
