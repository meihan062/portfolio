import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import 粉條奶茶 from '../images/drink/MT/粉條奶茶.png';
// import AllDriksButton from './allDriksButton.js';
import axios from 'axios';


class MTSerious extends Component {
    state = {
        drinks: []
    }

    async componentDidMount() {
        var a = "奶茶系列奶茶推薦";
        var url = `http://localhost:8000/menu/${a}`;
        var fromServer = await axios.get(url);
        // console.log(fromServer.data);
        this.setState({ drinks: fromServer.data });
    }

    render() {
        return (
            <div>
                <Index />
                <div className='allMenuArea'>
                    <div className='drinksPicture'>
                        <img src={粉條奶茶} alt='' />
                    </div>
                    <div className='toppingArea'>
                        <div className="toppingContent">
                            <div className="topping_title">
                                加料選項
                            </div>
                            <ul className='toppingText'>
                                <li>珍珠</li>
                                <li>粉圓</li>
                                <li>QQ</li>
                                <li>布丁</li>
                                <li>仙草凍</li>
                                <li>暗黑水晶</li>
                                <li>蘆薈</li>
                                <li>冰淇淋</li>
                                <li>茉莉茶凍</li>
                                <li>粉條</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu_area">
                        <div className="drinkTitlesArea">
                            <div className="drinktitlesText">奶茶系列/奶茶推薦</div>
                        </div>
                        <ul className="drinks_menu">
                            <div className="cell_drinkList">
                                {this.state.drinks.map(drink => (
                                    <li key={drink.pid} className="cell">
                                        <div className="cell_drink_title_two">
                                            {drink.pname}
                                        </div>
                                        <div className="cell_line"></div>
                                        <div className="cell_drink_note">
                                            {drink.content}
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>

                    <div>
                        <div className='SeriousBtn1Area'>
                            <a href="/menu/TTSerious">
                                <div className='SeriousBtn1'>
                                    鮮奶系列<br />拿鐵系列
                                </div>
                            </a>
                        </div>
                        <div className='SeriousBtn2Area'>
                            <a href="/menu/TSerious">
                                <div className='SeriousBtn3'>
                                    茗品系列
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MTSerious;