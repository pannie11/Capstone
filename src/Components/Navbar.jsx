import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";

export default function Navbar({ token }) {
    console.log(token)
  return (
    <div id="navbar">
      <h1 id='name'>Anniezon</h1>
      <ul id="navList">
        <li><Link className='link' to='/'>Home</Link></li>
        <li>{token ? <Link className='link' to='/logout'>Log out</Link> : <Link className='link' to='/login'>Login</Link>}</li>
        <li>{token !== null && token !== undefined ? <></> : <Link className='link' to='/signup'>Sign Up</Link>}</li>
        {/* <li>{token !== null && token !== undefined ? <Link className='link' to='/account'>Account</Link> : <></>}</li> */}
        {/* <Link className='link' to='/users'>Users</Link> */}
          {/* <Link to='/carts'>Carts</Link>  */}
        <li id="cart"><Link className="link"><ShoppingCart/></Link></li>
      </ul>
    </div>
  )
}

// use frontend (a state) to display updated items in the cart, same with deleting items from the cart 
// edit amount of products in the cart
// checkout. make sure cart is cleared 