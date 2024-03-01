import { useState, useEffect } from "react"
import { api } from "../App"
import { useNavigate } from "react-router-dom"

export default function AllProducts() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [sortValue, setSortValue] = useState('')

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

    async function sort(e) {
        e.preventDefault()

        try {
            const response = await fetch(`${api}/products?sort=${sortValue}`)
            const result = await response.json()

            if(sortValue === 'A-Z') {
                result.sort(function (a, b) {
                    // a goes before b
                    if(a.title < b.title) {
                        return -1
                        
                        // b goes before a 
                    } else if(a.title > b.title) {
                        return 1

                        // a and b stay in the same order
                    } else {
                        return 0
                    }
                })
            } else if(sortValue === 'Z-A') {
                result.sort(function (a, b) {
                    if(a.title < b.title) {
                        return -1
                    } else if(a.title > b.title) {
                        return 1
                    } else {
                        return 0
                    }
                }).reverse()
            }

            if(sortValue === 'lowest-highest') {
                    
                // syntax for sorting numbers in asc order
               result.sort((a, b) => a.price - b.price)
            } else if(sortValue === 'highest-lowest') {
                result.sort((a, b) => a.price - b.price).reverse()
            }

            setProducts(result)

        } catch (error) {
            console.error(error)
        }
    }

    // filter by category

    return (
        <>
         <form onSubmit={sort}>
            <label>Sort by: </label>
                <select onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
                    <option value="asc">Ascending number</option>
                    <option value="desc">Descending number</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="lowest-highest">Price: lowest-highest</option>
                    <option value="highest-lowest">Price: highest-lowest</option>
                </select>
                <button>Sort</button>
        </form>
        {products.map((product) => {
            return (
            <div key={product.id}>
            <h3>{product.id}. {product.title}</h3>
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