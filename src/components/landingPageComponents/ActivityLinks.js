import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
}

const imgStyle = {
  position: 'relative',
  left: '20%',
  marginTop: '1%',
  marginBottom: '1%',
  maxWidth: '12%',
  width: 'auto',
  height: 'auto',
}

const textDiv = {
  position: 'relative',
  left: '22%',
}

const aStyle = {
  position: 'relative',
  textDecoration: 'none'
}

const h1style = {
  position: 'relative',
  textAlign: 'left',
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
      <div style={rootDiv}>
        <img style={imgStyle} src={this.props.activityObject.img}/>
        <div style={textDiv}>
          <a
            href='#..'
            data-id={this.props.activityObject.pageName}
            onClick={this.navigatePages}
            style={aStyle}
          >
            <h1 style={h1style}>{this.props.activityObject.title}</h1>
          </a>
          <p style={rootText}>{this.props.activityObject.rootText}</p>
        </div>
      </div>
    )
  }
}

export default ActivityLinks

ActivityLinks.propTypes={
  activityObject: PropTypes.object,
}
