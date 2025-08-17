import React from "react";
import ReactDOM from "react-dom/client";
import RBody from "./components/RBody"
import Header from "./components/Header";


const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <RBody />
    </div>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);
