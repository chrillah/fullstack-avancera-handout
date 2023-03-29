import React, {useEffect} from 'react'

function TestUseEffect() {
    useEffect(()=>{
        console.log('useEffect är igång')
    })
  return (
    <div><h1>TEST</h1></div>
  )
}

export default TestUseEffect
