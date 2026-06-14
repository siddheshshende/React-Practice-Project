import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import Header from "./components/Header";
import RBody from "./components/RBody";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { useState, useEffect } from "react";
import RestaurantMenuDetails from "./components/RestaurantMenuDetails";
//import Grocery from "./components/Grocery";
import { lazy } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "siddheshking",
    };
    setUserName(data.name);
  }, []);

  return (
        <userContext.Provider value={{name : userName, setUserName}}>
    <div className="App">
      <userContext.Provider value={{name : "joo"}}>
        <Header />
        </userContext.Provider>
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <RBody /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "grocery", element: <Grocery /> },
      { path: "restaurant/:resId", element: <RestaurantMenuDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
