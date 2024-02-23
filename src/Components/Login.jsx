import { useState, useEffect } from 'react'
import { api } from '../App';
import { useNavigate } from "react-router-dom";

// set the token during login 
// not a bad idea to save token state in top level
// do an on page load thing, check to see if the token is there 
// 
export default function Login({ setToken, token }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${api}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password})
            });

            const result = await response.json();
            console.log(result)
            console.log(result.token)
            setToken(result.token)

        } catch (error) {
            console.error(error)
        }
    }
    console.log(token)

    // get item from local storage 
    // clear local storage when you log out 
    return (
        <>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br /> <br />
                <button>submit</button>
            </form>
        </>
    )
}

// test user
// username: jimmie_k
// password: klein*#%*