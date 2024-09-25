import { useEffect, useState } from "react";
import '../style/ProductList.css';
import { Link} from "react-router-dom";
import Header from './Header';
import useProductStore from "../../store/ProductStore";
import useCartStore from "../../store/CartStore";
const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
const {fetchAllProducts,productList,}=useProductStore((state)=>({fetchAllProducts:state.fetchAllProducts,productList:state.productList}))
  const {addToCart}=useCartStore(state=>({addToCart:state.addToCart}))
  const itemsPerPage = 8;
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // Calculate the current items to show
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Next and Previous buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addCartItem = (product,count) => {
  addToCart(product,count)
}
  return (
    <>
      <Header />
      <div className="productListWrapper">
    <div className="productList">
      <div className="grid-container">
        {currentItems.map((product) => (
            <div key={product.id}  className="grid-item">
            
              <div className="grid-item-img">
                <div className="img-hover">
                  <img src={product.image} alt={product.title} />
                </div>
            <button className="hover-button" onClick={(count)=>addCartItem(product,count=1)} >Add To Cart</button>
                
            </div>
          <Link to={`/shop/${product.id}`} className="linkClass">

            <div className="product-data">
              <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h3>Rs. {' '}{product.price}</h3>
              </div>
              </Link>
              </div>
          
        ))}
      </div>
      
     
      </div>
       {/* Pagination Controls */}
      <div className="pagination">
        {/* Previous Button */}
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="prev-button">Previous</button>
        )}

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </span>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className="next-button">Next</button>
        )}
        </div>
        </div>
      </>
  );
};

export default ProductList;
