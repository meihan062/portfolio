import React, { Component } from 'react';
import axios from "axios";
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';


import img1 from '../images/product/A001blue.png';
// import img2 from '../images/product/4.png';


class productCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 3,
            length: document.getElementsByClassName("product").length,
            userItem: {},
        };
    }
    // state = {
    // }
    style = {
        display: 'grid'
    }

    async componentDidMount() {
        // 取得會員資料
        const result = await axios.get('http://localhost:8000/login');
        const userId = result.data.user;
        const url = `http://localhost:8000/member/${userId}`;
        const response = await axios.get(url);
        const userItem = response.data;
        this.setState({ userItem });
    }


    render() {
        const { currentPage } = this.state;
        const step1ClassName = currentPage >= 1 ? 'StepColor' : 'StepColor2';
        const step2ClassName = currentPage >= 2 ? 'StepColor' : 'StepColor2';
        const step3ClassName = currentPage >= 3 ? 'StepColor' : 'StepColor2';
        const step1NameClassName = currentPage >= 1 ? 'StepNameColor' : 'StepNameColor2';
        const step2NameClassName = currentPage >= 2 ? 'StepNameColor' : 'StepNameColor2';
        const step3NameClassName = currentPage >= 3 ? 'StepNameColor' : 'StepNameColor2';


        const value = localStorage.getItem('type');
        const productName = localStorage.getItem('name');
        const productNum = localStorage.getItem('num');
        const productPrice = localStorage.getItem('price');

        const receiveName = localStorage.getItem('receiveName');
        const receiveTel = localStorage.getItem('receiveTel');
        const address = localStorage.getItem('address');
        const comment = localStorage.getItem('comment');
        const orderPrice = localStorage.getItem('orderPrice');
        const orderFreight = localStorage.getItem('orderFreight');
        const orderTotal = localStorage.getItem('orderTotal');
        const orderId = localStorage.getItem('orderId');
        const orderTime = localStorage.getItem('orderTime');
        const deliveryType = localStorage.getItem('deliveryType');
        const payType = localStorage.getItem('payType');
        const invoiceType = localStorage.getItem('invoiceType');
        const shopAddress = localStorage.getItem('shopAddress');

        const { userItem } = this.state;
        return (
            <body className='BodyProduct'>
                <Index />
                <Step StepColor1={step1ClassName} StepColor2={step2ClassName} StepColor3={step3ClassName} StepNameColor1={step1NameClassName} StepNameColor2={step2NameClassName} StepNameColor3={step3NameClassName}/>
                <div className="ProductCheckContent">
                    <div className="ProductCheckProduct">
                        <div className="ProductCheckInfo">
                            <img src={img1} className="ProductCheckImg" alt=''/>
                            <p className='ProductCheckInfoP'>
                                {productName}
                                <br />
                                款式 : {value}
                                <br />
                                數量 : {productNum}
                            </p>
                            <div className="ProductCheckPrice">
                                <p className='ProductCheckPriceP'>{productPrice}</p>
                            </div>
                        </div>
                        <hr className='separate4' />
                        <div className="ProductCheckTotal">
                            <div className='ProductCheckTotalDiv ProductCheckTotal1'>
                                <h4 className='ProductCheckTotalTitle'>小計:</h4>
                                <p>{orderPrice}</p>
                            </div>
                            <div className='ProductCheckTotalDiv ProductCheckTotal2'>
                                <h4 className='ProductCheckTotalTitle'>運費:</h4>
                                <p>{orderFreight}</p>
                            </div>
                            <div className='ProductCheckTotalDiv ProductCheckTotal3'>
                                <h4 className='ProductCheckTotalTitle'>總計:</h4>
                                <p>{orderTotal}</p>
                            </div>
                        </div>
                    </div>

                    <form className="ProductCheckInformation">
                        <fieldset className='ProductCheckFieldset'>
                            <legend className='ProductCheckLegend'>訂單資料</legend>
                            <div className='ProductCheckData1'>
                                <h4 className='ProductCheckH4'>訂單編號</h4>
                                <p className='ProductCheckP'>{orderId}</p>
                            </div>
                            <div className='ProductCheckData2'>
                                <h4 className='ProductCheckH4'>訂單完成時間</h4>
                                <p className='ProductCheckP'>{orderTime}</p>
                            </div>
                            <div className='ProductCheckData3'>
                                <h4 className='ProductCheckH4'>訂購人姓名</h4>
                                <p className='ProductCheckP'>{userItem.mname}</p>
                            </div>
                            <div className='ProductCheckData4'>
                                <h4 className='ProductCheckH4'>訂購人電話</h4>
                                <p className='ProductCheckP'>{userItem.mtel}</p>
                            </div>
                            <div className='ProductCheckData5'>
                                <h4 className='ProductCheckH4'>收購人姓名</h4>
                                <p className='ProductCheckP'>{receiveName}</p>
                            </div>
                            <div className='ProductCheckData6'>
                                <h4 className='ProductCheckH4'>收購人電話</h4>
                                <p className='ProductCheckP'>{receiveTel}</p>
                            </div>
                            <div className='ProductCheckData7'>
                                <h4 className='ProductCheckH4'>運送方式</h4>
                                <p className='ProductCheckP'>{deliveryType}</p>
                            </div>
                            <div className='ProductCheckData8'>
                                <h4 className='ProductCheckH4'>地址</h4>
                                <p className='ProductCheckP'>{address}{shopAddress}</p>
                            </div>
                            <div className='ProductCheckData9'>
                                <h4 className='ProductCheckH4'>付款方式</h4>
                                <p className='ProductCheckP'>{payType}</p>
                            </div>
                            <div className='ProductCheckData10'>
                                <h4 className='ProductCheckH4'>發票開立方式</h4>
                                <p className='ProductCheckP'>{invoiceType}</p>
                            </div>
                            <div className='ProductCheckData11'>
                                <h4 className='ProductCheckH4'>備註</h4>
                                <p className='ProductCheckP'>{comment}</p>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <br />
                {/* <center><button className="FormDeleteBtn" onclick="deleteOrder()">取消訂單</button></center> */}
                <Footer />
            </body>
        );
    }
}


export default productCheck;