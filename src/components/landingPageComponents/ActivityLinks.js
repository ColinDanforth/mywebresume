import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  alignItems: 'center',
  flexDirection:'row',
  justifyContent: 'space-between',
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '2%',
  marginBottom: '2%',
  width: '60%',
  backgroundColor: '#384249',
}

const imgStyle = {
  marginTop: '1%',
  marginBottom: '1%',
  marginLeft: '1%',
  maxWidth: '200px',
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
  textAlign: 'center',
  color: '#CFCFCF',
  width: '98%',
  height:'auto',
}

const rootText = {
  position: 'relative',
  textAlign: 'justify',
  textJustify: 'auto',
  color: '#CFCFCF',
  width: '96%',
}

class ActivityLinks extends React.Component{
  render(){
    return(
      <a
        href={this.props.activityObject.link}
        style={aStyle}
      >
        <div style={rootDiv}>
          <div>
            <img style={imgStyle} src={this.props.activityObject.img} alt={this.props.activityObject.pageName}/>
          </div>
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
