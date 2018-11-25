import React from 'react'
import futureCareerEntryOBjects from './FutureCareerGoals'
import SoftwareEntry from "./SoftwareEntry"

const block1Style = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80%',
  marginLeft: '10%',
}

const block2EntryStyle ={
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

class SoftwareBlock2 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        {futureCareerEntryOBjects.map((entry, i) => <SoftwareEntry key={i} entryObject={entry} objectStyles={block2EntryStyle}/>)}
      </div>
    )
  }
}

export default SoftwareBlock2
