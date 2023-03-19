import React, { Component } from 'react';
import axios from 'axios';
import '../css/order.css';

class LocaBox extends Component {
    state = {
        orderInfo: {
            address: "",
            time: "",
        }
    }
    render() {
        return (
            <div className="locaBox">
                <div className="local outMe" >
                    <span> 地點</span>
                </div>
                <form method="post">
                    <div className="locatInput outMe">
                        <input type="text" placeholder="輸入完整位置"
                            value={this.state.orderInfo.address}
                            onChange={this.addressChange} />
                        <br /><br />
                    </div>
                </form>
                <br /><br />
                <div className="local1 outMe">
                    <span>取餐時間</span>
                </div>
                <div className="locatInput outMe">
                    <input type="datetime-local" id="time" name="time" 
                    onChange={this.timeChange}/>
                </div>
                <br />
                <a href="/order/goOrder">
                    <button className="btnL btnR outMe"
                        >
                        <span>前往訂餐</span>
                        <div className="border btnR outMe"></div>
                    </button>
                </a>
            </div>
        );
    }
    addressChange = (e) => {
        var newState = { ...this.state };
        newState.orderInfo.address = e.target.value;
        this.setState(newState);
    }
    timeChange = (e) => {
        var newState = { ...this.state };
        newState.orderInfo.time = e.target.value;
        this.setState(newState);
    }
    okClick = async() => {
        await axios.post("http://localhost:3000/order",
        this.state.orderInfo
        )
        window.location = "/"
        // console.log(this.state.todoItem);
        // return;
    }
}

export default LocaBox;