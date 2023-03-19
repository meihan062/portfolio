import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productlist from './productlist.js';
import Drinklist from './drinklist.js';
import '../css/index.css';

class OrderList extends Component {
    state = {
        selectedTab: localStorage.getItem('selectedTab') || 'orderList'
    };

    render() {
        return (
            <div className="orderList-main">
                <div className='orderList-top'>
                    <a href="/member/orderList/drinklist" onClick={this.handleOrderListClick} className={`orderList-c ${this.state.selectedTab === 'orderList' ? 'selected' : ''}`}>

                        線上訂餐清單

                    </a>
                    <a href="/member/orderList/productlist" className={`orderList-c ${this.state.selectedTab === 'shoppingList' ? 'selected' : ''}`} onClick={this.handleShoppingListClick}>

                        周邊選購清單

                    </a>
                </div>
                <BrowserRouter>
                    <div >
                        <Switch>
                            <Route path="/member/orderList/drinklist" component={Drinklist} exact />
                            <Route path="/member/orderList/productlist" component={Productlist} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

    handleOrderListClick = () => {
        localStorage.setItem('selectedTab', 'orderList');
        this.setState({ selectedTab: 'orderList' });
    }

    handleShoppingListClick = () => {
        localStorage.setItem('selectedTab', 'shoppingList');
        this.setState({ selectedTab: 'shoppingList' });
    }
}

export default OrderList;