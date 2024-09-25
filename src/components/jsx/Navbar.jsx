import { Link } from "react-router-dom"
import '../style/Navbar.css'
import { useState } from "react";
import CartMenu from "./CartMenu";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
   const toggleCart = () => {
   setIsCartOpen(!isCartOpen);
  }
  return (
      <div className="navbar_wrapper">
          <div className="logo_navbar">
              <img src="/images/logo.png" alt='logo' />
              <h3>Zahra</h3>
      </div>
        <ul className="middle-navbar">
          <div className="left-middle-navbar">
            <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          </div>
          <li className="right-middle-navbar"><Link to='/contact'>Contact</Link></li>
</ul>
      
      <div onClick={toggleCart}>
        <img className='shoppingImage' src="/images/ant-design_shopping-cart-outlined.png" alt='shopping image'/>
      </div>
      {isCartOpen && <div className="overlay" onClick={toggleCart}></div>}
      {isCartOpen &&
        <div className={`offcanvas ${isCartOpen ? 'show' : ''}`}>
          <CartMenu toggleCart={toggleCart} />
        </div>}
    </div>
  )
}

export default Navbar
