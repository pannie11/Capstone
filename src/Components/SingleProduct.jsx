import { api } from "../App"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [rating, setRating] = useState({})

    useEffect(() => {
        async function getSingleProduct() {
            try {
                const response = await fetch(`${api}/products/${productId}`)
                const result = await response.json();

                console.log(result)
                setProduct(result)
                setRating(result.rating)
            } catch (error) {
                console.error(error)
            }
        }
        getSingleProduct();
    }, [productId])

    return (
        <>
        <h1>{product.title}</h1>
        <img src={product.image} />
        <h4>${product.price}</h4>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {rating.rate} Count: {rating.count}</p>
        </>
    )
}

