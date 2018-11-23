import React from 'react'
import StylizedHeader from "./Header/StylizedHeader"
import LandingPage from "./landingPageComponents/LandingPage"
import Footer  from './footer/Footer'
import {Route, Switch} from "react-router-dom"
import SoftwarePage from "./Software/SoftwarePage"
import Resume from "./Software/Resume"
import VGDPage from "./VideoGameDesign/VGDPage"

const rootPosition = {
  position: 'flex',
  top: '0px'
}

class RootPage extends React.Component{
  constructor(){
    super()
    this.state = {
      phantomHeader: {
        position: 'relative',
        top: '0px',
        display: 'block',
        height: '0px'
      },
      phantomFooter: {
        position: 'relative',
        bottom: '0px',
        display: 'block',
        height: '0px'
      },
    }

    this.onHeaderResize = this.onHeaderResize.bind(this)
    this.onResizeFooterHeight = this.onResizeFooterHeight.bind(this)
  }

  onHeaderResize(width, height){
    const phantomHeader = this.state.phantomHeader
    this.setState({
      phantomHeader:{
        position: phantomHeader.position,
        top: phantomHeader.top,
        display: phantomHeader.display,
        height: height + 'px',
      }
    })

  }

  onResizeFooterHeight(width, height){
    const phantomFooter = this.state.phantomFooter
    this.setState({
      phantomFooter: {
        position: phantomFooter.position,
        bottom: phantomFooter.bottom,
        display: phantomFooter.display,
        height: height + 'px',
      },
    })
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
          <div style={this.state.phantomHeader}/>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/software' component={SoftwarePage}/>
            <Route path='/videogamedesign' component={VGDPage}/>
            <Route path='/resume' component={Resume}/>
          </Switch>
        </div>
        <Footer
          onResizeFooterHeight={this.onResizeFooterHeight}
        />
        <div style={this.state.phantomFooter}/>
      </div>
    )
  }
}

export default RootPage
