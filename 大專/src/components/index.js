
import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import logo from '../images/home/logo2.png';
// import Home from './home.js';
// import Story from '../story/story.js';

class Index extends Component {
    state = {
        isLoggedIn: false,
    }
    componentDidMount() {
        axios.get('http://localhost:8000/login', { withCredentials: true }).then((response) => {
            if (response.data.loggedIn) {
                // 用户已登录
                this.setState({ isLoggedIn: true });
            } else {
                // 用户未登录
                this.setState({ isLoggedIn: false });
            }
        });
    }
    render() {
        return (

            <nav className="nav">
                <a className='topnav-img ' href="/"><img src={logo} alt="" /></a>
                <div class="topnav" id="myTopnav">
                    <a href="/news" className='nav-t'>最新消息</a>
                    <a href="/story" className='nav-t'>品牌故事</a>
                    <a href="/menu" className='nav-t'>飲品菜單</a>
                    <a href="/product" className='nav-t'>周邊選購</a>
                    <a href="/store" className='nav-t'>門市據點</a>
                    {/* <a href="/contact" className='nav-t'>聯絡我們</a> */}
                    <a href="/order" className='nav-t'>線上訂餐</a>
                </div>

                <adiv className="navLogin">
                    {this.state.isLoggedIn ? (
                        <div >
                            <span><span className="navLogin-a" onClick={this.handleLogoutClick} >登出</span></span>
                            <span><a className="navLogin-a" href="/member/edit"><FontAwesomeIcon icon={faUser} />會員資料</a></span>
                        </div>) : (
                        <div><a className="navLogin-a" href="/Login" >登入</a></div>)}

                    <span><a className="navLogin-a" href="/product/step1" ><FontAwesomeIcon icon={faShoppingCart} /></a></span>
                </adiv>
                <div className="navIcon" onClick={this.myFunction} href="#">
                    <FontAwesomeIcon icon={faBars} />
                </div>


            </nav >
        );
    }
    handleLogoutClick = () => {
        axios.post('http://localhost:8000/logout', { withCredentials: true })
            .then(response => {
                //成功回首頁
                window.location.href = '/';
            })
            .catch(error => {
                //錯誤
                console.log(error);
            });
    }
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }




}

export default Index;