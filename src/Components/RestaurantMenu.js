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
import { addItem,removeItem } from "./cartSlice";
import { useEffect } from "react";
import { useState } from "react";

const RestaurantMenu = () => {
  const [test, setTest] = useState(false);
  const dispatch = useDispatch();
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  function handleAddItem(item) {
    dispatch(addItem(item));
    setTest(true);
  }

  function handleRemoveItem(item) {
   dispatch(removeItem(item));
  }

  useEffect(() => {
    const settime = setTimeout(() => {
      setTest(false);
    }, 500);
  }, [test]);

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
          {test && <h1 className="text-white relative -top-3 text-center ">Item successfully added ✅</h1>}
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
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button
                    className="add-btn text-white font-bold"
                    onClick={() =>
                      handleAddItem({
                        name: item.name,
                        image: item.imageId,
                        discription: item.discription,
                        price: item?.price / 100,
                      })
                    }
                  >
                    ADD +
                  </button>
                  <button   className="p2 border-2 bg-green-900" onClick={()=>handleRemoveItem({
                        name: item.name,
                        image: item.imageId,
                        discription: item.discription,
                        price: item?.price / 100,
                      })}>Remove</button>
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
