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
      activeItem: '',
    }

    this.updateRootState = this.updateRootState.bind(this)
    this.pageControl = this.pageControl.bind(this)
    this.onHeaderResize = this.onHeaderResize.bind(this)
    this.onResizeSection1 = this.onResizeSection1.bind(this)
    this.block2Position = this.block2Position.bind(this)
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

  onResizeSection1(width, height){
    this.setState({
      block2Height: height,
    })
  }

  block2Position(){
    return(
      {
        position: 'relative',
        top: (this.state.block2Height) + 'px',
        zIndex: '0',
        backgroundColor: '#222222',
      }
    )
  }

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
        onResizeSection1={this.onResizeSection1}
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
        <div style={this.block2Position()}>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default RootPage
