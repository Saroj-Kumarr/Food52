import React from "react";
import { useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../constants";
import { FaRupeeSign } from "react-icons/fa";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function CartPage() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

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
                  <button
                    className="p2 border-2 bg-green-900"
                    onClick={() =>
                      handleRemoveItem({
                        name: item.name,
                        image: item.imageId,
                        discription: item.discription,
                        price: item?.price / 100,
                      })
                    }
                  >
                    Remove
                  </button>
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
