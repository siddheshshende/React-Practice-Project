import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/food-company_logo-horizontal.jpg";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
  const [Btn, setBtn] = useState("login");
  const isOnlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <p>Diet</p>
        <img src={CompanyLogo} className="logo" alt="company logo" />
        <p>Eatery</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <p>Online Status: {isOnlineStatus ? "Online" : "Offline"}</p>
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/cart">Cart </Link>
          </li>
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
