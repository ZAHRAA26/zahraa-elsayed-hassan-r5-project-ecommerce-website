import React from "react";
import useCartStore from "../../store/CartStore";
import Header from "./Header";
import "../style/Cart.css";

const Cart = () => {
  const { total, cart, removeFromCart } = useCartStore((state) => ({
    total: state.total,
    cart: state.cart,
    removeFromCart: state.removeFromCart,
  }));

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cartWrapper">
          {cart.length === 0 && <h1>Your cart is empty!</h1>}

          {cart.length > 0 && (
            <div className="tableWrapper">
              {/* Table layout for large screens */}
              <table className="cartTable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="imgAndTitle">
                        <div className="productImageTitle">
                          <div className="imgtable">
                            <img
                            className="productImageCartPage"
                            src={item.image}
                            alt={item.title}
                          />
                          </div>
                          <h5>{item.title}</h5>
                        </div>
                      </td>
                      <td className="priceTd">Rs. {item.price}</td>
                      <td className="countInCart"><span>
                        {item.count}
                      </span></td>
                      <td>
                        <img
                          className="removeImage"
                          alt="remove"
                          onClick={() => removeFromCart(item.id)}
                          src="/public/images/bascket.png"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Flex layout for small screens */}
              <div className="flexProductCards">
                {cart.map((item) => (
                  <React.Fragment key={item.id}>
                  <div className="cartProductCard" key={item.id}>
                    <div className="tableRow">
                      <div className="th">Product</div>
                      <div className="td productImageTitle">
                        <img
                          className="productImageCartPage"
                          src={item.image}
                          alt={item.title}
                        />
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                    <div className="tableRow">
                      <div className="th">Price</div>
                      <div className="td priceInCart">Rs. {item.price}</div>
                    </div>
                    <div className="tableRow">
                      <div className="th">Quantity</div>
                      <div className="td quant" >{item.count}</div>
                    </div>
                    <div className="tableRow">
                      <div className="th">Delete</div>
                      <div className="td quant">
                        <img
                          className="removeImage"
                          alt="remove"
                          onClick={() => removeFromCart(item.id)}
                          src="/public/images/bascket.png"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="separator"/>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          <div className="rightCartWrapper">
            <h1>Cart Totals</h1>
            <div className="d-row-total-cart">
              <h5>Total</h5>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <button className="checkInCart">Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
