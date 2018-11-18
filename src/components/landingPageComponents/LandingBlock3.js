import React from 'react'
import PropTypes from 'prop-types'

const headerStyleMargin = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFCF',
  position: 'relative',
  fontSize: '2em',
  marginTop: '2%',
  marginBottom: '2%',
}

class LandingBlock3 extends React.Component{
  render(){
    return(
      <div  style={this.props.block3Style} className="block2">
        <h1 style={headerStyleMargin}>T Shaped Employees, Fungibility in Work and Life</h1>
        <p>Florian Popescu</p>
      </div>
    )
  }
}

export default LandingBlock3

LandingBlock3.propTypes = {
  block3Style: PropTypes.object,
}
