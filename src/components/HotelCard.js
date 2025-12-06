const HotelCard = (props) => {
  const { Name, DeliveryTime,Cuisine, Rating, Image, CostForTwo } = props;
  return (
    <div className="hotel-card">
      <img className="HotelLogoimg" alt={Name} src={Image} />
      <h3>{Name}</h3>
      <h5>{Cuisine.join(", ")}</h5>
      <h5>{Rating} ⭐</h5>
      <h5>{CostForTwo}</h5>
      <h5>{DeliveryTime} </h5>
    </div>
  );
};
export default HotelCard;
