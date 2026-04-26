import {useEffect, useState } from "react";

const useRestaurantMenuDetails =(resId)=>{
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
useEffect(()=>{
 fetchMenu();
},[resId])
  
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

    return resInfo;
}

export default useRestaurantMenuDetails;