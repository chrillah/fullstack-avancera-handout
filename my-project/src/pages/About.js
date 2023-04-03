import React from 'react'
import {useParams} from 'react-router-dom'

function About() {
    const {userName} = useParams()
  return (
    <div>
        <h1>About Page</h1>
        <p>Detta kommer ifrån en komponent från mappen pages</p>
        <p>Detta kommer från adressparameter {userName}</p>
    </div>
  )
}

export default About
