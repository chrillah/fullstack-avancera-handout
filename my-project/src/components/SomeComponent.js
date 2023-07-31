import React, {useContext} from 'react'
import SomeContext from './SomeContext'

function SomeComponent() {
    const {someValue, setSomeValue} = useContext(SomeContext)
  return (
    <div>
        <h1>Detta är från SomeComponent, consumer</h1>
        <h3>{someValue}</h3>
        <input onClick={()=>{
            setSomeValue(someValue + 1)
        }} type='button' value={someValue} />
    </div>
  )
}

export default SomeComponent
