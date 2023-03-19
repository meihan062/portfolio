import React, { Component } from 'react';

class UnitPrice extends Component {
  state = {
    qty: 0,
    unitPrice: 30,
    totalAmount: 0
    // other state properties
  }
  handlePlusClick = () => {
    this.setState(prevState => ({
      qty: prevState.qty + 1,
    }), this.calculateTotalAmount);
  };

  handleMinusClick = () => {
    if (this.state.qty > 0) {
      this.setState(prevState => ({
        qty: prevState.qty - 1,
      }), this.calculateTotalAmount);
    }
  };
  calculateTotalAmount = () => {
    const totalAmount = this.state.unitPrice * this.state.qty+(10*this.state.qty);
    this.setState({ totalAmount });
  }

  handleUnitPriceChange = (event) => {
    this.setState({ unitPrice: event.target.value }, this.calculateTotalAmount);
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value }, this.calculateTotalAmount);
  }
  render() {
    return (
      <div className='cupB'>
        <div className="cupCount">
        杯數:&nbsp;&nbsp;
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
        <pre className='priceArea'><p> 單價: {this.state.unitPrice}元   金額: {this.state.totalAmount}元</p></pre>

      </div>
    );
  }
}
export default UnitPrice;