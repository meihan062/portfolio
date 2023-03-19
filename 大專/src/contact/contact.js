import React, { Component } from 'react';

import Index from '../components/index.js';
import Footer from '../components/footer.js';
import FileUploader from './FileUploader.js';

import '../css/contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
            name: '', email: '', tel: '', subject: '', message: '', file: null
        };
        this.defaultOpenRef = React.createRef();
    }

    handleClearForm = () => {
        window.location.reload()
        // this.setState({
        //     name: '',
        //     email: '',
        //     tel: '',
        //     subject: '',
        //     message: '',
        //     file: null
        // });
        // const inputs = document.querySelectorAll("input[type='text'], input[type='tel'], input[type='email'], textarea");
        // inputs.forEach(input => input.value = '');
        // alert('已送出');
    }


    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <div className='setHeight'>
                    <Index />
                </div>


                <div className="topSize">
                    <div className='topText'>
                        <h2>聯絡我們</h2>
                    </div>
                </div>

                <div className="twoBtns tab">
                    <button
                        ref={this.defaultOpenRef}
                        className={`${activeTab === "tab1" ? "active" : ""}`}
                        onClick={evt => this.openIt(evt, "tab1")}
                        id="defaultOpen"
                    >
                        聯絡我們
                    </button>
                    <button
                        className={`${activeTab === "tab2" ? "active" : ""}`}
                        onClick={evt => this.openIt(evt, "tab2")}
                    >
                        加盟專區
                    </button>
                </div>

                <div className="tabcontent"
                    style={{ display: activeTab === "tab1" ? "block" : "none" }}
                    id="formMe">

                    <div className="notice">
                        <h4>若有任何服務上的問題及建議、異業合作、媒體採訪等需求，<br />
                            歡迎填寫以下表格，我們會盡快與您聯繫！</h4>
                    </div>


                    <form encType="text/plain" acceptCharset="utf-8">
                        <div className="formFlex">
                            <div className="formLeft">
                                <div className="question">
                                    <label htmlFor="name" className="parallelogram">姓名</label> 
                                    <input type="text" value={this.state.name} 
                                     onChange={(event) => this.setState({ name: event.target.value })}
                                            name="Name" id="nameText" className='nameText' required />
                                </div>

                                <div className="question">
                                    <label htmlFor="tel" className="parallelogram">電話</label> 
                                    <input type="tel" value={this.state.tel}
                                    onChange={(event) => this.setState({ tel: event.target.value })} 
                                            name="Phone" id="telText" className='telText' required />
                                </div>
                                <div className="question">
                                    <label htmlFor="email" className="parallelogram">e-mail</label> 
                                    <input type="email" value={this.state.email}
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                            name="Email" id="emailText" className='emailText' required />
                                </div>
                            </div>
                            <div className="formRight">
                                <div className="question">
                                    <label htmlFor="subject" className="parallelogram">主旨</label> 
                                    <input type="text" value={this.state.subject}  
                                    onChange={(event) => this.setState({ subject: event.target.value })}
                                            name="Subject" id="subText" className='subText' required />
                                </div>
                                <div htmlFor="message" className="question">
                                    <label className="parallelogram">訊息</label> 
                                    <textarea className="msg" cols="16" rows="8"
                                        name="your-message" id="bodyText" required
                                        value={this.state.message} 
                                        onChange={(event) => this.setState({ message: event.target.value })}
                                        ></textarea>
                                </div>
                                <FileUploader />
                            </div>
                        </div>
                        <div className="question">
                            {/* <input type="button" value="確認送出" className="submitBtn" />
                            <p id="mailTo"></p> */}
                            <button type="button" onClick={this.handleClearForm} className="submitBtn">確認送出</button>
                        </div>


                    </form>
                </div>


                <div className="tabcontent"
                    style={{ display: activeTab === "tab2" ? "block" : "none" }}
                    id="franchiseMe">
                    <div className="intro">
                        <h3>&emsp;&emsp;清心福全自1987年創立迄今，不斷力求精進、創新，口碑不凡，商譽卓著，備受消費者的喜愛、肯定與支持，
                            為台灣手搖茶飲無與倫比的領導品牌。目前店遍布全台，店數穩定成長，為台灣最大連鎖手搖茶飲體系；
                            而為推廣服務各地消費者，定期舉辦說明會，竭誠歡迎認同清心福全品牌的人士加入我們的體系，
                            清心福全與您攜手穩健創業、永續經營！</h3>
                    </div>

                    <div className="franchise">
                        <div className="franchiseFlex">
                            <div>
                                <h2>說明會資訊</h2>
                                <h3>舉辦日期：2023年2月15日（三）</h3>
                                <h3>舉辦地點：台南市北區育德路520號</h3>
                                <h3>服務專線：0917-506776</h3>
                            </div>
                            <div><img src={require("../images/contact/franchise/franchise01.jpg")} alt="" /></div>
                        </div>
                        <div>
                            <h4>*有意參加說明會者，煩請事先撥打服務專線0917506776預約；<br />
                                &nbsp;&nbsp;參加者以二人為原則，並請持身分證到場與會。</h4>
                        </div>
                    </div>


                    <div className="franchiseArea">
                        <div>
                            <h2>開放地區</h2>
                        </div>
                        <div className="diams">
                            <div>&diams;</div>
                            <div>&diams;</div>
                        </div>
                        <div className="areaInfo">
                            <div>
                                <h3>1.彰化以南開放<br />
                                    &nbsp;（視原有店分布現況評估設點）</h3>
                            </div>
                            <div>
                                <h3>2.台中（含）以北暫不開放</h3>
                            </div>
                        </div>
                    </div>


                    <div className="franchiseTerm">
                        <div>
                            <h2>相關資格與條件</h2>
                        </div>
                        <ul className="termColor">
                            <li>負責人年齡以20至35歲為佳。</li>
                            <li>負責人與搭檔宜具備服務熱誠、創業衝勁，且能刻苦耐勞、親力親為。</li>
                            <li>負責人與搭檔可為夫妻、兄弟姊妹或其他親朋好友。</li>
                            <li>有意之負責人與搭檔均須參加說明會。</li>
                            <li>負責人與搭檔須接受600小時以上之培訓，培訓地點為台南市。</li>
                        </ul>
                    </div>
                    <br />
                </div>






                <Footer />

            </div>
        );
    }

    // { 兩區域切換 }
    openIt = (evt, two) => {
        this.setState({
            activeTab: two
        });
    }
    // { 預設開啟 }
    componentDidMount() {
        this.setState({
            activeTab: "tab1"
        });
        this.defaultOpenRef.current.click();
    }



    }

export default Contact;