import React from 'react'

function StyleInlineStyle() {
    const divStyle = {
        backgroundColor : 'red',
        fontSize : 40
    },
    pStyle = {
        textDecoration : 'none'
    }
  return (
    <div style={divStyle}><p style={pStyle}>Hell</p></div>
  )
}

export default StyleInlineStyle
