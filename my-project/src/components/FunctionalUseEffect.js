import React,{useState, useEffect} from 'react'

function FunctionalUseEffect() {
    const opSystem = [
        {id: 1, op: 'GNU/Linux'},
        {id: 2, op: 'macOS'},
        {id: 3, op: 'Windows'}
    ]
    const [name, setName] = useState('John Doe'),
    [operatingSystem, setOperatingSystem] = useState('macOS')
    useEffect(()=>{
        console.log('Uppdaterar sidans titel automatisk!')
        document.title = `Hej ${name}`
    }, [name])
  return (
    <form>
        <label>
            Namn
            <input type="text" onChange={(event)=>{
                setName(event.target.value)
            }} value={name} />
        </label>
        <label>
            Operativsystem
            <select onChange={(event)=> setOperatingSystem(event.target.value)}
            value={operatingSystem}>
                {opSystem.map(value=><option key={value.id}>{value.op}</option>)}
                {/* <option>GNU/Linux</option>
                <option>maOS</option>
                <option>Windows</option> */}
            </select>
        </label>
    </form>
  )
}

export default FunctionalUseEffect
