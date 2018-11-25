import React from 'react'
import softwareEntryObjects from './DevelopmentHistory'
import SoftwareEntry from "./SoftwareEntry"

const block1Style = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80%',
  marginLeft: '10%',
}

const headerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#FFFFFF',
  fontSize: '2em',
}

class SoftwareBlock1 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <h1 style={headerStyle}>Full Stack Developer and Dev Ops Career Progression</h1>
        {softwareEntryObjects.map((entry, i) => <SoftwareEntry key={i} entryObject={entry}/>)}
      </div>
    )
  }
}

export default SoftwareBlock1
