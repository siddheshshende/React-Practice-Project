import CompanyLogo from "../../assets/food-company_logo-horizontal.jpg";
import { useState } from "react";

const Header = () => {
  const [Btn, setBtn] = useState("login");
  
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
          <button
            className="Login-Btn"
            onClick={() => {
              setBtn(Btn === "login" ? "logout" : "login");
            }}>
            {Btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
