import { useNavigate } from "react-router-dom"

export default function Cart({cart, setCart, username, addItem}) {

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
            if(cartItem.id == item.id && cartItem.quantity > 0) {
                cartItem.quantity--;
            } else if(cartItem.id == item.id && cartItem.quantity == 0) {
                removeItem(cartItem)
            }
        })

        setCart(cartCopy)

        localStorage.setItem(username, JSON.stringify(cartCopy))
    }

    return (
        <>
            {cart.map((product) => {
                return (
                <div className='product' key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} />
                        <h4>${product.price}</h4>
                        <p>Category: {product.category}</p>
                        <p>Quantity: {product.quantity} </p>
                        <button onClick={() => {addItem(product)}}>+</button>
                        <button onClick={() => {
                            if(product.quantity > 0) {
                                decrementItem(product)
                            } else if(product.quantity == 0) {
                                removeItem(product)
                            }
                        }}>-</button>
                        <button onClick={() => {removeItem(product)}}>Delete item</button>
                </div>  
                )
            })}
            <div>Total: ${cart.reduce((accumulation, currentItem) => accumulation + (currentItem.price * currentItem.quantity), 0)}</div>
            <button onClick={() => navigate('/checkout')}>Check out</button>
        </>
    )
}
