import React from 'react'
import PropTypes from 'prop-types'

const componentDiv = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
}

const link = {
  whiteSpace: 'nowrap',
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
          href:'/videogamedesign',
          text: 'Video Game Design'
        },
        {
          href:'/martialarts',
          text: 'My Martial Arts Journey'
        },
        {
          href:'/music',
          text: 'Music, My Band, and Music Instruction'
        },
        {
          href:'/',
          text: 'Home'
        }
      ]
    }
  }
  render(){
    return(
      <div style={componentDiv}>
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
