import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Drinklist extends Component {
    state = {
        drinkList: [
            { id: 201003040010, time: '2023-01-16T04:00:00.000Z', method: '自取', phone: '0912345678', storeId: 'A001', address: '台中市公益路二段51號', total: '360', state: '1' },
            { id: 201005060020, time: '2023-01-16T04:00:00.000Z', method: '外送', phone: '0912345678', storeId: 'A009', address: '台中市公益路二段51號', total: '400', state: '0' },
            { id: 201005060020, time: '2023-01-16T04:00:00.000Z', method: '外送', phone: '0912345678', storeId: 'A009', address: '台中市公益路二段51號', total: '400', state: '0' },
        ],

    }
    render() {
        return (
            <div className='orderList-item' >
                {
                    this.state.drinkList.map((item, index) =>

                        <table className="orderList-number" key={index} onClick={() => this.doClick(item.id)}>
                            <tbody>
                                <tr className="orderList-number-tr">
                                    <td className="orderList-number-td1_1"> 飲品訂單編碼/&nbsp; {item.id}</td>
                                </tr>
                                <tr className="orderList-number-tr2">
                                    <td className="orderList-number-td2_1">訂單日期/&nbsp; {item.time}</td>
                                    <td >訂購門市/&nbsp; {item.storeId}</td>
                                    <td >訂購金額/&nbsp; {item.total}元</td>
                                    <td className="orderList-number-td2_2">訂單狀態/&nbsp;{item.state}</td>
                                </tr>
                            </tbody>
                        </table>
                    ).reverse()
                }
            </div>


        );
    }
    async componentDidMount() {
        try {
            const result = await axios.get("http://localhost:8000/login");
            const url = `http://localhost:8000/member/orderList/drinklist/${result.data.user}`;
            const fromServer = await axios.get(url);
            const newState = { ...this.state };
            newState.drinkList = fromServer.data.map((item) => {
                const date = new Date(item.time);
                // const formattedDate = date.toLocaleDateString();
                const formattedDate = date.toLocaleString(); // 格式化为日期和時間
                return { ...item, time: formattedDate };
            });
            this.setState(newState);
        } catch (error) {
            console.error(error);
        }
    }
    doClick = (id) => {
        window.location.href = `/order/billAll/${id}`;
    }
}

export default Drinklist;