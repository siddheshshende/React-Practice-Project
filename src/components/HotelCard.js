const HotelCard = (props) => {
  const { Name, DeliveryTime, Cuisine, Rating, Image, CostForTwo } =
    props;
  return (
    <div className=" p-4  bg-gray-200 rounded-lg shadow-md w-full">
      <div className="h-48 w-full mb-4">
        <img
          className="h-full w-full object-cover rounded-lg "
          alt={Name}
          src={Image}
        />
      </div>
      <h3 className="text-lg font-bold">{Name}</h3>
      <h5 className="text-gray-600 line-clamp-2 min-h-12">
        Cuisine: {Cuisine.join(", ")}
      </h5>
      <h5 className="text-green-500 font-bold">Rating: {Rating} ⭐</h5>
      <h5 className="text-base">Cost: {CostForTwo}</h5>
      <h5 className="text-gray-600">Delivery Time: {DeliveryTime} </h5>
    </div>
  );
};
// Higher Order Component (HOC) to add "Open" label. Input is HotelCard component and output is a new component with "Open" label.

export const withOpenLabel = (HotelCard) => {
  return (props) => {
    return (
      <div>
        <p className="bg-yellow-700 text-white p-2 rounded-lg  absolute"  >Open</p>
        <HotelCard {...props} />
      </div>
    );
  };
};
export default HotelCard;
