import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ITEM_IMG_CDN_URL } from "../constants";
import { FaRupeeSign } from "react-icons/fa";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector((store) => store.cart.items);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const totalPrice = useSelector((store) => store.cart.items);

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  useEffect(() => {
    const tPrice = totalPrice.reduce((acc, current) => {
      return (acc = acc + current.price);
    }, 0);
    setPrice(tPrice);
  });

  function orderPageRoute() {
    navigate("/app/orderpage");
  }

  return (
    <>
      <div className="cart-page ">
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
                    onClick={() =>
                      handleRemoveItem({
                        name: item.name,
                        image: item.imageId,
                        discription: item.discription,
                        price: item?.price / 100,
                      })
                    }
                    className="text-lg shadow-xl hover:shadow-2xl relative ml-4 bg-[#F6931E] border-2 text-green-900 p-[2px] rounded-lg font-bold"
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
          <h2 className="text-3xl text-green-900 font-bold">
            Price <span className="text-[#F6931E]">Details</span>
          </h2>
          <hr />
          <h3 className="-mt-4">
            Price ({cartItems.length}) items{" "}
            <span className="item-price pl-7">{price}</span>
          </h3>
          <h3>
            Delivery Charges <span className="item-price pl-3"> 149</span>
          </h3>

          <h3>
            GST and Charges<span className="item-price pl-4">400</span>
          </h3>

          <h3>
            Total Amount{" "}
            <span className="item-price pl-7">{price + 149 + 400}</span>
          </h3>

          <button
            onClick={() => orderPageRoute()}
            className="relative top-[75px] text-center w-[310px] bg-green-900 rounded-xl w-[300px] ml-2 p-1 text-white font-bold "
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
