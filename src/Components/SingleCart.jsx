import { api } from "../App"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function SingleCart() {
    const { cartId } = useParams();
    const [cart, setCart] = useState({})
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getSingleCart() {
            try {
                const response = await fetch(`${api}/carts/${cartId}`)
                const result = await response.json();

                console.log(result)
                setCart(result)
                setProducts(result.products)
             
            } catch (error) {
                console.error(error)
            }
        }
        getSingleCart();
    }, [cartId])

    return (
        <>
        <p>User Id: {cart.userId}  &ensp;|&ensp; Cart Id: {cart.id}</p>
        <p>{cart.date}</p>
        {products.map((product) => {
            return (
                <p key={product.productId}>Product Id: {product.productId} &ensp;|&ensp; Quantity: {product.quantity}</p>
            )
        })}
        </>
    )
}