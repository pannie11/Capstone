import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout({setCart, username, cart}) {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [cname, setCname] = useState('')
    const [cnum, setCnum] = useState('')
    const [expMonth, setExpMonth] = useState('')
    const [expYear, setExpYear] = useState('')
    const [cvv, setCvv] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();

        if(!firstName || !lastName || !email || !address || !city || !state || !zipcode || !cname || !cnum || !expMonth || !expYear || !cvv) {
            alert('Please fill in all required fields.')
        } else {
            navigate('/orderplaced');
            setCart([]);
            localStorage.setItem(username, JSON.stringify(cart));
        }
    }
    
    return (
        <>
            <h1>Checkout</h1>
            <form id='checkoutForm' onSubmit={handleSubmit}>
                <div id='customerInfo'>
                    <h2>Customer info</h2>
                    <label htmlFor='firstName'>
                        First name: <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </label><br />
                    <label htmlFor='lastName'>
                        Last name: <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </label><br />
                    <label htmlFor='email'>
                        Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </label><br />
                    <label htmlFor='address'>
                        Address: <input type='text' value={address} onChange={e => setAddress(e.target.value)}/>
                    </label><br />
                    <label htmlFor='city'>
                        City: <input type='text' value={city} onChange={e => setCity(e.target.value)}/>
                    </label><br />
                    <label htmlFor='state'>
                        State:  <input type='text' value={state} onChange={e => setState(e.target.value)}/>
                    </label><br/>
                    <label htmlFor='zipcode'>
                        Zipcode: <input type='number' value={zipcode} onChange={e => setZipcode(e.target.value)}/>
                    </label>
                </div>
                <div id='payment'>
                    <h2>Payment</h2>
                    <label htmlFor='cname'>
                        Name on card: <input type='text'value={cname} onChange={e => setCname(e.target.value)}/>
                    </label><br/>
                    <label htmlFor='cnum'>
                        Card number: <input type='number' value={cnum} onChange={e => setCnum(e.target.value)}/>
                    </label><br/>
                    <label htmlFor='expMonth'>
                        Exp Month: <input type='text' value={expMonth} onChange={e => setExpMonth(e.target.value)}/>
                    </label><br/>
                    <label htmlFor='expYear'>
                        Exp Year: <input type='number' value={expYear} onChange={e => setExpYear(e.target.value)}/>
                    </label><br/>
                    <label htmlFor='cvv'>
                        CVV: <input type='number' value={cvv} onChange={e => setCvv(e.target.value)}/>
                    </label>
                </div>
                <button>Place order</button>
            </form>
        </>
    )
}