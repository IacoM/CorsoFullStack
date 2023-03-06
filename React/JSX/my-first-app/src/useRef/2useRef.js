import React, { useRef, useEffect } from "react";

export function UncontrolledLogin() {
    
    const inputRef = useRef();
    
    function handleFormSubmit (e) {
        e.preventDefault()
        

        const model = e.target.elements.model.value
        const color = e.target.elements.color.value
        const year = e.target.elements.year.value

        console.log({
            model,
            color,
            year
        })
    }

    useEffect(() => {
        inputRef.current.focus()
    })
    
    return <div>
        <h3>Uncontrolled Form</h3>
            
        <form onSubmit={handleFormSubmit}  >
            <input name="model" placeholder="model" ref={inputRef}/>
            <input name="color" type="password" placeholder="color" />
            <input name="year"  placeholder="year" />

            <button type="submit" >Search</button>
            <button type="reset" >Reset</button>
        </form>
    </div>
}