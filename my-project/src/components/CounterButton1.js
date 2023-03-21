function CounterButton1(){
    function handleClick(){
        console.log('Events and function')
    }

    return(
        <button onClick={handleClick}>Events and function</button>
    )
}

export default CounterButton1
