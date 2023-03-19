import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import EditIcon from '../images/order/edit.png';
import HeartIcon from '../images/order/heart.png';
// import LocaBox from '../components/locaBox';
import Drinktab from './drinktab';
import AniIcon from '../images/order/ani_icon.png';

class GoOrder extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <body>
                <Index />
                <div style={this.state}>
                    <div className='allBB'>
                        <br />
                        <div className='goimSection'>
                            <a href="/order/fullJo" className="joGroup">
                                <button className="gobtnXL gobtnR">
                                    <span><img src={HeartIcon} alt="" />揪團</span>
                                    <div className="goborder gobtnR"></div>
                                </button>
                            </a>
                            <br />
                            <div className="contentBox1">
                                <div className="goContentBox">
                                    <div className="contentIn">
                                        <button className="gobtnM ">
                                            <span>外送:</span>&nbsp;&nbsp;<span>台中市南屯區公益路二段51號18樓</span>
                                            <img src={EditIcon} alt="" />
                                            <div className="border gobtnR"></div>
                                        </button>
                                        <button className="gobtnM ">
                                            <span>取餐時間:</span>&nbsp;&nbsp;<span>2023/03/14 下午01:00</span>
                                            <img src={EditIcon} alt="" />
                                            <div className="border gobtnR"></div>
                                        </button>
                                    </div>
                                    <br />
                                    <div className="list">
                                        <br />
                                        <a href="/order/billList">
                                            <button className="gobtnL gobtnR">
                                                <img src={AniIcon} alt="" className="ani_icon" />
                                                <span>訂購清單</span>
                                                <div className="border gobtnR"></div>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="goGotab">
                        <Drinktab />
                        </div>
                    </div>
                    
                </div>
                <Footer />
            </body>
        );
    }
}

export default GoOrder;