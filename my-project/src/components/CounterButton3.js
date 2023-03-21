function CounterButton3(){
    function handleClick(event){
        console.log(event.clientX)
        console.log(event.clientY)
    }

    return(
        <button onClick={handleClick}>Events and Parameters</button>
    )
}

export default CounterButton3
