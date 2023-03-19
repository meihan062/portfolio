import React, { Component } from 'react';
import AniIcon from '../images/order/ani_icon.png';
import '../css/order.css';


class FollowList extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state}>
                    <div className='taTA'>
                    <a href="/order/billList" className="followMe">
                        <div className="followMylist" >
                            <img src={AniIcon} alt="" />
                         <div className='hiHide'><p className="followText">訂購清單</p></div>  
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FollowList;