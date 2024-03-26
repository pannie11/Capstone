import { api } from "../App"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function SingleProduct({ addItem, token }) {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getSingleProduct() {
            try {
                const response = await fetch(`${api}/products/${productId}`)
                const result = await response.json();

                setProduct(result)

            } catch (error) {
                console.error(error)
            }
        }
        getSingleProduct();
    }, [productId])

    return (
        <>
            <h1>{product.title}</h1>
            <br />
            <img id='singleProductImg' src={product.image} />
            <br />
            <h2>${product.price}</h2>
            <br />
            <p className="singleProductp">Category: {product.category}</p>
            <br />
            <p className="singleProductp">Description: {product.description}</p>
            <br />
            {token ? <button id='singleProductButton' onClick={() => {
                addItem(product)
                alert('Added to cart!');
            }}>Add to cart
            </button> : <></>}
        </>
    )
}

