import React, { Component } from 'react';
import '../css/order.css';
import drinkA1 from '../images/order/A1.png';
import drinkA2 from '../images/order/A2.png';
import drinkA3 from '../images/order/A3.png';
import drinkA4 from '../images/order/A4.png';
import drinkA5 from '../images/order/A5.png';
import drinkA6 from '../images/order/A6.png';
import drinkA7 from '../images/order/A7.png';
import drinkA8 from '../images/order/A8.png';
import drinkPlus from '../images/order/plus.png';

class DrinkMenu extends Component {
    state = {}
    render() {
        return (
            <div id="drinksL">
                <div className="tab-content-1L"><br />
                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA1} alt="" className="drinkMeL shakeMe" /></a><br />
                            <a href="/order/AddDrink"><span>烏龍綠茶</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>

                    </div>

                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo" className='drinkNamehold'><img src={drinkA2} alt="" className="drinkMeL shakeMe" /></a><br />
                            <a href="/order/AddDrink"><span>特級綠茶</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>

                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA3} alt="" className="drinkMeL shakeMe" /></a><br />
                            <a href="/order/AddDrink"><span>錫蘭紅茶</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>

                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA4} alt="" className="drinkMeL shakeMe" /></a><br />
                            <a href="/order/AddDrink"><span>極品菁茶</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>

                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA5} alt="" className="drinkMeL shakeMe" /></a><br />
                            <a href="/order/AddDrink"><span>原鄉四季</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>
                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA6} alt="" className="drinkMeL shakeMe" /></a>
                            <a href="/order/AddDrink"><span>特選普洱</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>
                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA7} alt="" className="drinkMeL shakeMe" /></a>
                            <a href="/order/AddDrink"><span>翡翠烏龍</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>
                    <div className="info-d">
                        <table className="drinkAddname">
                            <a href="/order/drinkInfo"><img src={drinkA8} alt="" className="drinkMeL shakeMe" /></a>
                            <a href="/order/AddDrink"><span>嚴高山茶</span><img src={drinkPlus} alt="" className="btnopen" /></a>
                        </table>
                    </div>
                </div>

            </div>

        );
    }
}

export default DrinkMenu;