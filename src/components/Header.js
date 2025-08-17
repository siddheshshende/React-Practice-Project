
import CompanyLogo from "../../assets/food-company_logo-horizontal.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <p>Diet</p>
      <img src={CompanyLogo} className="logo" alt="company logo" />
        <p>Eatery</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li> Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;