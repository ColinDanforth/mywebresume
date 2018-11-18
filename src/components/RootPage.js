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
      block2Height: 0,
      landingPageHeight: 0,
      activeItem: '',
    }

    this.updateRootState = this.updateRootState.bind(this)
    this.pageControl = this.pageControl.bind(this)
    this.onHeaderResize = this.onHeaderResize.bind(this)
    // this.onResizeSection1 = this.onResizeSection1.bind(this)
    this.onResizelandingPageBackground = this.onResizelandingPageBackground.bind(this)
    // this.block2Position = this.block2Position.bind(this)
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

  // onResizeSection1(height){
  //   this.setState({
  //     block2Height: height,
  //   })
  // }

  onResizelandingPageBackground(width, height){
    this.setState({
      landingPageHeight: height,
    })
  }

  // block2Position(){
  //   return(
  //     {
  //       position: 'relative',
  //       top: (this.state.block2Height) + 'px',
  //       zIndex: '0',
  //       backgroundColor: '#222222',
  //     }
  //   )
  // }

  pageControl(){
    console.log(this.state.activeItem)
    if(this.state.activeItem === 'resume'){
      return <Resume
        headerHeight={this.state.headerHeight}
        onResizeSection1={this.onResizeSection1}
      />
    } else {
      return <LandingPage
        headerHeight={this.state.headerHeight}
        jackOfAllPosition={this.state.landingPageHeight}
        onResizeSection1={this.onResizeSection1}
        onResizelandingPageBackground={this.onResizelandingPageBackground}
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
