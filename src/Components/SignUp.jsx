import { useState } from "react";
import { api } from "../App";
// import { useNavigate } from "react-router-dom";

export default function SignUp({ setToken }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    // const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${api}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: firstName,
                        lastname: lastName
                    },
                    address: {
                        city: city,
                        street: street,
                        zipcode: zipcode,
                    },
                    phone: phone
                 })
            });

            const result = await response.json();
            console.log(result)

            // setToken(result.token)

            // if (password.length === 0) {
            //     alert('Password cannot be empty')
            // } else if (email && password) {
            //     alert(result.message)
            // } else {
            //     navigate('/registered')
            // }

            // setToken(null)
            if(result) alert('Sign up successful!')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </label><br />
                <label>
                    Username: <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                </label><br />
                <label>
                    Password: <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label><br /> 
                <label>
                    First name: <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </label><br />
                <label>
                    Last name: <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                </label><br />
                <label>
                    City: <input type='text' value={city} onChange={e => setCity(e.target.value)} />
                </label><br />
                <label>
                    Street: <input type='text' value={street} onChange={e => setStreet(e.target.value)} />
                </label><br />
                <label>
                    Zipcode: <input type='number' value={zipcode} onChange={e => setZipcode(e.target.value)} />
                </label><br />
                <label>
                    Phone: <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
                </label><br />
                <button>submit</button>
            </form>
        </>
    )
}

// test user:
// email: bb@bb.com
// username: b
// password: c
// first name: blanton
// last name: xlinton
// city: citi 
// street: citi street
// number: 3
// zipcode: 33333
// lat: 25.34543
// long: -9.49925
// phone: 333-333-3333