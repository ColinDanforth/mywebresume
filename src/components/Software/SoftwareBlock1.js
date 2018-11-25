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

const block1EntryStyle ={
  rootDiv: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    padding: '1.5%',
    marginBottom: '3%',
    backgroundColor: 'rgba(20, 20, 20, 0.95)',
  },
  h2Style: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: '#FFFFFF',
    fontSize: '2em',
  },
  pStyle:{
    color: '#CCCCCC',
    fontSize: '1.3em',
    textAlign: 'justify',
    textJustify: 'auto',
  },
}

class SoftwareBlock1 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <h1 style={headerStyle}>Full Stack Developer and Dev Ops Career Progression</h1>
        {softwareEntryObjects.map((entry, i) => <SoftwareEntry key={i} entryObject={entry} objectStyles={block1EntryStyle}/>)}
      </div>
    )
  }
}

export default SoftwareBlock1
