import React, { Component } from 'react';
import '../css/order.css';
import AniIcon from '../images/order/ani_icon.png';

class BillList extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state}>
                    <div className="billScreen">
                        <div className="billBox">
                            <div className="BLaniCon">
                                <img src={AniIcon} alt="" />
                                <h1>訂購清單</h1>
                            </div>
                            <pre className="billBg">
                                <div><h1>小新的團訂</h1></div>
                                <div><h3>小新</h3></div>
                                <div className="choiceName">
                                    <h4>烏龍綠茶</h4>
                                    <br />
                                    <p> L /半糖 /微冰 / 加珍珠  *2   $80
                                    </p>

                                </div>
                                <div><h3>小白</h3></div>
                                <div className="choiceName">
                                    <h4>烏龍綠茶</h4>
                                    <br />
                                    <p> L /無糖 /去冰 / 加珍珠 *1   $40</p>
                                </div>
                                <div><h3>風間</h3></div>
                                <div className="choiceName">
                                    <h4>布丁奶茶</h4>
                                    <br />
                                    <p> L /全糖 /微冰  *1   $55</p>
                                </div>
                                <div><h3>阿呆</h3></div>
                                <div className="choiceName">
                                    <h4>冰淇淋紅茶</h4>
                                    <br />
                                    <p> L /微糖 /正常冰  *1   $50</p>
                                </div>
                                <br /><br />
                                <div className="billHr"></div>
                                <br /><br />
                                <div className="comeLeft">
                                    <pre className='strawNbag'>
                                        <div className="straw">
                                            <h4>吸管</h4>
                                            <label className="cl-switch">
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </div>
                                        <div className="bag">
                                            <h4>塑膠袋</h4>
                                            <label className="cl-switch">
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </div>
                                        <div className="payHowto">
                                            <h4>付款方式</h4>
                                            <select>
                                                <option>請選擇付款方式</option>
                                                <option>現金</option>
                                                <option>刷卡</option>
                                            </select>
                                        </div>
                                    </pre>
                                </div>
                                <div className='getGet'>
                                    <div className="getHowto">
                                        <h4>取餐方式</h4>
                                        <div className='getToWhere'>
                                             <span>外送</span>
                                            /<span>台中市南屯區公益路二段51號18樓</span>
                                        </div>
                                    </div>
                                    <div className="timeWhen">
                                        <h4>取餐時間</h4>
                                        <span>2023/03/14 下午01:00</span>
                                    </div>
                                </div>
                                <div className='payPay'>

                                    <div className="payNumber">
                                        <h4>應付金額<span>$225</span></h4>
                                    </div>

                                </div>
                                <br />

                            </pre>
                            <div className="billBtn ">
                                <a href="/order/goOrder" className="BLbtnR BtnA">
                                    <button className="BLbtnR BLbtnM">
                                        <p>繼續加點</p>
                                        <div className="BLborder BLbtnR"></div>
                                    </button>
                                </a>
                                <a href="/order/billAll" className="BLbtnR">
                                    <button className="BLbtnR BLbtnM1">
                                        <p>送出訂單</p>
                                        <div className="BLborder1 BLbtnR"></div>
                                    </button>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BillList;