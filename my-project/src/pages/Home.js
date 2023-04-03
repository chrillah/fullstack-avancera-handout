import React,{useState} from 'react'
import SomeComponent from '../components/SomeComponent'
import SomeContext from '../components/SomeContext'

function Home() {
    const [someValue, setSomeValue] = useState(1)
  return (
    <div>
        <h1>Home Page</h1>
        <p>Detta är en komponent från mappen pages.</p>
        <SomeContext.Provider value={{someValue, setSomeValue}}>
            <SomeComponent />
        </SomeContext.Provider>
    </div>
  )
}

export default Home
