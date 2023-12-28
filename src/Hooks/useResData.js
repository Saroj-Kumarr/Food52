import { useEffect, useState } from "react";

const useResData = (API_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(API_URL);

    const json = await response.json();
    const resData =
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants;

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);

    return [allRestaurants, filteredRestaurants];
  }
};

export default useResData;
