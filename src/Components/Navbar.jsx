import { Link } from "react-router-dom";

export default function Navbar({ token }) {
    console.log(token)
  return (
    <div id="navbar">
      <Link className='link' to='/'>Home</Link>
      {token ? <Link className='link' to='/logout'>Log out</Link> : <Link className='link' to='/login'>Login</Link>}
      {token !== null && token !== undefined ? <></> : <Link className='link' to='/signup'>Sign Up</Link>}
      {/* {token !== null && token !== undefined ? <Link to='/account'>Account</Link> : <></>}{' '} */}
       {/* <Link className='link' to='/users'>Users</Link> */}
        {/* <Link to='/carts'>Carts</Link>  */}
    </div>
  )
}