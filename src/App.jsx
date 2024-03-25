import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import GetAllUsers from './Components/GetAllUsers'
import Logout from './Components/Logout'
import SingleProduct from './Components/SingleProduct'
import AllProducts from './Components/AllProducts'
import ProductsBar from './Components/ProductsBar'
import Category from './Components/Category'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import CheckedOut from './Components/CheckedOut'

export const api = 'https://fakestoreapi.com'

function App() {
  const localUser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : ''
  const [username, setUsername] = useState(localUser)
  const [token, setToken] = useState(null)
  const [users, setUsers] = useState([])

  // initialization - happens on page load
  // looking for a cart in local storage, if not, set it to an empty array
  const localCart = localStorage.getItem(username) ? JSON.parse(localStorage.getItem(username)) : []
  const [cart, setCart] = useState(localCart)

  const [sortValue, setSortValue] = useState('')

  cart.forEach(item => ({
    ...item, 
    quantity: 0,
  }));

  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    const cartCopy = [...cart];
    
    //look for item in cart array
    const existingItem = cartCopy.find(cartItem => cartItem.id == item.id);
    
    //if item already exists
    if (existingItem) {
        existingItem.quantity++ //update item

    } else { //if item doesn't exist, push it to the array
      item.quantity = 1;
      cartCopy.push(item)
    }

    setCart(cartCopy)

    // set the new cart in local storage
    localStorage.setItem(username, JSON.stringify(cartCopy))
  }

  useEffect(() => {
    const boo = JSON.parse(localStorage.getItem('token'))
      if(boo) {
          setToken(boo)
        }
    }, [])
    
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  }, [token]) 

  useEffect(() => {
    if(username !== '') localStorage.setItem(username, JSON.stringify(cart));
  }, [cart])

  return (
    <>
     <Navbar token={token}/>
     <ProductsBar setSortValue={setSortValue} />
     <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login setToken={setToken} username={username} setUsername={setUsername} setCart={setCart} users={users}/>} />
      <Route path={'/logout'} element={<Logout setToken={setToken} />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/users'} element={<GetAllUsers setUsers={setUsers}/>} />
      <Route path={'/products/:productId'} element={<SingleProduct token={token} addItem={addItem} />} />
      <Route path={'/products'} element={<AllProducts addItem={addItem} token={token} />} />
      <Route path={'/products/category/:category'} element={<Category addItem={addItem} token={token} sortValue={sortValue} setSortValue={setSortValue} />} />
      <Route path={'/cart'} element={<Cart cart={cart} setCart={setCart} addItem={addItem} username={username} /> } /> 
      <Route path={'/checkout'} element={<Checkout setCart={setCart} cart={cart} username={username} /> } /> 
      <Route path={'/orderplaced'} element={<CheckedOut/> } /> 
     </Routes>
    </>
  )
}

export default App
