import { useState } from 'react';

export function useLogin() {
    const[data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })
    function handleInputChange(e) {
        const {name, type, value, checked} = e.target   
        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    return {
        data: data,
        onName: handleInputChange,
    }
}

export function Login() {
    const {data, onName} = useLogin()

    return (
        <div>
            <input name="username" placeholder="username" value={data.username} onChange={onName}></input>
            <input name="password" type="password" placeholder="password" value={data.password} onChange={onName}></input>
            <input name="remember" type="checkbox" checked={data.remember} onChange={onName}></input>
            {data.username && data.password
                 ? <button onClick={console.log(data)}>Login</button>
                 : <button disabled>Login</button>
            }
        </div>
    )
}