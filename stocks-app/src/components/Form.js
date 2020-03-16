import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getStockPrice}>
        <input type="text" name="symbol" placeholder="Symbol" />
        <button>Get Stock Information</button>
      </form>
    );
  }
}

export default Form;
