import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/food-company_logo-horizontal.jpg";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
  const [Btn, setBtn] = useState("login");
  const isOnlineStatus = useOnlineStatus();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-lg">
      <div className=" flex justify-between items-center">
        <p className="text-2xl font-bold ">Diet</p>
        {/* <img
          src={CompanyLogo}
          className=" w-16 h-16 object-cover"
          alt="company logo"
        /> */}
        <p className="text-2xl font-bold ">Eatery</p>
      </div>
      <div className="nav-items">
        <ul className="flex justify-between items-center gap-2 p-1">
          <li>
            <p >
              Online Status: <strong className={`${isOnlineStatus ? 'text-green-500' : 'text-red-500'}`}> {isOnlineStatus ? "Online" : "Offline"}</strong>
            </p>
          </li>
          <li>
            <Link  to="/" className="cursor-pointer">Home </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer">About </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer">Contact Us </Link>
          </li>
          <li>
            <Link to="/cart" className="cursor-pointer">Cart </Link>
          </li>
          <li>
            <Link to="/grocery" className="cursor-pointer">Grocery </Link>
          </li>
          <button
            className="border-2 border-gray-500 rounded-2xl px-4 py-2 cursor-pointer"
            onClick={() => {
              setBtn(Btn === "login" ? "logout" : "login");
            }}>
            {Btn}
          </button>
        </ul>
      </div>
    </header>
  );
};
export default Header;
