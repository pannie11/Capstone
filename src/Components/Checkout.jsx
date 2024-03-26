import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout({ setCart, username, cart }) {
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

        if (!firstName || !lastName || !email || !address || !city || !state || !zipcode || !cname || !cnum || !expMonth || !expYear || !cvv) {
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
            <br />
            <div className="row">
                <div className="container">
                    <form id='checkoutForm' onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-50">
                                <h2>Customer info</h2>
                                <label className="formLabel">
                                    First name: <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    Last name: <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    Address: <input type='text' value={address} onChange={e => setAddress(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    City: <input type='text' value={city} onChange={e => setCity(e.target.value)} />
                                </label><br />

                                <div className="row">
                                    <div className="col-50">
                                        <label className="formLabel">
                                            State:  <input type='text' value={state} onChange={e => setState(e.target.value)} />
                                        </label><br />
                                    </div>

                                    <div className="col-50">
                                        <label className="formLabel">
                                            Zipcode: <input type='number' value={zipcode} onChange={e => setZipcode(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-50">
                            <div id='payment'>
                                <h2>Payment info</h2>
                                <label className="formLabel">
                                    Name on card: <input type='text' value={cname} onChange={e => setCname(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    Card number: <input type='number' value={cnum} onChange={e => setCnum(e.target.value)} />
                                </label><br />
                                <label className="formLabel">
                                    Exp Month: <input type='text' value={expMonth} onChange={e => setExpMonth(e.target.value)} />
                                </label><br />

                                <div className="row">
                                    <div className="col-50">
                                        <label className="formLabel">
                                            Exp Year: <input type='number' value={expYear} onChange={e => setExpYear(e.target.value)} />
                                        </label><br />
                                    </div>

                                    <div className="col-50">
                                        <label className="formLabel">
                                            CVV: <input type='number' value={cvv} onChange={e => setCvv(e.target.value)} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button>Place order</button>
                    </form>
                </div>
            </div>
        </>
    )
}