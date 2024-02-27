import { useState, useEffect } from "react"
import { api } from "../App"
import { useNavigate } from "react-router-dom"

export default function AllProducts() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch(`${api}/products`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();

                console.log(result)
               setProducts(result)

            } catch (error) {
                console.error(error)
            }
        }
        getProducts()
    }, [])

    return (
        <>
        
        {products.map((product) => {
            return (
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} />
            <h4>${product.price}</h4>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating.rate} Count: {product.rating.count}</p>
            <button onClick={() => navigate(`/products/${product.id}`)}>Select product</button>
            </div>  
            )
        })}
            </>
    )
}