import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRBody from "../utils/useRBody";

const RestaurantMenuDetails = () => {
  const { resId } = useParams();
  console.log("resId: ", resId);
  const listOfRestaurant = useRBody();
  const restaurant = listOfRestaurant.find(
    (item) => String(item?.info?.id) === String(resId),
  );


  if (!listOfRestaurant || listOfRestaurant.length === 0) return <Shimmer />;
  if (!restaurant) return <h2>Restaurant not found</h2>;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    restaurant.info;
  console.log("data: ", restaurant.info.itemCards);

  return (
    <section>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl m-4 border border-green-200">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-600">{cuisines?.join(", ")}</p>
          <p className="text-green-600">Rating: {avgRatingString} ⭐</p>
          <p className="text-green-600">cost For Two: {costForTwoMessage} </p>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenuDetails;
