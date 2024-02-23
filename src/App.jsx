import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import GetAllUsers from './Components/GetAllUsers'
import Logout from './Components/Logout'

export const api = 'https://fakestoreapi.com'

function App() {
  const [token, setToken] = useState(null)
  const [users, setUsers] = useState([])

    useEffect(() => {
        const boo = JSON.parse(localStorage.getItem('token'))
        console.log(typeof null)
        if(boo) {
          setToken(boo)
        }
    }, [])
    
    useEffect(() => {
      localStorage.setItem('token', JSON.stringify(token))
    }, [token])

  // local storage was reading token as a number, but js still read it as a string. that's why i was getting bugs
  // maybe use local storage, but it would only work on one browser 
  // to work on all browsers: make a backend component and store it in the database 
  return (
    <>
     <Navbar token={token}/>
     <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login token={token} setToken={setToken} />} />
      <Route path={'/logout'} element={<Logout token={token} setToken={setToken} />} />
      <Route path={'/signup'} element={<SignUp setToken={setToken} users={users} setUsers={setUsers}/>} />
      <Route path={'/users'} element={<GetAllUsers users={users} setUsers={setUsers}/>} />
     </Routes>
    </>
  )
}

export default App
