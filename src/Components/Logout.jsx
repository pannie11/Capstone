import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({setToken}) {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('token');
        setToken(null);
        localStorage.removeItem('currentuser')
        alert('You have been logged out.')
        navigate('/')
    }, [])
}