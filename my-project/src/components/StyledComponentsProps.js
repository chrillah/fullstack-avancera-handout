import React from 'react'
import styled from 'styled-components'

function StyledComponentsProps(props) {
  return (
    <div className={props.className}><p>Hell</p></div>
  )
}

export default styled(StyledComponentsProps)`
color : red;
 p{
    text-decoration: underline;
 }
`
