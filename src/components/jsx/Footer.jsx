 import { Link } from 'react-router-dom'
import '../style/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-up'>
        <div className='d-column-footer'>
          <h3>
            Zahra.
          </h3>
          <p className='w-68 regular-16'>400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>
        </div>
        <div className='d-column-footer'>
          <p className='p-4-title'>Links</p>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='#'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='d-column-footer'>
          <p className='p-4-title'>Help</p>
          <Link to='#'>Payment Options</Link>
          <Link to='#'>Returns</Link>
          <Link to='#'>Privacy Policies</Link>
        </div>
      </div>
      <hr className='last-hr'/>
      <div>2023 zahra. All rights reverved</div>
    </div>
  )
}

export default Footer