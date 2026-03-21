import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenuDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const { resId } = useParams();
  console.log("resId", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&&submitAction=ENTER&restaurantId=${resId}`
      );





      console.log("Response status:", response.status);

      // Use text() first to handle empty responses safely
      const text = await response.text();
      console.log("Response length:", text.length);

      if (!text || text.length === 0) {
        throw new Error("Empty response from API - Swiggy may be blocking the request");
      }

      const json = JSON.parse(text);
      console.log("data-", json);

      // Check Swiggy's own statusCode (1 = error, 0 = success)
      if (json.statusCode === 1) {
        throw new Error(json.statusMessage || "Swiggy API returned an error");
      }

      setResInfo(json);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
      setError(err.message);
    }
  };

  if (error) return <h2>Error: {error}</h2>;
  if (resInfo === null) return <Shimmer />;

  // Dynamically find the restaurant info card instead of hardcoded index
  const restaurantCard = resInfo?.data?.cards?.find(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const info = restaurantCard?.card?.card?.info;

  if (!info) return <h2>Restaurant info not found</h2>;

  const { name, cuisines, costForTwoMessage, avgRatingString } = info;

  return (
    <section>
      <div>
        <div>
          <h2>{name}</h2>
          <h2>{cuisines?.join(", ")}</h2>
          <h2>{costForTwoMessage}</h2>
          <h2>{avgRatingString}</h2>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenuDetails;

