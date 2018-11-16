import React from 'react'

const footerStyle = {
  textAlign: 'center',
  paddingTop: '1%',
  paddingBottom: '1%',
}

const textStyle = {
  fontSize: '0.8em',
  margin: '3px',
}

export default Footer => {
  return (
    <div style={footerStyle}>
      <p style={textStyle}>Email Contact:</p>
      <a style={textStyle} href="mailto:colin.danforth@gmail.com?Subject=Subject" target="_newtab">colin.canforth@gmail.com</a>
      <p style={textStyle}>Phone Contact:</p>
      <p style={textStyle}>416-388-4294</p>
    </div>
  )
}
