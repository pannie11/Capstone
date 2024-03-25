import { useState, useEffect } from "react"
import { api } from "../App"
import { useNavigate } from "react-router-dom"

export default function AllProducts({addItem, token}) {
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

                    // compares the whole string values, but does it one letter at a time. if the letters are the same value it goes to compare the next letters
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
                // for numbers you can just use this as the default. shortened version of above
                // this function just does the above, but the above needs to be hardcoded because it's a string
                // with whatever value is returned, the sort method knows what to do 
               result.sort((a, b) => a.price - b.price)
            } else if(sortValue === 'highest-lowest') {
                result.sort((a, b) => a.price - b.price).reverse()
            }

            setProducts(result)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1 className='header'>Products</h1>
            <form className='form' onSubmit={sort}>
                <label>Sort by: </label>
                    <select onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
                        <option value='sort'></option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="lowest-highest">Price: lowest-highest</option>
                        <option value="highest-lowest">Price: highest-lowest</option>
                    </select>
                    <button>Sort</button>
            </form>
            <div className='productsDisplay'>
            {products.map((product) => {
                return (
                <div className='product' key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} />
                        <h4>${product.price}</h4>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate} Count: {product.rating.count}</p>
                        <button onClick={() => navigate(`/products/${product.id}`)}>Select product</button>
                        {token ? <button onClick={() => {
                            addItem(product);
                            alert('Added to cart!');
                            }}>Add to cart
                        </button> : <></>}
                </div>  
                )
            })}
            </div>
        </>
    )
}