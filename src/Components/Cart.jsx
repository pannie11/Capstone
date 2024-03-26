import { useNavigate } from "react-router-dom"

export default function Cart({ cart, setCart, username, addItem }) {
    const navigate = useNavigate()

    const removeItem = (item) => {
        const cartCopy = [...cart]

        const filteredCart = cartCopy.filter(cartItem => cartItem.id !== item.id);

        setCart(filteredCart);

        localStorage.setItem(username, JSON.stringify(filteredCart))

        item.quantity = 0
    }

    const decrementItem = (item) => {
        const cartCopy = [...cart]

        cartCopy.forEach(cartItem => {
            if (cartItem.id == item.id && cartItem.quantity > 0) {
                cartItem.quantity--;
            } else if (cartItem.id == item.id && cartItem.quantity == 0) {
                removeItem(cartItem)
            }
        })

        setCart(cartCopy)

        localStorage.setItem(username, JSON.stringify(cartCopy))
    }

    const total = cart.reduce((accumulation, currentItem) => accumulation + (currentItem.price * currentItem.quantity), 0);

    return (
        <>
            <h1>Your Cart</h1>
            <span id='total'>Total: ${(Math.round(total * 100) / 100).toFixed(2)}</span>
            <button id='checkoutButton' onClick={() => navigate('/checkout')}>Check out</button>
            <br /> <br />
            <div id='cart'>
                {cart.map((product) => {
                    return (
                        <div id='cart-product' key={product.id}>
                            <h3>{product.title}</h3>
                            <img src={product.image} />
                            <h4>${product.price}</h4>
                            <p>Category: {product.category}</p>
                            <p>Quantity: {product.quantity} </p>
                            <button className="quantityButton" onClick={() => { addItem(product) }}>+</button>
                            <button className="quantityButton" onClick={() => {
                                if (product.quantity > 1) {
                                    decrementItem(product)
                                } else if (product.quantity === 1) {
                                    removeItem(product)
                                }
                            }}>-</button>
                            <br /> <br />
                            <div><button id='deleteItemButton' onClick={() => { removeItem(product) }}>Delete item</button></div>
                        </div>
                    )
                })}
            </div>
            <br />
        </>
    )
}
