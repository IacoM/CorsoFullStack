import { useEffect, useState } from "react";

export function ClickCounter({ initValue = 0 }) {
    const [counter, setCounter] = useState(initValue)

    useEffect(() => {
        console.log(`The Count is: ${counter}`)
    })
    
    function handleIncrement() {
        setCounter(c => c + 1)
    }
    
    function handleReset() {
        setCounter(initValue)
    }
    
    return (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export function onCounterChange(counter) {

}