import React from 'react'
import PropTypes from 'prop-types'

const rootDiv = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const link = {
  color: '#CFCFCF',
  position: 'relative',
  fontSize: '2em',
  margin: '5px',
}

class Menu extends React.Component{
  constructor(){
    super()
    this.state={
      items: [
        {
          href:'/software',
          text: 'Software Development and Dev Ops Experience'
        },
        {
          href:'/resume',
          text: 'Resume'
        },
        {
          href:'/resume',
          text: 'Resume'
        },
        {
          href:'/resume',
          text: 'Resume'
        }
      ]
    }
  }
  render(){
    return(
      <div style={rootDiv}>
        {this.state.items.map((item, i) => {return(
            <a
              key={i}
              href={item.href}
              style={link}
            >
              {item.text}
          </a>
          )}
        )}
      </div>
    )
  }
}

export default Menu

Menu.propTypes = {
  activeItem: PropTypes.string,
}
