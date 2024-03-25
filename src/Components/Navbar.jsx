import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";

export default function Navbar({ token }) {
  return (
    <div id="navbar">
      <Link to='/'><h1 id='name'>Anniezon</h1></Link>
      <ul id="navList">
        <li><Link className='link' to='/'>Home</Link></li>
        <li>{token ? <Link className='link' to='/logout'>Log out</Link> : <Link className='link' to='/login'>Login</Link>}</li>
        <li>{token !== null && token !== undefined ? <></> : <Link className='link' to='/signup'>Sign Up</Link>}</li>
        <li id="cart">{token !== null && token !== undefined ? <Link to='/cart'><ShoppingCart/></Link> : <></>}</li>
      </ul>
    </div>
  )
}

