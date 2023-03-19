import React, { Component } from 'react';
import '../css/order.css';
import drinkA1 from '../images/order/A1.png';
import closeBtn from '../images/order/cancel.png';
import sugar from '../images/order/sugar.png';
import ice from '../images/order/ice.png';
import RangeInput from './RangeInput';
import RangeInputB from './RangeInputB';
import UnitPrice from './unitPrice';




class AddDrink extends Component {
    state = {
        'paddingTop': '100px',
    }
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.sliderChange = this.sliderChange.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    sliderChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="fullScreen" id="fullScreen">
                <div className="drinkInfo">
                    <div className="drinkName">
                        <h2>烏龍綠茶</h2>
                        <a href="/order/drinkList" className="btnCloseA"><img src={closeBtn} alt="" /></a>
                    </div>
                    <div>
                        <div className="drinkBox">
                            <div className="drinkImg">
                                <img src={drinkA1} alt="" />
                            </div>

                            <div className="sugarBar">
                                <img src={sugar} alt="" />
                                <div className="sugarInfo">
                                    <div className="addSugar">
                                        <h2>甜度</h2>
                                        <div className="sugarRang">
                                            <RangeInput min={0} max={8} step={2} />

                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="iceBar">
                                    <img src={ice} alt="" />
                                    <div className="iceugarInfo">
                                        <div className="addIce">
                                            <h2>冰塊</h2>
                                            <div className="iceRang">
                                                <RangeInputB min={0} max={6} step={1} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sizeBox">
                                    <div className="sizeText"><h3>大</h3><h3 className="smallText">小</h3></div>
                                    <div className="drinkSize">
                                        <div className="sizeBack"></div>
                                        <input type="radio" name="size" value="big" className="radio1" />
                                        <input type="radio" name="size" value="small" className="radio2" />
                                    </div>
                                    <div className='webDrink'>
                                        <div className="plusOther">
                                            <h3>加料區</h3>
                                            <p className='textTT'>(&nbsp;加料:10元&nbsp;)</p>
                                            <div className="plusList">
                                                <div>
                                                    <p>珍珠</p>
                                                    <input type="radio" />
                                                </div>
                                                <div>
                                                    <p>粉圓</p>
                                                    <input type="radio" />
                                                </div>
                                                <div>
                                                    <p>椰果</p>
                                                    <input type="radio" />
                                                </div>
                                                <div>
                                                    <p>QQ</p>
                                                    <input type="radio" />
                                                </div>
                                                <div>
                                                    <p>布丁</p>
                                                    <input type="radio" />
                                                </div>
                                                <br />
                                                <div className="xiancou">
                                                    <p>仙草凍</p>
                                                    <input type="radio" />
                                                </div>
                                                <div className="darkbubble">
                                                    <p>暗黑水晶</p>
                                                    <input type="radio" />
                                                </div>
                                                <div>
                                                    <p>蘆薈</p>
                                                    <input type="radio" />
                                                </div>
                                                <div className="iceCream">
                                                    <p>冰淇淋</p>
                                                    <input type="radio" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="drinkCup">

                                        <div className="priceBox">

                                            <div className="priceNumber">
                                                <p><UnitPrice /></p>
                                            </div>
                                            <br /><br /><br />
                                            <a href="/order/drinkList" className="addTolist">
                                                <button className="AbtnL AbtnR">
                                                    <h3>加入清單</h3>
                                                    <div className="Aborder AbtnR"></div>
                                                </button>
                                            </a>
                                            <br /><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drinkImg1">
                            <img src={drinkA1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDrink;