import React, { useState, useEffect } from "react";

export function Counter({initValue = 0}) {
    const [counter, setCount] = useState(initValue)

    useEffect(() => {
        setInterval(() => {setCount(c => c + 1)}, 1000)
        return () => {
            setCount(initValue)
        }
    },[])
    
    useEffect(() => {
        console.log(counter)
    }, [counter])

    return <h1>Count: {counter}</h1>
}