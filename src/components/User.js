import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <p>count number: {count}</p>
      <p>count number2: {count2}</p>
      <h1>Name: {name}</h1>
      <h3>Location: Pune</h3>
      <h6>Contact: siddheshshende02@gmail.com</h6>
    </div>
  );
};
export default User;
