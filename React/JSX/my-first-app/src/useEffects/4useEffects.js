import React, { useState } from "react";
import { GithubUser } from "./3useEffects";

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState("");
  
    function handleAddUser() {
      setUsernames([...usernames, newUsername]);
      setNewUsername("");
    }
    console.log(usernames)
  
    return (
      <div>
        <input type="text" placeholder="type username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
        <button onClick={handleAddUser}>Add User</button>
        <ul>
          {usernames.map((username) => (
            <li key={username}>
              <GithubUser username={username} />
            </li>
          ))}
        </ul>
      </div>
    );
  }