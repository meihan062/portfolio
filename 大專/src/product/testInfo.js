import React, { Component } from 'react';
import axios from "axios";
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';

import img1 from "../images/product/A001blue.png";



class TestInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '', // 選取的option值
            DeliveryBr: false,
            PayBr: false,
            InvoiceBr: false,
            currentPage: 2,
            TheNameValue: "",
            TheTelValue: "",
            TheAddressValue: "",
            TheCommentValue: "",
            userItem: {}
        };
        this.DeliveryChange = this.DeliveryChange.bind(this); // 綁定DeliveryChange方法
        this.PayChange = this.PayChange.bind(this); // 綁定PayChange方法
        this.InvoiceChange = this.InvoiceChange.bind(this); // 綁定InvoiceChange方法
    }

    Style = {
        display: "none"
    }


    async componentDidMount() {
        const productPrice = localStorage.getItem('price');
        var Total = document.getElementsByClassName("ProductInfoTotalP3")[0];
        var freight = document.getElementsByClassName("ProductInfoTotalP2")[0].innerHTML;
        var price = parseInt(productPrice.substring(4));
        var newfreight = parseInt(freight.substring(4));
        var a = price + newfreight;
        Total.innerHTML = "NT$ " + a;


        // 取得會員資料
        const result = await axios.get('http://localhost:8000/login');
        const userId = result.data.user;
        const url = `http://localhost:8000/member/${userId}`;
        const response = await axios.get(url);
        const userItem = response.data;
        this.setState({ userItem });
    }

    // 運送方式選擇
    DeliveryChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        var addressHome = document.getElementsByTagName("input")[4];
        var newStyle = { ...this.Style };
        newStyle.display = "block"
        // var addressShop = document.getElementsByTagName("input")[5];
        if (event.target.value === "no") {
            alert("請選擇運送方式");
        } else if (event.target.value === "home") {
            // 宅配到家
            addressHome.setAttribute("style", newStyle);
            this.setState({ DeliveryBr: true, });
        } else {
            // 就近取貨
            addressHome.setAttribute("style", newStyle);
            addressHome.setAttribute("value", "台中公益店 - 台中市公益路二段51號");
            addressHome.setAttribute("readonly", "true");
            this.setState({ DeliveryBr: true, });
        }

    }

    // 付款方式選擇
    PayChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        // var cash = document.getElementsByTagName("input")[6];
        var card = document.getElementsByTagName("input")[7];
        var cardDate = document.getElementsByTagName("input")[8];
        var cardCvv = document.getElementsByTagName("input")[9];
        var newStyle = { ...this.Style };
        newStyle.display = "block";
        if (event.target.value === "no") {
            alert("請選擇付款方式");
        } else if (event.target.value === "cash") {
            // 現金
            // cash.setAttribute("style", newStyle);  
        } else {
            // 信用卡
            card.setAttribute("style", newStyle);
            cardDate.setAttribute("style", newStyle);
            cardCvv.setAttribute("style", newStyle);
            this.setState({ PayBr: true, });
        }
    }


    // 發票開立方式選擇
    InvoiceChange(event) {
        this.setState({ selectedOption: event.target.value }); // 更新selectedOption為選取的option值
        var invoice = document.getElementsByTagName("input")[10];
        var newStyle = { ...this.Style };
        newStyle.display = "block"
        // var addressShop = document.getElementsByTagName("input")[5];
        if (event.target.value === "no") {
            alert("請選擇發票開立方式");
        } else if (event.target.value === "two") {
            // 二聯式
            // invoice.setAttribute("style", newStyle);
        } else if (event.target.value === "three") {
            // 三聯式
            invoice.setAttribute("style", newStyle);
            invoice.setAttribute("placeholder", "發票格式: 12345678");
            this.setState({ InvoiceBr: true, });
        } else {
            // 手機載具
            invoice.setAttribute("style", newStyle);
            invoice.setAttribute("placeholder", "載具格式: /AB1AB12");
            this.setState({ InvoiceBr: true, });
        }
    }



    Step(n) {
        if (n === 1) {
            window.location.href = "/product";
        } else {
            window.location.href = "/product/step3";
        }
    }

    TheName(n) {
        this.setState({ TheNameValue: n }); // 更新TheNameValue為王小新
        localStorage.setItem('orderName', n );
        // console.log(n);
    }

    TheTel(n) {
        this.setState({ TheTelValue: n }); // 更新TheTelValue為0912345678
    }
    TheAddress(n) {
        this.setState({ TheAddressValue: n }); // 更新TheAddressValue為台中市台灣大道100號
    }

    TheComment(n) {
        this.setState({ TheCommentValue: n }); // 更新TheCommentValue為放在警衛室
    }


    // test() {
    //     var test = document.getElementsByClassName("ProductInfoInput")[2];
    //     console.log(this.state.TheNameValue);
    // }

    render() {
        const { currentPage } = this.state;
        const step1ClassName = currentPage >= 1 ? 'StepColor' : 'StepColor2';
        const step2ClassName = currentPage >= 2 ? 'StepColor' : 'StepColor2';
        const step3ClassName = currentPage >= 3 ? 'StepColor' : 'StepColor2';
        const step1NameClassName = currentPage >= 1 ? 'StepNameColor' : 'StepNameColor2';
        const step2NameClassName = currentPage >= 2 ? 'StepNameColor' : 'StepNameColor2';
        const step3NameClassName = currentPage >= 3 ? 'StepNameColor' : 'StepNameColor2';



        // 收購人姓名和電話
        // var receive_name = document.getElementsByTagName("input")[2];
        // var receive_tel = document.getElementsByTagName("input")[3];

        const value = localStorage.getItem('type');
        const productName = localStorage.getItem('name');
        const productNum = localStorage.getItem('num');
        const productPrice = localStorage.getItem('price');


        const { userItem } = this.state;
        return (
            <body className='BodyProduct'>
                <Index />
                <Step StepColor1={step1ClassName} StepColor2={step2ClassName} StepColor3={step3ClassName} StepNameColor1={step1NameClassName} StepNameColor2={step2NameClassName} StepNameColor3={step3NameClassName} />
                <div className="ProductInfoContent">
                    <div className="ProductInfoProduct">
                        <div className="ProductInfo">
                            <img src={img1} alt="" className='ProductInfoImg' />
                            <p className='ProductInfoP'>
                                {productName}
                                <br />
                                款式 : {value}
                                <br />
                                數量 : {productNum}
                            </p>
                        </div>
                        <div className="ProductInfoPrice">
                            <h4 className='ProductInfoPriceTitle'>商品總價:</h4>
                            <p className='ProductInfoPriceP'>{productPrice}</p>
                        </div>
                        <hr className='separate3' />
                        <div className="ProductInfoTotal">
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle1'>小計:</h4>
                                <p className='ProductInfoTotalP1'>{productPrice}</p>
                            </div>
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle2'>運費:</h4>
                                <p className='ProductInfoTotalP2'>NT$ 100</p>
                            </div>
                            <div className='ProductInfoTotalDiv'>
                                <h4 className='ProductInfoTotalTitle3'>總計:</h4>
                                <p className='ProductInfoTotalP3'></p>
                            </div>
                        </div>
                    </div>
                    <form className="ProductInfoInformation">
                        <fieldset className="ProductInfoOrder ProductInfoFieldset">
                            <legend className='ProductInfoLegend'>訂購人資料</legend>
                            <text className='ProductInfoInputTitle'>姓名 </text>
                            {/* ip0 */}
                            <input type="text" className='ProductInfoInput' value={userItem.mname} readOnly />
                            <br /><br />
                            <text className='ProductInfoInputTitle'>電話 </text>
                            {/* ip1 */}
                            <input type="tel" pattern="[0-9]{10}" className='ProductInfoInput' value={userItem.mtel} readOnly />
                        </fieldset>
                        <br />
                        <fieldset className="ProductInfoReceive ProductInfoFieldset">
                            <legend className='ProductInfoLegend'>收購人資料</legend>
                            <text className='ProductInfoInputTitle'>姓名 </text>
                            {/* ip2 */}
                            <input type="text" className='ProductInfoInput' value={this.state.TheNameValue} onClick={this.TheName.bind(this, "王小新")} />
                            <br /><br />
                            <text className='ProductInfoInputTitle'>電話 </text>
                            {/* ip3 */}
                            <input type="tel" pattern="[0-9]{10}" className='ProductInfoInput' value={this.state.TheTelValue} onClick={this.TheTel.bind(this, "0912345678")} />
                            <br /><br />
                            <text className='ProductInfoInputTitle'>運送方式 </text>
                            {/* <br /> */}
                            <select name="ProductInfoDelivery" onChange={this.DeliveryChange} className="ProductInfoSelect">
                                <option value="no">請選擇運送方式</option>
                                <option className="home" value="home">宅配到家</option>
                                <option value="shop">就近取貨</option>
                            </select>
                            <br /><br />
                            {/* 4 */}
                            <input type="text" className="home ProductInfoInput ProductInfoSelectInput" placeholder="請輸入地址" style={this.Style} value={this.state.TheAddressValue} onClick={this.TheAddress.bind(this, "台中市台灣大道100號")} />
                            {/* 5 */}
                            <input type="text" className="shop ProductInfoInput ProductInfoSelectInput" style={this.Style} />
                            {this.state.DeliveryBr && <br />}
                            {this.state.DeliveryBr && <br />}
                            <text className='ProductInfoInputTitle'>付款方式 </text>
                            {/* <br /> */}
                            <select name="pay" onChange={this.PayChange} className="ProductInfoSelect">
                                <option value="no">請選擇付款方式</option>
                                <option value="cash">現金</option>
                                <option value="card">信用卡</option>
                            </select>
                            <br /><br />
                            {/* 6 */}
                            <input type="text" className="cash ProductInfoInput ProductInfoSelectInput" style={this.Style} />
                            {/* 7 */}
                            <input type="text" className="card ProductInfoInput ProductInfoSelectInput" placeholder="請輸入卡號" style={this.Style} />
                            {/* 8 */}
                            {this.state.PayBr && <br />}
                            <input type="text" className="CardDate ProductInfoInput" placeholder="請輸入到期日" value="08/2024" style={this.Style} />
                            {/* 9 */}
                            {this.state.PayBr && <br />}
                            <input type="text" className="CardCvv ProductInfoInput" placeholder="請輸入交易3碼" value="123" style={this.Style} />
                            {this.state.PayBr && <br />}
                            {this.state.PayBr && <br />}
                            <text className='ProductInfoInputTitle'>發票開立方式 </text>
                            <select name="invoice" onChange={this.InvoiceChange} className="ProductInfoSelect">
                                <option value="no">請選擇發票開立方式</option>
                                <option value="two">二聯式發票</option>
                                <option value="three">三聯式發票</option>
                                <option value="phone">手機載具</option>
                            </select>
                            <br /><br />
                            {/* 10 */}
                            <input type="text" className="1 ProductInfoInput" style={this.Style} />
                            {/* 11 */}
                            <input type="text" className="2 ProductInfoInput" style={this.Style} />
                            {/* 12 */}
                            <input type="text" className="3 ProductInfoInput" placeholder="載具格式: /AB1AB12" style={this.Style} />
                            {this.state.InvoiceBr && <br />}
                            {this.state.InvoiceBr && <br />}
                            <text className='ProductInfoInputTitle'>備註</text>
                            <br />
                            {/* 12 */}
                            <input type="text" className="ProductInfoComment ProductInfoInput" value={this.state.TheCommentValue} onClick={this.TheComment.bind(this, "放在警衛室")} />
                        </fieldset>
                    </form>

                    <div className="ProductInfoBtn">
                        <button className="ProductInfoNext" onClick={this.Step.bind(this, 2)}>送出訂單</button>
                        <button className="ProductInfoShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
                    </div>
                </div>
                <br /><br />
                <button onClick={this.test}>test</button>
                <Footer />
            </body>
        );
    }
}

export default TestInfo;