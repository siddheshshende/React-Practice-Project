import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

   // console.log(this.props.name + "child constructor");
    this.state = {
      userInfo: {
        name: "username",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("setInterval called");
    // }, 1000);

    console.log(this.props.name + "child componentDidMount");

    const data = await fetch("https://api.github.com/users/siddheshshende");
    const Json = await data.json();
   // console.log(Json);

    this.setState({
      userInfo: Json,
    });
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate called");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    //console.log("componentWillUnmount called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log(this.props.name + "child render");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="profile" className="UserImage" />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h6>Contact: siddheshshende02@gmail.com</h6>
      </div>
    );
  }
}
export default UserClass;
