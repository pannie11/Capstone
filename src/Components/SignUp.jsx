import { useState } from "react";
import { api } from "../App";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

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

            if (email && username && password && firstName && lastName && city && street && zipcode && phone) {
                alert('Sign up successful! Please log in.')
                return result
            } else {
                alert('Incomplete form. Please complete all required fields to sign up.')
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <br />
            <form onSubmit={handleSubmit} className="container">
                <div className="signup-row">
                    <label className="formLabel">
                        Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        Username: <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        Password: <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
                    </label><br />
                </div>
                <div className="signup-row">
                    <label className="formLabel">
                        First name: <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        Last name: <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        City: <input type='text' value={city} onChange={e => setCity(e.target.value)} />
                    </label><br />
                </div>
                <div className="signup-row">
                    <label className="formLabel">
                        Street: <input type='text' value={street} onChange={e => setStreet(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        Zipcode: <input type='text' value={zipcode} onChange={e => setZipcode(e.target.value)} />
                    </label><br />
                    <label className="formLabel">
                        Phone: <input type='text' value={phone} onChange={e => setPhone(e.target.value)} />
                    </label><br />
                </div>
                <div id='signup'><button id='sButton'>Register</button></div>
            </form>
        </>
    )
}

