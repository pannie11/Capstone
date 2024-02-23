import { Link } from "react-router-dom";

export default function Navbar({ token }) {
    console.log(token)
  return (
    <div id="navbar">
      <Link to='/'>Home</Link>{' '}
      <Link to='/allproducts'>All products</Link>{' '}
      {token ? <Link to='/logout'>Log out</Link> : <Link to='/login'>Login</Link>}{' '}
      {token !== null && token !== undefined ? <></> : <Link to='/signup'>Sign Up</Link>}{' '}
      {/* {token !== null && token !== undefined ? <Link to='/account'>Account</Link> : <></>}{' '} */}
      <Link to='/users'>Users</Link>
    </div>
  )
}