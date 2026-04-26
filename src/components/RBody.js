import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRBody from "../utils/useRBody.js";
const RBody = () => {
  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("render rbody");
  console.log("use", useState());
  const isOnlineStatus = useOnlineStatus();
  const listOfRestaurant = useRBody();

  //  Sync filteredList when API data arrives
  useEffect(() => {
    setFilteredList(listOfRestaurant);
  }, [listOfRestaurant]);


  const handleTopRated = () => {
    const filteredData = listOfRestaurant.filter(
      (recipe) => recipe.info.avgRatingString > 4.2,
    );
    setFilteredList(filteredData);
  };
  console.log("isOnlineStatus", isOnlineStatus);
  if (isOnlineStatus === false) return <h1> You are offline</h1>;

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
                  .includes(searchTerm.toLowerCase()),
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
          <Link
            key={recipe.info.id}
            to={`/restaurant/${recipe.info.id}`}
            style={{ textDecoration: "none", color: "inherit" }}>
            <HotelCard
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RBody;
