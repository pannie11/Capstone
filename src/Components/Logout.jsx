import Home from "./Home";
import { useEffect } from "react";

export default function Logout({setToken}) {
    useEffect(() => {
        localStorage.removeItem('token');
        setToken(null);
    }, [])
   
    return (
        <Home/>
    )
}