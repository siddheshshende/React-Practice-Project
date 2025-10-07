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
      const data = await fetch("https://dummyjson.com/recipes");
      const json = await data.json();
      console.log("response:", json.recipes);

      setListOfRestaurant(json.recipes);
      setFilteredList(json.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleTopRated = () => {
    const filteredData = listOfRestaurant.filter(
      (recipe) => recipe.rating > 4.5
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
                recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            key={recipe.id}
            Name={recipe.name}
            Cuisine={recipe.cuisine}
            Rating={recipe.rating}
            Calories={recipe.caloriesPerServing}
            Image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RBody;
