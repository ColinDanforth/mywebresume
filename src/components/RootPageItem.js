import React from 'react'
import StylizedHeader from "./StylizedHeader"

const rootStyle = {
  position: 'absolute',
  top: '0px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#859ea6',
}

class RootPageItem extends React.Component{
  constructor(){
    super()
    this.state = {
      phantomForHeader: {
        display: 'block',
        height: '50px'
      }
    }

    this.onHeaderResize = this.onHeaderResize.bind(this)
  }

  onHeaderResize(width, height){
    this.setState({
      phantomForHeader: {
        display: 'block',
        height: height + 'px'
      },
    })
  }

  render(){
    return(
      <div style={rootStyle}>
        <div style={this.state.phantomForHeader}/>
        <StylizedHeader
          onHeaderResize={this.onHeaderResize}
        />
        <p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p><p>jhas;hljgaf;</p>
      </div>
    )
  }
}

export default RootPageItem
