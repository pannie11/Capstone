
import { useNavigate } from "react-router-dom"

export default function CartEndPoints() {
    const nav = useNavigate()
    return (
        <>
        <button onClick={() => nav('/carts')}>All carts</button>
        </>
    )
}