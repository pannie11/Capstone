import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../App";

export default function ProductsBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function allCategories() {
            try {
                const response = await fetch(`${api}/products/categories`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();

                console.log(result)
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
                 <Link className='link' key={category} to={`/products/category/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                )
            })}
        </div>

    )
}