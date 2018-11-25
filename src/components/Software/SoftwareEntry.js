import React from 'react'
import PropTypes from 'prop-types'


class SoftwareEntry extends React.Component{
  render(){
    return(
      <div style={this.props.objectStyles.rootDiv}>
        <h2 style={this.props.objectStyles.h2Style}>{this.props.entryObject.title}</h2>
        {this.props.entryObject.rootText.map((input, i) => <p key={i} style={this.props.objectStyles.pStyle}>{input}</p>)}
      </div>
    )
  }
}

export default SoftwareEntry

SoftwareEntry.propTypes={
  entryObject: PropTypes.object,
  objectStyles: PropTypes.object
}
