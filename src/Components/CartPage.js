import React from 'react';
import { useSelector } from 'react-redux';
import { ITEM_IMG_CDN_URL } from '../constants';
import { FaRupeeSign } from "react-icons/fa";

function CartPage() {

const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="cart-page">
        {cartItems.map((item) => {
          return (
            <div className="cart-page-items">
              <div>
                <img
                  className="menu-item-img"
                  src={ITEM_IMG_CDN_URL + item?.image}
                  alt={item?.name}
                />
              </div>
              <div>
                <div className="cart-item-price">
                  <h1>
                    <FaRupeeSign className="rupees-icon" />
                    {item.price}
                  </h1>
                </div>
                <div>
                  <h3 className="cart-item-name">{item.name}</h3>
                </div>
                <div>
                  <button className="remove-btn">Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-payment">
        <div className="cart-paid">
          <h2>Price Details</h2>
          <hr />
          <h3>
            Price ({cartItems.length}) items{" "}
            <span className="item-price">2080</span>{" "}
          </h3>
          <h3>
            Delivery Charges <span className="item-price"> 149</span>
          </h3>

          <h3>
            Total Amount <span className="item-price">2050</span>
          </h3>

          <h3>
            GST and Charges<span className="item-price">400</span>
          </h3>

          <button className="buy-btn">Proceed to Buy</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;


