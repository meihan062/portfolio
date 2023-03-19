import React, { Component } from 'react';

class CountNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
  }

  handlePlusClick = () => {
    this.setState(prevState => ({
      qty: prevState.qty + 1,
    }));
  };

  handleMinusClick = () => {
    if (this.state.qty > 0) {
      this.setState(prevState => ({
        qty: prevState.qty - 1,
      }));
    }
  };

  render() {
    return (
      <div className="cupCount">
        <input
          type="button"
          value="-"
          className="minusBtn"
          onClick={this.handleMinusClick}
        />
        <input
          type="text"
          name="quantity"
          value={this.state.qty}
          className="qtyNum"
          readOnly
        />
        <input
          type="button"
          value="+"
          className="plusBtn"
          onClick={this.handlePlusClick}
        />
      </div>
    );
  }
}
export default CountNumber;