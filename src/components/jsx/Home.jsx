 import { useEffect } from 'react'
import '../style/Home.css'
import { useState } from 'react'
import Header from './Header'
import { Link, useLocation } from 'react-router-dom'
import useProductStore  from '../../store/ProductStore'
const Home = () => {
const {categoryName,changeCategory,fetchAllCategories,categories} = useProductStore((state) => ({categoryName:state.categoryName,changeCategory:state.changeCategory,fetchAllCategories:state.fetchAllCategories,categories:state.categories}))
  const images = { electronics: '/public/images/electronics.jpg', jewelery: '/public/images/jewelry.jpg',
    "men's clothing": '/public/images/men.jpg',"women's clothing":'/public/images/women.webp'
  }
  const handleCategory = (cat) => {
    changeCategory(cat)
  }
  useEffect(() => {
    fetchAllCategories(); // Call the async function
  }, [fetchAllCategories]);
  return (
    <>
          <Header />
  <div className='categoriesWrapper'>
      <h3>Categories</h3>
      <div className='catWrapper'>
 {categoryName.length==0&&categories.map(cat => {
      return (
        
        <div key={cat} className='cat' onClick={()=>handleCategory(cat)}>
          <Link to='/shop'>
          <img src={images[cat]} alt={cat} />
          <p>{cat}</p>
        </Link>

        </div>
      )
    })}</div>
      </div>
    </>
  
     
  )
}

export default Home