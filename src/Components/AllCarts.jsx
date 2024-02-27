import { api } from "../App";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AllCarts() {
    const [carts, setCarts] = useState([])
    const navigate = useNavigate()
    const {cartId} = useParams()

    useEffect(() => {
        async function getCarts() {
            try {
                const response = await fetch(`${api}/carts`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();

                console.log(result)
                console.log(result.products)
                setCarts(result)

            } catch (error) {
                console.error(error)
            }
        }
        getCarts()
    }, [])

    return (
        <>
        {carts.map((cart) => {
            return (
                <div key={cart.id}>
                    <button onClick={() => navigate(`/carts/${cartId}`)}>User: {cart.userId}</button>
                   {cart.products.map((product) => {
                    return (
                        <div key={product.productId}>
                        <p>Product id: {product.productId} &ensp;|&ensp; Product quantity: {product.quantity}</p>
                        </div>
                    )
                   })}
                </div>
            )
        })}
        </>
    )
}