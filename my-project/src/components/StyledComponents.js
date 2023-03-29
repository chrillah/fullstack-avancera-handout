import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-color: indigo;
    font-size: ${props => props.fontSize}px;
`

const Paragraph = styled.p`
    text-decoration: underline;
`

function StyledComponents() {
  return (
    <Div fontSize={20}>
        <Paragraph>Hell</Paragraph>
    </Div>
  )
}

export default StyledComponents
