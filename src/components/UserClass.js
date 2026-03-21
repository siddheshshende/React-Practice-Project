import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <p>count number: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>
        <p>count number2: {count2}</p>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment count2
        </button>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h6>Contact: siddheshshende02@gmail.com</h6>
      </div>
    );
  }
}
export default UserClass;
