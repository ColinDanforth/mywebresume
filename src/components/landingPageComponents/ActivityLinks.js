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
  maxWidth: '14%',
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
}

const rootText = {
  position: 'relative',
  textAlign: 'left',
  color: '#CFCFCF',
}

class ActivityLinks extends React.Component{
  constructor(){
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate(event){
    const newPage={
      name: 'activeItem',
      value: event.currentTarget.dataset.id
    }
    this.props.updateRootState(newPage)
  }

  render(){
    return(
      <a
        href={this.props.activityObject.link}
        data-id={this.props.activityObject.pageName}
        onClick={this.navigatePages}
        style={aStyle}
      >
        <div style={rootDiv}>
          <img style={imgStyle} src={this.props.activityObject.img}/>
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
