import React, { Component } from "react";

class MenuClass extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Item: {this.props.item}</p>
        <p>Price: {this.props.price}</p>
      </div>
    );
  }
}

export default MenuClass;
