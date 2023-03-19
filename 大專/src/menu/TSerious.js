import React, { Component } from 'react';
import '../css/index.css';
import "../css/drinks.css";
import Index from '../components/index.js';
import 烏龍綠茶 from '../images/drink/T/烏龍綠茶.png';
import 特級綠茶 from '../images/drink/T/特級綠茶.png';
import 錫蘭紅茶 from '../images/drink/T/錫蘭紅茶.png';
import 極品菁茶 from '../images/drink/T/極品菁茶.png';
import 原鄉四季 from '../images/drink/T/原鄉四季.png';
import 特選普洱 from '../images/drink/T/特選普洱.png';
import 翡翠烏龍 from '../images/drink/T/翡翠烏龍.png';
import 嚴選高山茶 from '../images/drink/T/嚴選高山茶.png';
import axios from 'axios';



class TSerious extends Component {
    state = {
        drinks: []
    }

    async componentDidMount() {
        var a = "茗品系列";
        var url = `http://localhost:8000/menu/${a}`;
        var fromServer = await axios.get(url);
        console.log(fromServer.data);
        this.setState({ drinks: fromServer.data });

        // // 滑鼠滑動功能
        // window.on('mousewheel', function (event) {
        //     // check if the user is scrolling up
        //     if (event.originalEvent.wheelDelta >= 0) {
        //         // navigate back to the previous page
        //         window.history.back();
        //     }
        // });

    }
    async componentDidUpdate() {

        document.getElementById("T01").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 烏龍綠茶;

        })
        document.getElementById("T02").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 特級綠茶;

        });
        document.getElementById("T03").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 錫蘭紅茶;

        });
        document.getElementById("T04").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 極品菁茶;

        });
        document.getElementById("T05").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 原鄉四季;

        });
        document.getElementById("T06").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 特選普洱;

        });
        document.getElementById("T07").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 翡翠烏龍;

        });
        document.getElementById("T08").addEventListener('mouseenter', (event) => {

            document.getElementById("imgtest").src = 嚴選高山茶;

        });

    }

    render() {
        return (
            <div>
                <Index />
                <div className='allMenuArea'>
                    <div className='drinksPicture'>
                        <img id="imgtest" src="" alt='' />
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
                            <div className="drinktitlesText">茗品系列</div>
                        </div>
                        <div className="drinks_menu">
                            <div className="cell_drinkList">
                                {this.state.drinks.map(drink => (
                                    <div id={drink.pid} className="cell">
                                        <div className="cell_drink_title_one">
                                            {drink.pname}
                                        </div>
                                        <div className="cell_line"></div>
                                        <div className="cell_drink_note">
                                            {drink.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='SeriousBtn1Area'>
                        <a href="/menu/MTSerious">
                            <div className='SeriousBtn1'>
                                奶茶系列<br />奶茶推薦
                            </div>
                        </a>
                    </div>
                    <div className='SeriousBtn2Area'>
                        <a href="/menu/TTSerious">
                            <div className='SeriousBtn2'>
                                鮮奶系列<br />拿鐵系列
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TSerious;