import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../App";

export default function ProductsBar({setSortValue}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function allCategories() {
            try {
                const response = await fetch(`${api}/products/categories`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();

                setCategories(result)

            } catch (error) {
                console.error(error)
            }
        }
        allCategories()
    }, [])

    return (
        <div id='productsbar'>
            <Link to='/products'>All products</Link>
            {categories.map((category) => {
                return (
                 <Link className='link' key={category} to={`/products/category/${category}`} onClick={() => setSortValue('')}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                )
            })}
        </div>

    )
}