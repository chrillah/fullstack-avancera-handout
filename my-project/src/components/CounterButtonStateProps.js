import {useState} from 'react'

function CounterButtonStateProps(props){
    const [value, setValue] = useState(props.initialValue)

    return(
        <button onClick={()=>{
            setValue(value+1)
        }}>{value}</button>
    )
}

export default CounterButtonStateProps
