import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import useProductStore from '../../store/ProductStore';
import useCartStore from '../../store/CartStore';
import Breadcrumbs from './Breadcrumbs';
import StarRating from './StarRating';  // Import the StarRating component
import '../style/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { fetchAsingleProduct, product } = useProductStore((state) => ({
    fetchAsingleProduct: state.fetchAsingleProduct,
    product: state.product,
  }));

  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAsingleProduct(id); 
    }
  }, [id, fetchAsingleProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumbs name={product.title} />
      <div className='productDetails'>
        <div className='productDetails-d-row'>
          <div className='imgProduct'>
            <img className='productDetails-img' src={product.image} alt={product.title} />
          </div>
          <div className='productDetailsDataWrapper'>
            <div className='productDetailsData'>
              <h1>{product.title}</h1>
              <h6>Rs. {' '}{product.price}</h6>
              <StarRating rating={product.rating&&product.rating.rate} count={product.rating&&product.rating.count} />  {/* Use StarRating component */}
              <p>{product.description}</p>
              <div className='productDetails_buttons'>
                <div className='left-button'>
                  <button onClick={decrementCount}>-</button>
                  <span>{count}</span>
                  <button onClick={incrementCount}>+</button>
                </div>
                <div className='right-button' onClick={() => addToCart(product, count)}>
                  <span>Add To Cart</span>
                </div>
              </div>
              <hr className='product-detailsHr' />
              <div className='downData'>
                <div className='d-row-down-data'>
                  <p className='leftDataPara'>SKU</p>:<p className='rightDataPara'>SS001</p>
                </div>
                <div className='d-row-down-data'>
                  <p className='leftDataPara'>Category</p>:<p className='rightDataPara'>{product.category}</p>
                </div>
                <div className='d-row-down-data'>
                  <p className='leftDataPara'>Tags</p>:<p className='rightDataPara'>Returned from API</p>
                </div>
                <div className='d-row-down-data'>
                  <p className='leftDataPara'>Shop</p>:
                  <div className='d-row-img'>
                    <img src='/images/facebook.png' alt="Facebook" />
                    <img src='/images/linkedIn.png' alt="LinkedIn" />
                    <img src='/images/twitter.png' alt="Twitter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='product-details-last-Hr' />
        <div className='product-details-description'>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
