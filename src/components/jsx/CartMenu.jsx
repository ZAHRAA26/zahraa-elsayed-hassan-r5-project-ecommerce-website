import '../style/CartMenu.css'
 import useCartStore from '../../store/CartStore'
import { Link } from 'react-router-dom'
const CartMenu = (props) => {
  const { cart, total ,removeFromCart} = useCartStore((state) => ({ cart: state.cart, total: state.total,removeFromCart:state.removeFromCart }))
  const hideCartMenu = () => {
    props.toggleCart();
  }
  const formattedTotal = total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <div className='shoppingCartWrapper'>
        <div className='fixedTopSide'>
          <h3>Shopping Cart</h3>
      <img src='/public/images/bag.png' alt='bag' className='bag-icon' onClick={hideCartMenu}/>
      <hr className='hrCartTop'/>
        </div>
      <div className='itemsWrapper'>
        {cart.length == 0 && <p>Your cart is empty</p>}
       { cart&&cart.map((item) => {
          return (
            <div className='cartItem' key={item.id}>
              <div className='productImgCart'>
              <img src={item.image} alt={item.title} />

              </div>
              <div className='d-column-cart-item'>
                <p>{item.title}</p>
                <div className='d-row-cart'>
                  <span className='itemCount'>{item.count}</span> X <span className='itemPrice'>Rs. {' '}{item.price}</span>

                </div>
              </div>
              <img className='removeIcon' alt='remove' src='/public/images/close.png' onClick={()=>removeFromCart(item.id)}/>
            </div>
            
        )})
      }
      </div>
      
      <div className='shoppingCartFooter'>
        <div>
          <p>Total </p><span className='totalinMenu'>Rs. {' '}{formattedTotal}</span>

        </div>
        <hr />
              <Link to='/cart'>
                <div className='cartSpan' onClick={hideCartMenu}>
                  <span>Cart</span>
                </div></Link>
    </div>
      </div>
  )
}

export default CartMenu