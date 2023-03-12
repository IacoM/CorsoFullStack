import { Outlet, useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser(username) {
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    function fetchGithubUsers() {
        mutate()
    }

    return {
        data,
        error,
        Loading: !data && !error,
        onFetchUsers: fetchGithubUsers,
    }

}

export function GitHubUsers() {
    const { username } = useParams()
    const { users, error, isLoading, onFetchUsers} = useGitHubUser(username)

    function handleGetUserData() {
        onFetchUsers()
    }

    return <div>
        <button onClick={handleGetUserData}>Load User data</button>
        {isLoading && !error && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {users && !error && (
            <ul>
                {users.map((user) => (
                    <li key={user.login}><Link to={`/users/${user.login}`}></Link>{user.login}</li>
                ))}
            </ul>
        )}

        <Outlet />
    </div>
}
