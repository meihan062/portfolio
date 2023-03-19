import React, { Component } from 'react';
import '../css/order.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Drinktab from './drinktab';


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: null
        };
        this.defaultOpenRef = React.createRef();
    }

    render() {
        const { activeTab } = this.state;
        return (
            <div className='allBB'>
                <Index />
                <br />
                <div>
                    
                    <div className='imSection'>
                        <br />
                        <div className="contentBox1">
                            <div className="contentBox">
                                <div className="contentIn ">
                                    
                                    <div className='ORbtnM '>
                                    <button 
                                        ref={this.defaultOpenRef}
                                        className={`tablinks ${activeTab === "tab1" ? "active" : ""}`}
                                        onClick={evt => this.openIt(evt, "tab1")}
                                        id="defaultOpen"
                                    >
                                        <span>外送</span>
                                    </button>
                                    
                                    

                                    <button
                                        className={`tablinks ${activeTab === "tab2" ? "active" : ""}`}
                                        onClick={evt => this.openIt(evt, "tab2")}
                                    >
                                        <span>自取</span>
                                    </button>
                                    </div>
                                    
                                </div>
                                <div className="locaBox">
                                    
                                        <div className="locaBox1"
                                            style={{ display: activeTab === "tab1" ? "block" : "none" }}
                                            >
                                            <div className="local">
                                                <span> 地點</span>
                                            </div>
                                            <form method="post">
                                                <div className="locatInput">
                                                    <input type="text" placeholder="台中市南屯區公益路二段51號18樓" />
                                                </div>
                                            </form>
                                            
                                        <br />
                                                <div className="locatInput2">
                                                <select>
                                                    <option value="" className='opText1'>東興店</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="locaBox1"
                                            style={{ display: activeTab === "tab2" ? "block" : "none" }}
                                            >
                                            <div className="local" >
                                                <span> 地點</span>
                                            </div>
                                            <div className="locatInput">
                                                <select name="" id="storeWhere">
                                                    <option value="" className='opText'>東興店</option>
                                                </select>
                                            </div>
                                        </div>


                                        <br /><br />
                                        <div className="local1 outMe">
                                            <span>取餐時間</span>
                                        </div>
                                        <div className="locatInput outMe">
                                            <input type="datetime-local" id="time" name="time" />
                                        </div>
                                        <br />
                                        <a href="/order/goOrder">
                                            <button className="ORbtnL ORbtnR outMe">
                                                <span>前往訂餐</span>
                                                <div className="ORborder ORbtnR outMe"></div>
                                            </button>
                                        </a>
                                    
                                </div>
                            </div>
                        </div>
                        <Drinktab />
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    
                </div>
                <Footer />
            </div>
        );
    }
    // { 兩區域切換 }
    openIt = (evt, two) => {
        this.setState({
            activeTab: two
        });
        console.log(`選擇了 ${two}`);
    }
    // { 預設開啟 }
    componentDidMount() {
        this.setState({
            activeTab: "tab1"
        });
        this.defaultOpenRef.current.click();
    }
}

export default Order;