import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import { MenuShimmer } from "./Shimmer";
import useResMenuData from "../Hooks/useResMenuData"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, addMessage, removeMessage } from "./cartSlice";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import Swal from "sweetalert2";

const RestaurantMenu = () => {
  // const [addSuccess, setAddSuccess] = useState();
  // const [removeSuccess, setRemoveSuccess] = useState();
  const dispatch = useDispatch();
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const addShow = useSelector((store) => store.cart.addSuccess);
  const removeShow = useSelector((store) => store.cart.removeSuccess);

  function handleAddItem(item) {
    setTimeout(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Item added successfully ✅",
      });
    }, 1000);

    dispatch(addItem(item));
  }

  function handleAddMessage() {
    dispatch(addMessage(true));
  }

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  useEffect(() => {
    const settime = setTimeout(() => {
      dispatch(addMessage(false));
    }, 1000);
  });

  useEffect(() => {
    const settime = setTimeout(() => {
      dispatch(removeMessage(false));
    }, 1000);
  });

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary fixed w-full z-10">
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="menu-title-wrap fixed w-full border-2 border-black h-20 overflow-hidden z-20 bg-black top-[270px]">
          <h3 className="menu-title -mt-4  w-full  text-center text-xl font-bold text-white">
            Recommended <span className="text-[#F6931E]">Items</span>
          </h3>
          <p className="menu-count  relative -top-2 text-center font-semibold text-white">
            {menuItems.length} ITEMS
          </p>
          {addShow && (
            <h1 className="text-white relative -top-3 text-center ">
              Item successfully added ✅
            </h1>
          )}
          {removeShow && (
            <h1 className="text-white relative -top-3 text-center ">
              Item successfully removed ❌
            </h1>
          )}
        </div>
      </div>

      <div className="restaurant-menu-content relative top-[250px]">
        <div className="menu-items-container">
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img relative -left-2 "
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}

                  <div className="relative z-10 left-1">
                    <button
                      className="text-[#F6931E] text-3xl p-1"
                      onClick={() => {
                        handleAddItem({
                          name: item.name,
                          image: item.imageId,
                          discription: item.discription,
                          price: item?.price / 100,
                        });
                        handleAddMessage();
                      }}
                    >
                      <FaPlusSquare />
                    </button>

                    <button className="text-lg bg-green-800 relative -top-[8px] text-[#F6931E] border-2 bg-green-900 p-[2px] rounded-lg font-bold">
                      Item
                    </button>

                    <button
                      className="text-3xl text-[#F6931E] p-1"
                      onClick={() => {
                        handleRemoveItem({
                          name: item.name,
                          image: item.imageId,
                          discription: item.discription,
                          price: item?.price / 100,
                        });
                      }}
                    >
                      <FaMinusSquare />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
