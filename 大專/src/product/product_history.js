import React, { Component } from 'react';
import '../css/history.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import img1 from '../images/product/A001blue.png';

class ProductHistory extends Component {
    style = {
        paddingTop: "100px"
    }
    render() {
        return (
            <body className='BodyProduct'>
                <Index />
                <div style={this.style}>
                    <center>
                        <h1 className='ProductHistoryTitle'>訂單紀錄</h1>
                    </center>
                    <div className="ProductHistoryContent">
                        <div className="ProductHistoryProduct">
                            <div className="ProductHistoryInfo">
                                <img src={img1} className="ProductHistoryImg" alt='' />
                                <p className='ProductHistoryInfoP'>
                                    雙面飲料提袋
                                    <br />
                                    款式 : 藍色(香吉士、羅賓)
                                    <br />
                                    數量 : 2
                                </p>
                                <div className="ProductHistoryPrice">
                                    <p className="ProductHistoryPriceP">NT$ 560</p>
                                </div>
                            </div>
                            <hr className='separate4' />
                            <div className="ProductHistoryTotal">
                                <div className='ProductHistoryTotalDiv Div1'>
                                    <h4 className='ProductHistoryTotalTitle'>小計:</h4>
                                    <p>NT$ 560</p>
                                </div>
                                <div className='ProductHistoryTotalDiv Div2'>
                                    <h4 className='ProductHistoryTotalTitle'>運費:</h4>
                                    <p>NT$ 100</p>
                                </div>
                                <div className='ProductHistoryTotalDiv Div3'>
                                    <h4 className='ProductHistoryTotalTitle'>總計:</h4>
                                    <p>NT$ 660</p>
                                </div>
                            </div>
                        </div>

                        <form className="ProductHistoryInformation">
                            <fieldset className='ProductHistoryFielset'>
                                <legend className='ProductHistoryLegend'>訂單資料</legend>
                                <div className='ProductHistoryData1'>
                                <h4 className='ProductHistoryH4'>訂單編號</h4>
                                <p className='ProductHistoryP'>20230101123543</p>
                            </div>
                            <div className='ProductHistoryData2'>
                                <h4 className='ProductHistoryH4'>訂單完成時間</h4>
                                <p className='ProductHistoryP'>2023/01/01 12:35:43</p>
                            </div>
                            <div className='ProductHistoryData3'>
                                <h4 className='ProductHistoryH4'>訂購人姓名</h4>
                                <p className='ProductHistoryP'>王小新</p>
                            </div>
                            <div className='ProductHistoryData4'>
                                <h4 className='ProductHistoryH4'>訂購人電話</h4>
                                <p className='ProductHistoryP'>0912345678</p>
                            </div>
                            <div className='ProductHistoryData5'>
                                <h4 className='ProductHistoryH4'>收購人姓名</h4>
                                <p className='ProductHistoryP'>王小新</p>
                            </div>
                            <div className='ProductHistoryData6'>
                                <h4 className='ProductHistoryH4'>收購人電話</h4>
                                <p className='ProductHistoryP'>0912345678</p>
                            </div>
                            <div className='ProductHistoryData7'>
                                <h4 className='ProductHistoryH4'>運送方式</h4>
                                <p className='ProductHistoryP'>宅配到家</p>
                            </div>
                            <div className='ProductHistoryData8'>
                                <h4 className='ProductHistoryH4'>地址</h4>
                                <p className='ProductHistoryP'>台中市台灣大道100號</p>
                            </div>
                            <div className='ProductHistoryData9'>
                                <h4 className='ProductHistoryH4'>付款方式</h4>
                                <p className='ProductHistoryP'>現金</p>
                            </div>
                            <div className='ProductHistoryData10'>
                                <h4 className='ProductHistoryH4'>發票開立方式</h4>
                                <p className='ProductHistoryP'>二聯式發票</p>
                            </div>
                            <div className='ProductHistoryData11'>
                                <h4 className='ProductHistoryH4'>備註</h4>
                                <p className='ProductHistoryP'>放在警衛室</p>
                            </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <br />

                <Footer />
            </body>
        );
    }
}

export default ProductHistory;