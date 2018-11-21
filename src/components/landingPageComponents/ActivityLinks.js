import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  alignItems: 'flex-start',
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '2%',
  marginBottom: '2%',
  width: '60%',
  backgroundColor: '#384249',
}

const imgStyle = {
  position: 'relative',
  marginTop: '1%',
  marginBottom: '1%',
  marginLeft: '1%',
  maxWidth: '16%',
  width: 'auto',
  height: 'auto',
}

const textDiv = {
  position: 'relative',
  left: '2%',
}

const aStyle = {
  position: 'relative',
  textDecoration: 'none',
}

const h1style = {
  position: 'relative',
  textAlign: 'center',
  color: '#CFCFCF',
  width: '98%',
}

const rootText = {
  position: 'relative',
  textAlign: 'left',
  color: '#CFCFCF',
  width: '98%',
}

class ActivityLinks extends React.Component{
  render(){
    return(
      <a
        href={this.props.activityObject.link}
        style={aStyle}
      >
        <div style={rootDiv}>
          <img style={imgStyle} src={this.props.activityObject.img} alt={this.props.activityObject.pageName}/>
          <div style={textDiv}>
            <h1 style={h1style}>{this.props.activityObject.title}</h1>
            <p style={rootText}>{this.props.activityObject.rootText}</p>
          </div>
        </div>
      </a>
    )
  }
}

export default ActivityLinks

ActivityLinks.propTypes={
  activityObject: PropTypes.object,
}
