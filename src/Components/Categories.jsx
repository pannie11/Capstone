import { useEffect, useState } from "react";
import { api } from "../App";
import ProductsBar from "./ProductsBar";
import { Link } from "react-router-dom";

export default function Categories() {
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
        <>
           
        </>
    )
}
