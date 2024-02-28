import { api } from "../App";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

export default function AllCarts() {
    const [carts, setCarts] = useState([])
    const navigate = useNavigate()
    const [limit, setLimit] = useState(null)
    const [sortValue, setSortValue] = useState('')

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

    async function limitResults(e) {
        e.preventDefault()

        try {
            const response = await fetch(`${api}/carts?limit=${limit}`, {
                headers: { 'Content-Type': 'application/json' }
            });
            const result = await response.json();

            console.log(result)
            setCarts(result)

            } catch (error) {
                console.error(error)
            }
        }

    async function sort(e) {
        e.preventDefault()

        try {
            const response = await fetch(`${api}/carts?sort=${sortValue}`)
            const result = await response.json()

            setCarts(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={limitResults}>
                <label>Limit results: </label>
                <input type="number" onChange={(e) => setLimit(e.target.value)} value={limit} />
                <button>Submit</button>
            </form>
            <form onSubmit={sort}>
                <label>Sort by: </label>
                <select onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <button>Sort</button>
            </form>
            {carts.map((cart) => {
                return (
                    <div key={cart.id}>
                        <button onClick={() => navigate(`/carts/${cart.id}`)}>User Id: {cart.userId}  &ensp;|&ensp; Cart Id: {cart.id}</button>
                        <p>Date: {cart.date}</p>
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