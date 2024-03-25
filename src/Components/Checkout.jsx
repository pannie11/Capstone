import { useNavigate } from "react-router-dom"

export default function Checkout({setCart, username, cart}) {
    const navigate = useNavigate()
    
    return (
        <>
            <h1>Checkout</h1>
            <form id='checkoutForm'>
                <div id='customerInfo'>
                    <h2>Customer info</h2>
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' name='name'/>
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' name='name'/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email'/>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address'/>
                    <label htmlFor='city'>City</label>
                    <input type='text' name='city'/>
                    <label htmlFor='state'>State</label>
                    <input type='text' name='state'/>
                    <label htmlFor='zipcode'>Zipcode</label>
                    <input type='number' name='zipcode'/>
                </div>
                <div id='payment'>
                    <h2>Payment</h2>
                    <label htmlFor='cname'>Name on card</label>
                    <input type='text' name='cname'/>
                    <label htmlFor='cnum'>Card number</label>
                    <input type='number' name='cnum'/>
                    <label htmlFor='expMonth'>Exp Month</label>
                    <input type='text' name='expMonth'/>
                    <label htmlFor='expYear'>Exp Year</label>
                    <input type='number' name='expYear'/>
                    <label htmlFor='cvv'>CVV</label>
                    <input type='number' name='cvv'/>
                </div>
                <button onClick={() => {
                    navigate('/orderplaced');
                    setCart([]);
                    localStorage.setItem(username, JSON.stringify(cart));
                }
                    }>Place order</button>
            </form>
        </>
    )
}