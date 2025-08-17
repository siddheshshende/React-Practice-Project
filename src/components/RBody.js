import HotelCard from "./HotelCard";
import hotelList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
const RBody = () => {
  const [listOfRestaurant, setlistOfRestaurant] =useState(hotelList);
useEffect(() =>{
  console.log("useEffect")
  fetchData();
},[]);

const fetchData =async()=>{
  const data= await fetch("https://dummyjson.com/recipes");
  const response = await data.json();
  console.log(response);
  
}
  if(listOfRestaurant.length === 0){
    return  <Shimmer /> 
  }
    return (
      <div className="rBody">
        <div className="search">
          <p> searchbar </p>
        </div>
        <div className="filter">
        <button className="filter-btn" onClick={()=> {
         const filterdData= listOfRestaurant.filter((hotel)=> hotel.Rating> 4)
         setlistOfRestaurant(filterdData)
         console.log(filterdData)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="hotel-container">
          {
            listOfRestaurant.map((hotel, index) => 
            <HotelCard   
            key={index} 
            Name={hotel.Name} 
            Cuisine={hotel.Cuisine} 
            Rating={hotel.Rating} 
            Cost={hotel.Cost}  
            Image={hotel.Image}
            />
          )
          }
     
        </div>
      </div>
    );
  }
  export default RBody;