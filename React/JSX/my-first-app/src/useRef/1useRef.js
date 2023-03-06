import { useState, useEffect, useRef } from "react";

export function Login() {
    
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleInputChange(e) {
        const {name, type, value, checked} = e.target   
        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    
    return (
        <div>
            <input name="username" placeholder="username" value={data.username} onChange={handleInputChange} ref={inputRef}></input>
            <input name="password" type="password" placeholder="password" value={data.password} onChange={handleInputChange}></input>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}></input>
            {data.username && data.password
                 ? <button onClick={console.log(data)}>Login</button>
                 : <button disabled>Login</button>
            }
        </div>
    )
}