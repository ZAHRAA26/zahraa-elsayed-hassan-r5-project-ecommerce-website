import React from 'react'
import '../style/Breadcrumbs.css'
import { Link } from 'react-router-dom'
const Breadcrumbs = (props) => {
  return (
      <div className='breadcrumbs'>
      <span className='graySpan'><Link to={'/'}>Home</Link></span> {'>'}
      <span className='graySpan'><Link to={'/shop'}>Shop</Link></span>
      <span className='neededLessThan'>{'>'}</span>
      <span className='lastSpanBreadCrumbs'> {props.name}</span>
    </div>
  )
}

export default Breadcrumbs