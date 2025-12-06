import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Shimmer from "./Shimmer";

const RBody = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        "response:",
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );

      setListOfRestaurant(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredList(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleTopRated = () => {
    const filteredData = listOfRestaurant.filter(
      (recipe) => recipe.info.avgRatingString > 4.2
    );
    setFilteredList(filteredData);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rBody">
      <div className="filter-search">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for recipes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredData = listOfRestaurant.filter((recipe) =>
                recipe.info.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
              console.log("Filtered Data:", filteredData);
              setFilteredList(filteredData);
            }}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Recipes
        </button>
      </div>

      <div className="hotel-container">
        {filteredList.map((recipe) => (
          <HotelCard
            key={recipe.info.id}
            Name={recipe.info.name}
            Cuisine={recipe.info.cuisines}
            Rating={recipe.info.avgRatingString}
            DeliveryTime={recipe.info.sla.slaString}
            CostForTwo={recipe.info.costForTwo}
            Image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/" +
              recipe.info.cloudinaryImageId
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RBody;
