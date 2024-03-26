import { api } from "../App"
import { useEffect } from "react"

export default function GetAllUsers({ setUsers }) {
    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(`${api}/users`, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();
                setUsers(result)

            } catch (error) {
                console.error(error)
            }
        }
        getUsers()
    }, [])

    return (
        <></>
    )
}

