import React, { Component } from 'react';
import '../css/order.css';
import AniIcon from '../images/order/ani_icon.png';
// import axios from 'axios';

class OderdirnkID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billAll: [],
            drinkName: [],
        };
    }

    componentDidMount() {
        const id = '202301010001';
        // const date = new Date('2023-02-09T07:36:18.000Z');
        // const localDate = date.toLocaleString();

        Promise.all([
            fetch(`http://localhost:8000/order/billAll/${id}`).then(res => res.json()),
            fetch(`http://localhost:8000/order/billAll/drinkName/${id}`).then(res => res.json())
        ])
            .then(([billAll, drinkName]) => {
                this.setState({ billAll, drinkName });
            })
            .catch(error => console.error(error));
    }

    renderFirstOrder() {
        const { billAll } = this.state;
        if (billAll.length === 0) {
            return null;
        }
        const firstOrder = billAll[0];
        return (
            <p className="orderNum" key={`bill-${firstOrder.id}`}>
                訂單編號: {firstOrder.id}
            </p>
        );
    }

    render() {
        console.log('this.state.drinkName:', this.state.drinkName);
        return (
            <div>
                <div className="billScreen">
                    <div className="BAbillBox">
                        <div className="BAaniCon">
                            <img src={AniIcon} alt="" />
                            <h1>訂購明細</h1>
                        </div>
                        <div className='billScroll'>
                            <div className="BAbillBg">
                                <div>
                                    <div>
                                        <h1>小新的團訂</h1>
                                    </div>
                                    {this.renderFirstOrder()}
                                    {this.state.billAll.map((bill, index) => (
                                        <div className="outHere" key={`bill-${bill.id}-${index}`}>
                                            <div className="billB">
                                                <div>
                                                    <h3>{bill.people}</h3>
                                                </div>
                                                <div className="BAchoiceName">
                                                    <h4>{bill.pid}</h4>
                                                    <p>
                                                        {' '}
                                                        {bill.size}/{bill.sugar}/{bill.ice}/{bill.plus}
                                                    </p>
                                                    <p>{bill.cup}杯</p>
                                                    <p>${bill.price}</p>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {this.state.drinkName.map(drink => (
                                <div className="BAcomeLeft" key={`drink-${drink.id}`}>
                                    <div>
                                        <h4>現金付款</h4>
                                        <h4>總金額</h4>
                                        <p>${drink.total}</p>
                                    </div>
                                    <div className="BAbillHr"></div>
                                    <div className="getPoint">
                                        <h4>{drink.method}/{drink.storeId}</h4>
                                        <span>{new Date(drink.time).toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="BAbillBtn ">
                            <a href="/order/drinkList" className="BAbtnR BtnA">
                                <button className="BAbtnM BAbtnR BtnA">
                                    <p>再次訂購</p>
                                    <div className="BAborder BAbtnR"></div>
                                </button>
                            </a>
                            <a href="/member/orderList/drinklist" className="BAbtnR">
                                <button className="BAbtnR BAbtnM1">
                                    <p>關閉</p>
                                    <div className="BAborder BAbtnR"></div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}
export default OderdirnkID;