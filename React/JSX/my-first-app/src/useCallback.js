import { useEffect, useState, useCallback } from "react";

export function useCounter( initValue = 0 ) {
    const [counter, setCounter] = useState(initValue)

    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }, [])

    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCounter((c) => c - 1)
    }, [])

    const handleCounterReset = useCallback(function handleCounterReset() {
        setCounter(initValue)
    }, [initValue])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}

export function Counter({ initValue = 61 }) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initValue)

    return (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}