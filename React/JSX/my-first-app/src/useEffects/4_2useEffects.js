import React, { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { GithubUser } from "./3_2useEffects";

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState("");

    const navigate = useNavigate()

    function handleAddUser() {
      setUsernames([...usernames, newUsername]);
      setNewUsername("");
    }
    function handleShowUsers() {
        navigate("/users")
    }
    console.log(usernames)

    return (
      <div>
        <input type="text" placeholder="type username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
        <button onClick={handleAddUser}>Add User</button>
        <ul>
          {usernames.map((username) => (
            <li key={username}>
              <div>
              <Link to=":username">Show Me</Link>
              {/* <GithubUser username={username} /> */}
                {/* <button onClick={handleShowUsers}>Show Me</button> */}
              </div>
            </li>
          ))}
        </ul>

        <Outlet />
      </div>
    );
  }
