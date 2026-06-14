import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("useEffect called");
 const time =   setInterval(() => {
      // console.log("setInterval called");
    }, 1000);

    return () => {
      clearInterval(time);
      // console.log("useEffect return function called");
    };
  }, []);

  // console.log("outside useEffect called");

  return (
    <div className="user-card">
      <p>count number: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h1>Name: {name}</h1>
      <h3>Location: Pune</h3>
      <h6>Contact: siddheshshende02@gmail.com</h6>
    </div>
  );
};

export default User;
