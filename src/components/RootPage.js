import React from 'react'
import StylizedHeader from "./Header/StylizedHeader"
import LandingPage from "./landingPageComponents/LandingPage"
import Footer  from './footer/Footer'
import Resume from "./Resume/Resume"

const rootPosition = {
  position: 'flex',
  top: '0px'
}

class RootPage extends React.Component{
  constructor(){
    super()
    this.state = {
      headerHeight: 0,
      landingPageHeight: 0,
      block2Height: 0,
      activeItem: '',
    }

    this.updateRootState = this.updateRootState.bind(this)
    this.pageControl = this.pageControl.bind(this)
    this.onHeaderResize = this.onHeaderResize.bind(this)
    this.onResizelandingPageBackground = this.onResizelandingPageBackground.bind(this)
    this.onResizeBlock2 = this.onResizeBlock2.bind(this)
  }

  updateRootState(input){
    this.setState({
      [input.name]: input.value,
    })
  }

  onHeaderResize(width, height){
    this.setState({
      headerHeight: height,
    })

  }

  onResizelandingPageBackground(width, height){
    this.setState({
      landingPageHeight: height,
    })
  }

  onResizeBlock2(width, height){
    console.log('jack', height)
    this.setState({
      block2Height: height
    })
  }

  pageControl(){
    if(this.state.activeItem === 'resume'){
      return <Resume
        headerHeight={this.state.headerHeight}
        onResizeSection1={this.onResizeSection1}
      />
    } else {
      return <LandingPage
        headerHeight={this.state.headerHeight}
        jackOfAllPosition={this.state.landingPageHeight + this.state.headerHeight}
        onResizelandingPageBackground={this.onResizelandingPageBackground}
        onResizeBlock2={this.onResizeBlock2}
        block3Position={this.state.landingPageHeight + this.state.headerHeight + this.state.block2Height}
      />
    }
  }

  render(){
    return(
      <div style={rootPosition}>
        <div>
          <StylizedHeader
            updateRootState={this.updateRootState}
            onHeaderResize={this.onHeaderResize}
            activeItem={this.activeItem}
          />
          {this.pageControl()}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default RootPage
