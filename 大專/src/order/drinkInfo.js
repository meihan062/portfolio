import React, { Component } from 'react';
import '../css/order.css';
import drinkA1 from '../images/order/A1.png';
import closeBtn from '../images/order/cancel.png';



class DrinkInfo extends Component {
    state = {
        'paddingTop': '100px',
    }
    render() {
        return (
            <div>
                <div style={this.state}>
                    
                    <div className="drinkscreen">
                        <div className="infoBox">
                            <div className="boxDrinks">
                                <a href="/order/drinkList" className="drinkClose"><img src={closeBtn} alt="" /></a>
                                <div className="drinkHere">
                                    <div className="imgDrink">
                                        <img src={drinkA1} alt="" />
                                    </div>
                                    <div className="drinkHold">
                                        <div className="drinkTitle">
                                            <h2>烏龍綠茶</h2>
                                        </div>
                                        <div className="drinkCount">
                                            <div className="lCup">
                                                <h3>L<p>$30</p></h3>
                                            </div>
                                            <br />
                                            <div className="mCup">
                                                <h3>M<p>$25</p></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="drinkin">
                                <p>
                                    澄澈的黃褐色茶湯，入口清新芳香、甘醇渾厚，微有炭燒味，回甘馥郁而綿長。
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                
            </div>
        );
    }
}

export default DrinkInfo;