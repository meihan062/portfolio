import React, { Component } from 'react';
import '../css/order.css';
import HeartIcon from '../images/order/heart.png';
import AniIcon from '../images/order/ani_icon.png';



class teamJo extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state}>
                    <div className="teamJO" id="teamJO">
                        <div className="teamInfo">
                            <div className="teamTitle"><img src={HeartIcon} className="heart" alt='' />
                                <h1>揪團</h1>
                            </div>
                            <div>
                                <div className="teamBox">
                                    <div className="teamSuss">
                                        
                                        <h2>「<span>小新</span>」&nbsp;成功開團!</h2>
                                        <p>分享團購連結揪好友、家人一起訂購</p>
                                        <img src={AniIcon} alt="" className="TJaniIcon" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="teamPlus">
                                    <a href="/order/friendJo" className="shareJo">
                                        <button className="teamBtnL TMbtnR">
                                            <span>分享團購</span>
                                            <div className="TMborder1 BLbtnR"></div>
                                            </button>
                                    </a>
                                    <br />
                                    <a href="/order/drinkList">
                                        <button className="teamBtnL2 TMbtnR">
                                            <span>開始點餐</span>
                                            <div className="TMborder2 BLbtnR"></div>
                                            </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <br />
                </div>

            </div>
        );
    }
}

export default teamJo;