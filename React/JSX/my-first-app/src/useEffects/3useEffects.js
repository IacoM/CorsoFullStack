import React, {useEffect, useState} from "react";

export function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    async function fetchGitHubUser(username) {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
    
        } catch(error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchGitHubUser(username)
    }, [username])
    
    
    return <div>
        {loading && <h2>Loading...</h2>}
        {data && <h2>{data.name}</h2>}
        {data && <h3>{data.login}</h3>}
    </div>
}