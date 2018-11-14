import React from 'react'
import profileImage from "../images/profileImage.JPG"
import Collapsible from 'react-collapsible';

const rootDiv = {
  position: 'absolute',
  width: '300px',
  top: '0px',
  height: '145px',
}

const accordionButton = {
  transform: 'translate(0, -50%)',
  position: 'absolute',
  top: '50%',
  left: '15px',
  float: 'left',
  verticalAlign: 'top',
  width: '90px',
  height: '135px',
  zIndex:'19'
}

const imageStyle = {
  transform: 'translate(0, -50%)',
  position: 'absolute',
  top: '50%',
  left: '15px',
  float: 'left',
  verticalAlign: 'top',
  width: '90px',
  height: '135px',
  zIndex:'20'
}

class Header extends React.Component{

  render(){
    return(
      <div style={rootDiv}>
        <img src={profileImage} style={imageStyle}/>
        <Collapsible
          triggerWhenOpen=".                   .\n \n \n \n \n"
          trigger="                   %n %n %n %n %n %n %n"
          transitionTime='200'
          triggerStyle={accordionButton}
        >
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </div>
    )
  }
}

export default Header
