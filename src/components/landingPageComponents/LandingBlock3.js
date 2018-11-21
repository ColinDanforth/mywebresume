import React from 'react'
import ActivityLinks from "./ActivityLinks"
import activitiesList from './ListOfActivities'

const flexRootDiv = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const block3Style ={
  backgroundColor: '#222D35',
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  zIndex: '1',
}

const headerStyleMargin = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#CFCFCF',
  fontSize: '2em',
  marginTop: '2%',
  marginBottom: '2%',
}

const pStyle = {
  color: '#CFCFCF',
  fontSize: '1em',
  textAlign: 'left',
  marginLeft: '20%',
  marginRight: '20%',
  marginTop: '2%',
  marginBottom: '2%',
}

class LandingBlock3 extends React.Component{
  constructor(){
    super()
    this.state = {
      internalWrappingDivStyle:{
        height: '100%'
      }
    }

    this.onResize = this.onResize.bind(this)
  }

  onResize(width, height){
    this.setState({
      internalWrappingDivStyle: {
        height: (height + 10) + 'px'
      }
    })
  }

  render(){
    return(
      <div  style={block3Style} className="block3">
        <div style={flexRootDiv}>
          <h1 style={headerStyleMargin}>Fungibility in Work and Life: T Shaped People</h1>
          <p style={pStyle}>
            The above linked article by Florian Popescu resonates with me. I am not so worried about how people view me for
            dipping my hat into so many different skills, but I do see myself as someone who has a particularly active mind.
            I find that focusing on one thing leads to boredom and complacency. As such I branch out into many different
            skills and hobbies. This keeps me more focused and keeps all of my hobbies, or skills fresh and interesting.
            This encourages me to continue to grow and evolve inside those skills.
          </p>
          <p style={pStyle}>
            I thought I'd focus this section on the most developed skills. Below you'll find a list of interests
            that I've either earned some form of recognition for, or earn my living with. Follow the links to learn more
            about my experience in each.
          </p>
          <div>
            {activitiesList.map((activity, i) =>
              <ActivityLinks
                key={i}
                activityObject={activity}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LandingBlock3
