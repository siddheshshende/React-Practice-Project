import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent componentDidMount");
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <p>About Us Class Component</p>

        <User name={"siddhesh function"} />
        <userContext.Consumer>
          {(data) => (<p>User----------------: {data.name}</p>)}
        </userContext.Consumer>
        <UserClass name={"First"} location={" class"} />
      </div>
    );
  }
}

export default About;
