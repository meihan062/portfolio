import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';
axios.defaults.withCredentials = true;

class Productlist extends Component {
    state = {
        productList:[
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
            {"o_id":"20230101123543","o_date":"2023-01-01T04:35:43.000Z","o_order_name":"王大明","o_order_tel":"0912345678","o_receive_name":"王小美","o_receive_tel":"0909-11122","o_delivery":"宅配到家","o_address":"台中市南屯區公益路二段51號","o_pay":"貨到付款","o_total":1520,"o_card_number":null,"o_card-date":null,"o_card_name":null,"o_invoice":"二聯式","o_number":null,"o_remark":"放置警衛室","o_delete":"Y"},
        ]
    }
    render() {
        return (
            <div className='orderList-item' >
            {
                this.state.productList.map((item, index) =>
                
                    <table className="orderList-number" key={index} onClick={() => this.doClick(item.o_id)}>
                        <tbody>
                            <tr className="orderList-number-tr">
                                <td className="orderList-number-td1_1"> 周邊訂單編碼/&nbsp; {item.o_id}</td>
                            </tr>
                            <tr className="orderList-number-tr2">
                            <td className="orderList-number-td2_1">訂單日期/&nbsp; {item.o_date}</td>                                           
                                <td >訂購金額/&nbsp; {item.o_total}元</td>   
                                <td >寄送方式/&nbsp; {item.o_delivery}</td>                            
                                <td className="orderList-number-td2_2">付款方式/&nbsp;{item.o_pay}</td>
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
          const url = `http://localhost:8000/member/orderList/productlist/${result.data.user}`;
          const fromServer = await axios.get(url);
          const newState = { ...this.state };
          newState.productList = fromServer.data.map((item) => {
            const date = new Date(item.o_date);
            // const formattedDate = date.toLocaleDateString();
            const formattedDate = date.toLocaleString(); // 格式化为日期和時間
            return { ...item, o_date: formattedDate };
          });
          this.setState(newState);
        } catch (error) {
          console.error(error);
        }
      }
}

export default Productlist;