import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <p>About Us</p>

      <User name={"siddhesh function"} />
      <UserClass name={"siddhesh class"} location={"pune class"} />
    </div>
  );
};

export default About;
