import React, { Component } from 'react';
import '../css/order.css';
import drinkA from'../images/order/A.png';
import drinkB from'../images/order/B.png';
import drinkC from'../images/order/C.png';
import drinkD from'../images/order/D.png';
import drinkE from'../images/order/E.png';
import drinkG from'../images/order/G.png';

class Drinktab extends Component {
    state = {}
    render() {
        return (
            <div>
                <span id="tab-1"></span>
                <span id="tab-2"></span>
                <span id="tab-3"></span>
                <span id="tab-4"></span>
                <div id="drinks">
                <ul class="drinksBox">
                <li><a href="/order/drinkList"><img src={drinkA} alt="" /><span>茗品系列</span></a></li>
                <li><a href="#tab-2"><img src={drinkB} alt="" /><span>奶茶系列</span></a></li>
                <li><a href="#tab-3"><img src={drinkC} alt="" /><span>拿鐵系列</span></a></li>
                <li><a href="#tab-4"><img src={drinkD} alt="" /><span>特調系列</span></a></li>
                <li><a href="#tab-5"><img src={drinkE} alt="" /><span>鮮果系列</span></a></li>
                <li><a href="#tab-7"><img src={drinkG} alt="" /><span>優多系列</span></a></li>
            </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            
            
        );
    }
}

export default Drinktab;