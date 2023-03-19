import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import drinkA from '../images/order/A.png';
import BackTo from '../images/order/back.png';
import DrinkMenu from './drinkMenu';
import FollowList from './followList';


class DrinkList extends Component {
    state = {
    }
    render() {
        return (
            <div className="allBB">
                <Index />
                <div style={this.state}>
                    <div>
                    <FollowList />
                        <div className="dkcontentBox goimSection">
                            <div className="dkcontentBox1">
                                <img src={drinkA} alt="" className="hereDrink shakeMe" />
                                <div className="contentInD">
                                    <h2>茗品系列</h2>
                                    <p>鮮熱茶汁，濃郁醇厚，搭配半月型自製衛生冰塊，堅持以調酒杯現場手工沖泡、調製。</p>
                                    <a href="/order/goOrder">
                                        <button className="dkbtnM dkbtnR">
                                            <img src={BackTo} alt="" />
                                            &nbsp;
                                            <span className='hiBack'>返回</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    <DrinkMenu />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                <Footer />
            </div>
        );
    }
}

export default DrinkList;