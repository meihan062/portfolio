import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import Index from '../components/index.js';
import Member from '../components/member.js';
import PassWord from '../components/password.js';
import OderList from '../components/orderlist.js';
import Footer from '../components/footer.js';
import MemberBarBg from '../images/home/data_bg.jpg';


class MemberBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <div><Index /></div>
                <div className='dataBg'>
                <img src={MemberBarBg} alt=''></img>
                </div>
                <div className="dataDiv">
                    <div className="dataMenu">
                        <a className="dataMenu-d " href="/member/edit">會員資料</a>
                        <a className="dataMenu-d " href="/member/orderList/drinklist">歷史訂單</a>
                        <a className="dataMenu-d " href="/member/password">變更密碼</a>
                    </div>
                    <BrowserRouter>
                    <div className="dataImg">
                        <Switch>
                            <Route path="/member/edit" component={Member} exact />
                            <Route path="/member/password" component={PassWord} exact />
                            <Route path="/member/orderList/:id" component={OderList} exact />
                        </Switch>
                    </div>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MemberBar;