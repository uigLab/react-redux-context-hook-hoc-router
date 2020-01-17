import React, { Component } from "react";

class BigClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Raqib"
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.props, nextProps, nextState);

    return true
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p onClick={() => this.setState({ name: "Abdullah" })}>
          {this.state.name}
        </p>
      </div>
    );
  }
}

export default BigClass;
