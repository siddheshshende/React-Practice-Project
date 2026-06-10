import { useEffect, useState } from "react";

const useRBody = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();
      console.log("json:", json);
      console.log(
        "response:",
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      );

      setListOfRestaurant(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      );
  
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return listOfRestaurant;
};
export default useRBody;
