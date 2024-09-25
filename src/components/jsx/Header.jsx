import '../style/Header.css'
 import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const url = location.pathname;
  const currentUrl=url.slice(1,url.length)
  return (
    <div className="header">
  <img alt='background' src={url.length == 1 ? '/images/scandinavian-interior-mockup-wall-decal-background 1.png' : '/images/secondBackground.png'} />
      <div className='breadCrumb'>
       {url.length>1&&currentUrl!=='shop'&& <img src='/images/logo.png' alt='logo' className='logoInHeader'/>}
        <h2>{currentUrl}</h2>
        {url.length>1&&<div className='d-row-breadcrumb'>
<Link to='/'>Home</Link>
        <span>{'>'}</span>
        <Link to={`/${currentUrl}`}><span className='currentUrl'>{ currentUrl}</span></Link>
        </div>}
        
      </div>
    </div>
  )
}

export default Header