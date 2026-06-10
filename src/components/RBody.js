import { useEffect, useState } from "react";
import HotelCard, { withOpenLabel } from "./HotelCard";
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
  const OpenedHotelCard = withOpenLabel(HotelCard);

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
  console.log("listOfRestaurant", listOfRestaurant);
  if (isOnlineStatus === false) return <h1> You are offline</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rBody">
      <div className="flex justify-center items-center md:flex-row flex-col gap-4 p-4  ">
        <div className="flex sm:flex-row flex-col  gap-2">
          <input
            type="text"
            className="border border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-950"
            placeholder="Search for recipes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="cursor-pointer rounded-2xl px-4 py-2  bg-amber-950 text-white"
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
        <button
          className="cursor-pointer rounded-2xl px-4 py-2  bg-amber-950 text-white"
          onClick={handleTopRated}>
          Top Rated Recipes
        </button>
      </div>

      <div className="hotel-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  m-4">
        {filteredList.map((recipe) => (
          <Link
            key={recipe.info.id}
            to={`/restaurant/${recipe.info.id}`}
            style={{ textDecoration: "none", color: "inherit" }}>
            {recipe.info.isOpen ? (
              <OpenedHotelCard
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
            ) : (
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
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RBody;
