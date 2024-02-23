import Home from "./Home";
import { useEffect } from "react";

export default function Logout({token, setToken}) {
    useEffect(() => {
        localStorage.removeItem('token');
    }, [])
    
    setToken(null);
    return (
        <Home/>
    )
}