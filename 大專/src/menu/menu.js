import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';



class Menu extends Component {
    state = {

    }


    render() {
        return (
            <div>
                <Index />
                <div className="allMenuArea">
                    <div className="titleArea">
                        <div className="titlesText">全部飲品</div>
                    </div>
                    <div className="menuArea">
                        <div className='MTmenu'>
                            <div className='MTmenuTitleArea'>
                                <a href="/menu/MTSerious">
                                    <div className='MTmenuTitle'>
                                        奶茶系列<br />奶茶推薦
                                    </div>
                                </a>
                            </div>
                            <div className='MTmenuContent'>
                                <ul>
                                    <li>粉條奶茶</li>
                                    <li>茶凍奶綠</li>
                                    <li>珍珠奶茶</li>
                                    <li>錫蘭奶紅</li>
                                    <li>烏龍奶茶</li>
                                    <li>特級奶綠</li>
                                    <li>仙草凍奶茶</li>
                                    <li>椰果奶茶</li>
                                    <li>布丁奶茶</li>
                                    <li>暗黑水晶奶茶</li>
                                    <li>蜂蜜奶茶</li>
                                    <li>芝麻奶茶</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Tmenu'>
                            <div className='TmenuTitleArea'>
                                <a href="/menu/TSerious">
                                    <div className='TmenuTitle'>
                                        茗品系列
                                    </div>
                                </a>
                            </div>
                            <div className='TmenuContent'>
                                <ul>
                                    <li>烏龍綠茶</li>
                                    <li>特級綠茶</li>
                                    <li>錫蘭紅茶</li>
                                    <li>極品菁茶</li>
                                    <li>原鄉四季</li>
                                    <li>特選普洱</li>
                                    <li>翡翠烏龍</li>
                                    <li>嚴選高山茶</li>
                                </ul>
                            </div>
                        </div>
                        <div className='TTmenu'>
                            <div className='TTmenuTitleArea'>
                                <a href="/menu/TTSerious">
                                    <div className='TTmenuTitle'>
                                        鮮奶系列<br />拿鐵系列
                                    </div>
                                </a>
                            </div>
                            <div className='TTmenuContent'>
                                <ul>
                                    <li>粉條紅茶拿鐵</li>
                                    <li>茉綠茶凍拿鐵</li>
                                    <li>紅茶拿鐵</li>
                                    <li>珍珠紅茶拿鐵</li>
                                    <li>珍珠蜂蜜鮮奶普洱</li>
                                    <li>頂級可可拿鐵</li>
                                    <li>鮮奶冬瓜</li>
                                    <li>粉圓鮮奶茶</li>
                                    <li>珍珠芝麻紅茶拿鐵</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;