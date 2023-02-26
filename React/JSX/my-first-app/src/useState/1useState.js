import { useState } from "react";

export function ClickCounter({ initValue = 0 }) {
    const [counter, setCounter] = useState(initValue)

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