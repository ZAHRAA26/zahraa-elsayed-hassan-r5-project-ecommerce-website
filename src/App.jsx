import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/jsx/Layout'
import ContactForm from './components/jsx/ContactForm'
import Cart from './components/jsx/Cart'
import Home from './components/jsx/Home'
import { useState } from 'react'
import ProductDetails from './components/jsx/ProductDetails'
import ProductList from './components/jsx/ProductList'
import NotFoundPage from './pages/jsx/NotFoundPage'
function App() {
  const [shop,setShop]=useState(true)
const [categoryName,setCategoryName]=useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={ <Home/>} />
          <Route path='/contact' element={ <ContactForm/>} />
          <Route path='/cart' element={<Cart/> } />
          <Route path={shop ? '/shop':`${categoryName}`} element={ <ProductList/>} />
          <Route path={ '/shop/:id'} element={<ProductDetails/> } />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        {/* ${categoryName}/:id */}
</Routes>

    </BrowserRouter>
  )
}

export default App
