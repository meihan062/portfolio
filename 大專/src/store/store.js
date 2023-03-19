import React, { Component } from 'react';

import Index from '../components/index.js';
import Footer from '../components/footer.js';

import '../css/store.css';
import { AiTwotoneShop } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";


class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
            storeList: [],
            countyList: [],
            showCountyTab: false,
        };
        this.defaultOpenRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            activeTab: "tabSouth"
        });
        this.defaultOpenRef.current.click();

        fetch('http://localhost:8000/storeList')
            .then(res => res.json())
            .then(data => this.setState({ storeList: data }));

    }

    fetchCounty = (county) => {
        fetch(`http://localhost:8000/storeList/${county}`)
            .then(res => res.json())
            .then(countydata => {
                this.setState({ countyList: countydata },
                    () => {
                        console.log(this.state.countyList);
                    });
            });

    }


    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <div className='setHeight'>
                    <Index />
                </div>


                <div className="topSizeStore">
                    <div className='topText'>
                        <h2>門市據點</h2>
                    </div>
                </div>

                {/* 區域按鈕 */}
                <div className="area tab">
                    <button className={` ${activeTab === "tabNorth" ? "active" : ""}`}
                        onClick={(evt) => {
                            this.openIt(evt, "tabNorth");
                            this.setState({ showCountyTab: true });
                        }}
                    >北部</button>

                    <button className={` ${activeTab === "tabMiddle" ? "active" : ""}`}
                        onClick={evt => {
                        this.openIt(evt, "tabMiddle");
                        this.setState({ showCountyTab: true });
                        }}
                        >中部</button>

                    <button className={` ${activeTab === "tabSouth" ? "active" : ""}`}
                        onClick={evt => {
                            this.openIt(evt, "tabSouth");
                            this.setState({ showCountyTab: true });
                        }}
                        ref={this.defaultOpenRef}
                        id="defaultOpen">南部</button>

                    <button className={` ${activeTab === "tabEast" ? "active" : ""}`}
                        onClick={evt => {
                            this.openIt(evt, "tabEast");
                            this.setState({ showCountyTab: true });
                        }}
                    >東部</button>

                    <button className={` ${activeTab === "tabIsland" ? "active" : ""}`}
                        onClick={evt => {
                            this.openIt(evt, "tabIsland");
                            this.setState({ showCountyTab: true });
                        }}
                        >離島</button>

                </div>


                    {/* 縣市名稱按鈕 */}
                <div>
                    <div className="countyTab"
                        style={{ display: this.state.showCountyTab ? "block" : "none" }}
                        // style={{ display: activeTab === "tabNorth" ? "block" : "none" }}
                        id="north">

                        <button className={`countyName ${activeTab === "tabTaipei" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabTaipei");
                                this.fetchCounty("A");
                            }}
                        >臺北市</button>

                        <button className={`countyName ${activeTab === "tabNewTaipei" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabNewTaipei");
                                this.fetchCounty("F");
                            }}
                        >新北市</button>

                        <button className={`countyName ${activeTab === "tabKeelung" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabKeelung");
                                this.fetchCounty("C");
                            }}
                        >基隆市</button>

                        <button className={`countyName ${activeTab === "tabYilan" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabYilan");
                                this.fetchCounty("G");
                            }}
                        >宜蘭縣</button>

                        <button className={`countyName ${activeTab === "tabTaoyuan" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabTaoyuan");
                                this.fetchCounty("H");
                            }}
                        >桃園市</button>

                        <button className={`countyName ${activeTab === "tabHsinchuCity" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabHsinchuCity");
                                this.fetchCounty("O");
                            }}
                        >新竹市</button>

                        <button className={`countyName ${activeTab === "tabHsinchuCounty" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabHsinchuCounty");
                                this.fetchCounty("J");
                            }}
                        >新竹縣</button>

                    </div>


                    <div className="countyTab"
                        style={{ display: this.state.showCountyTab ? "block" : "none" }}
                        // style={{ display: activeTab === "tabMiddle" ? "block" : "none" }}
                        id="middle">

                        <button className={`countyName ${activeTab === "tabMiaoli" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabMiaoli");
                                this.fetchCounty("K");
                            }}
                        >苗栗縣</button>

                        <button className={`countyName ${activeTab === "tabTaichung" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabTaichung");
                                this.fetchCounty("B");
                            }}
                        >臺中市</button>

                        <button className={`countyName ${activeTab === "tabChanghua" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabChanghua");
                                this.fetchCounty("N");
                            }}
                        >彰化縣</button>

                        <button className={`countyName ${activeTab === "tabNantou" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabNantou");
                                this.fetchCounty("M");
                            }}
                        >南投縣</button>

                        <button className={`countyName ${activeTab === "tabYunlin" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabYunlin");
                                this.fetchCounty("P");
                            }}
                        >雲林縣</button>

                    </div>


                    <div className="countyTab"
                        style={{ display: this.state.showCountyTab ? "block" : "none" }}
                        // style={{ display: activeTab === "tabSouth" ? "block" : "none" }}
                        id="south">
                            
                        <button className={`countyName ${activeTab === "tabChiayiCity" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabChiayiCity");
                                this.fetchCounty("I");
                            }}
                        >嘉義市</button>

                        <button className={`countyName ${activeTab === "tabChiayiCounty" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabChiayiCounty");
                                this.fetchCounty("Q");
                            }}
                        >嘉義縣</button>

                        <button className={`countyName ${activeTab === "tabTainan" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabTainan");
                                this.fetchCounty("D");
                            }}
                        >臺南市</button>

                        <button className={`countyName ${activeTab === "tabKaohsiung" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabKaohsiung");
                                this.fetchCounty("E");
                            }}
                        >高雄市</button>

                        <button className={`countyName ${activeTab === "tabPingtung" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabPingtung");
                                this.fetchCounty("T");
                            }}
                        >屏東縣</button>

                        <button className={`countyName ${activeTab === "tabPenghu" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabPenghu");
                                this.fetchCounty("X");
                            }}
                        >澎湖縣</button>

                    </div>


                    <div className="countyTab"
                        style={{ display: this.state.showCountyTab ? "block" : "none" }}
                        // style={{ display: activeTab === "tabEast" ? "block" : "none" }}
                        id="east">

                        <button className={`countyName ${activeTab === "tabHualien" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabHualien");
                                this.fetchCounty("U");
                            }}
                        >花蓮縣</button>

                        <button className={`countyName ${activeTab === "tabTaitung" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabTaitung");
                                this.fetchCounty("V");
                            }}
                        >臺東縣</button>

                    </div>


                    <div className="countyTab"
                        style={{ display: this.state.showCountyTab ? "block" : "none" }}
                        // style={{ display: activeTab === "tabIsland" ? "block" : "none" }}
                        id="island">

                        <button className={`countyName ${activeTab === "tabKinmen" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabKinmen");
                                this.fetchCounty("W");
                            }}
                        >金門縣</button>

                        <button className={`countyName ${activeTab === "tabLienchiang" ? "active" : ""}`}
                            onClick={evt => {
                                evt.stopPropagation();
                                this.openEach(evt, "tabLienchiang");
                                this.fetchCounty("Z");
                            }}
                        >連江縣</button>

                    </div>

                </div>



                <div className="allStores">

                    {/* 全部不分縣市，目前為隱藏狀態，改成!==就會跑出來了; 預計在點完門市據點後預設顯示，點了其他btn就會消失 */}
                    {this.state.storeList.map(storeL => (
                        <div key={storeL.storeId} className="storeA oneShop"
                            style={{ display: activeTab === null ? "flex" : "none" }} 
                            // style={{ display: this.state.showAllStores === true ? "flex" : "none" }} 
                            id="allstores"
                        >
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{storeL.storeName}</h4>
                                <p>電話：{storeL.storeTel}</p>
                                <p>地址：{storeL.storeAddress}</p>
                            </div>
                        </div>
                    ))}




                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabTaipei" ? "flex" : "none" }} id="Taipei">
                            <div key={countyL.storeId} className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}


                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabNewTaipei" ? "flex" : "none" }} id="NewTaipei">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo" >
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabKeelung" ? "flex" : "none" }} id="Keelung">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabYilan" ? "flex" : "none" }} id="Yilan">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabTaoyuan" ? "flex" : "none" }} id="Taoyuan">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabHsinchuCity" ? "flex" : "none" }} id="HsinchuCity">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabHsinchuCounty" ? "flex" : "none" }} id="HsinchuCounty">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabMiaoli" ? "flex" : "none" }} id="Miaoli">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabTaichung" ? "flex" : "none" }} id="Taichung">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabChanghua" ? "flex" : "none" }} id="Changhua">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabNantou" ? "flex" : "none" }} id="Nantou">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabYunlin" ? "flex" : "none" }} id="Yunlin">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabChiayiCity" ? "flex" : "none" }} id="ChiayiCity">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabChiayiCounty" ? "flex" : "none" }} id="ChiayiCounty">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabTainan" ? "flex" : "none" }} id="Tainan">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabKaohsiung" ? "flex" : "none" }} id="Kaohsiung">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabPingtung" ? "flex" : "none" }} id="Pingtung">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabPenghu" ? "flex" : "none" }} id="Penghu">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabHualien" ? "flex" : "none" }} id="Hualien">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabTaitung" ? "flex" : "none" }} id="Taitung">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabKinmen" ? "flex" : "none" }} id="Kinmen">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}

                    {this.state.countyList.map(countyL => (
                        <div className="storeA oneShop"
                            style={{ display: activeTab === "tabLienchiang" ? "flex" : "none" }} id="Lienchiang">
                            <div className="icons">
                                <div><AiTwotoneShop /></div>
                                <div><AiFillPhone /></div>
                                <div><IoLocationSharp /></div>
                            </div>
                            <div className="storeInfo">
                                <h4>{countyL.storeName}</h4>
                                <p>電話：{countyL.storeTel}</p>
                                <p>地址：{countyL.storeAddress}</p>
                            </div>
                        </div>
                    ))}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />  


                </div>







                <Footer />
            </div>
        );
    }

    // { 五區域切換 }
    openIt = (evt, tabName) => {
        evt.stopPropagation();
        if (tabName === 'tabNorth') {
            this.setState({
                activeTab: tabName,
                countyList: [],
                showCountyTab: true
            }, () => {
                document.getElementById("north").style.display = "block";
                document.getElementById("middle").style.display = "none";
                document.getElementById("south").style.display = "none";
                document.getElementById("east").style.display = "none";
                document.getElementById("island").style.display = "none";
            });
        } else if (tabName === 'tabMiddle') {
            this.setState({
                activeTab: tabName,
                countyList: [],
                showCountyTab: true
            }, () => {
                document.getElementById("north").style.display = "none";
                document.getElementById("middle").style.display = "block";
                document.getElementById("south").style.display = "none";
                document.getElementById("east").style.display = "none";
                document.getElementById("island").style.display = "none";
            });
        } else if (tabName === 'tabSouth') {
            this.setState({
                activeTab: tabName,
                countyList: [],
                showCountyTab: true
            }, () => {
                document.getElementById("north").style.display = "none";
                document.getElementById("middle").style.display = "none";
                document.getElementById("south").style.display = "block";
                document.getElementById("east").style.display = "none";
                document.getElementById("island").style.display = "none";
            });
        } else if (tabName === 'tabEast') {
            this.setState({
                activeTab: tabName,
                countyList: [],
                showCountyTab: true
            }, () => {
                document.getElementById("north").style.display = "none";
                document.getElementById("middle").style.display = "none";
                document.getElementById("south").style.display = "none";
                document.getElementById("east").style.display = "block";
                document.getElementById("island").style.display = "none";
            });
        } else if (tabName === 'tabIsland') {
            this.setState({
                activeTab: tabName,
                countyList: [],
                showCountyTab: true
            }, () => {
                document.getElementById("north").style.display = "none";
                document.getElementById("middle").style.display = "none";
                document.getElementById("south").style.display = "none";
                document.getElementById("east").style.display = "none";
                document.getElementById("island").style.display = "block";
            });
        }
    }
    // { 預設開啟 }
    // componentDidMount() {
    //     this.setState({
    //         activeTab: "tabSouth"
    //     });
    //     this.defaultOpenRef.current.click();

    //     fetch('/storeList')
    //         .then(res => res.json())
    //         .then(data => this.setState({ storeList: data }));
    // }


    // { 縣市切換 }
    openEach = (evt, tab) => {
        this.setState({
            activeTab: tab
        });
    }



}

export default Store;