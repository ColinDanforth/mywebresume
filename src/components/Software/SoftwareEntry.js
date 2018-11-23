import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  flexFlow: 'wrap',
  justifyContent: 'center',
  padding: '1.5%',
  marginBottom: '3%',
  backgroundColor: '#596474',
}

const h2Style = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#FFFFFF',
  fontSize: '1.7em',
}

const pStyle={
  color: '#CCCCCC'
}

class SoftwareEntry extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
        <h2 style={h2Style}>{this.props.entryObject.title}</h2>
        {this.props.entryObject.rootText.map((input, i) => <p key={i} style={pStyle}>{input}</p>)}
      </div>
    )
  }
}

export default SoftwareEntry

SoftwareEntry.propTypes={
  entryObject: PropTypes.object,
}