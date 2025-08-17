

const HotelCard = (props) => {
    const { Name, Cuisine, Rating , Image, Cost} = props;
    return (
      <div className="hotel-card">
        <img
          className="HotelLogoimg"
          alt={Name}
          src={Image}
   />
       <h3>{Name}</h3>
        <h5>{Cuisine}</h5>
        <h5>{Rating} Stars</h5>
        <h5>₹{Cost} For Two</h5>
      </div>
    )
  }
  export default HotelCard;