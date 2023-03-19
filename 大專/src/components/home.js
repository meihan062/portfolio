import React, { Component } from 'react';
// import axios from "axios";
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import homeImg1 from '../images/home/home1.jpg';
import homeImg2 from '../images/home/home2.jpg';
import homeImg3 from '../images/home/home3.jpg';
import homeImg4 from '../images/home/home4.jpg';
import dirnkImg1 from '../images/home/series-5.jpg';
import dirnkImg2 from '../images/home/series-2.jpg';
import dirnkImg3 from '../images/home/series-3.jpg';
import productImg1 from '../images/home/product_1.jpg';
import productImg2 from '../images/home/product_2.jpg';
import productImg3 from '../images/home/product_3.jpg';
import newsImg1 from '../images/home/new.jpg';
import menuBg from '../images/home/bn_menu2.jpg';




class Home extends Component {
    state = {
        showEffect: false,
        showEffect2: false,
        showEffect3: false,
        showEffect4: false

    };
    render() {
        return (
            <body>
                <Index />
                <>
                    <section id="home" className="">
                        <div className="homeDiv1">
                            <div>誠信&nbsp;創新&nbsp;用心&nbsp;惜福</div>
                            {/* <div>用心·惜福</div> */}
                            </div>
                        <div className="homeDiv1_1">
                            <div>誠信&nbsp;創新</div>
                            <div>用心&nbsp;惜福</div>
                            </div>
                        <div className="homeDiv2">
                            <ul className="homeList" >
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg1} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg2} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg3} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg4} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg1} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg2} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg3} alt="" />
                                </li>
                                <li className="homeItem">
                                    <img className="homeItem-img" src={homeImg4} alt="" />
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="about" >
                        <div className="aboutDiv">
                            <div className="aboutBg">
                                <div className="aboutMain">
                                    <div className='aboutCenter'>
                                        <div className={`scroll-effect ${this.state.showEffect ? 'show-effect' : ''} aboutText`}>
                                            <p className="aboutText-p">
                                                1987年3月8日趙福全夫妻
                                                <br />
                                                於台南市南區，
                                                <br />
                                                創立「清心冷飲站」，
                                                <br />
                                                設置一座簡易的吧檯，
                                                <br />
                                                對外販售冷飲、冰品。
                                                <br />
                                                而剛由調酒杯倒入飲用杯中的茶飲，
                                                <br />
                                                茶湯上層漂浮冰塊，
                                                <br />
                                                冰塊上層漂浮泡沫，
                                                <br />
                                                形成漸層的圖象，
                                                <br /><br />
                                                更有細小泡沫從杯底竄起，
                                                <br />
                                                恰似香檳一般，
                                                <br />
                                                令人驚豔不已，
                                                <br />
                                                在當時稱這種新興時尚飲品。

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="menuBg">
                        <div className="menuBgImg">
                            <img className="menuBgImg-img" src={menuBg} alt=""></img>
                        </div>
                    </section>
                    <section id="menu">
                        <div className="menuMain" >
                            <ul className='menuUl'>
                                <li  className={`scroll-effect2 ${this.state.showEffect2 ? 'show-effect2' : ''} menuLi`} >
                                    <div className="menuLi-div"><img src={dirnkImg1} alt="" /></div>
                                    <div className="menuLi-Text">
                                        <h3>奶茶系列</h3>
                                    </div>
                                </li>
                                <li className={`scroll-effect2_1 ${this.state.showEffect2 ? 'show-effect2' : ''} menuLi`}>
                                    <div className="menuLi-div"><img src={dirnkImg2} alt="" /></div>
                                    <div className="menuLi-Text">
                                        <h3>拿鐵系列</h3>
                                    </div>
                                </li>
                                <li  className={`scroll-effect2_2 ${this.state.showEffect2 ? 'show-effect2' : ''} menuLi`}>
                                    <div className="menuLi-div"><img src={dirnkImg3} alt="" /></div>
                                    <div className="menuLi-Text">
                                        <h3>茗品系列</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="news">
                        <div className="newsBg"></div>
                        <div className={`scroll-effect3 ${this.state.showEffect3 ? 'show-effect3' : ''} newsMain`}>
                            <div className="newsText">
                                <div className="newsDiv">
                                    <h2 >最新消息</h2>
                                    <p>農曆春節近了，炒氣氛少不了草帽海賊團～不讓過年冷清清，來清心福全喝飲料，還可以抽航海王加價購，笑喝喝過新年，把美味飲料和熱鬧好運一起帶回家！</p>
                                    <a href="/news">
                                        <button className="btnL_c btnR_c">
                                            <span>MORE+</span>
                                            <div className="border_c btnR_c"></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="newsImg"><img src={newsImg1} alt="" /></div>
                        </div>
                    </section>
                    <section id="productC">
                        <div className="productMainC">
                            <div className="productMain-d">
                                <div  className={`scroll-effect5 ${this.state.showEffect4 ? 'show-effect5' : ''} productMain-div`}>
                                    <div className="productMain-img"><img src={productImg1} alt="" /></div>
                                </div>
                                <div className={`scroll-effect6 ${this.state.showEffect4 ? 'show-effect6' : ''} productMain-div`}>
                                    <div className="productMain-img"><img src={productImg2} alt="" /></div>
                                </div>
                                <div className={`scroll-effect7 ${this.state.showEffect4 ? 'show-effect7' : ''} productMain-div`}>
                                    <div className="productMain-img"><img src={productImg3} alt="" /></div>
                                </div>
                            </div>

                            <div className="product-T" >
                                <div className={`scroll-effect4 ${this.state.showEffect4 ? 'show-effect4' : ''} productText`}>
                                    <h2>周邊商品選購</h2>
                                    <p>收藏瓶人物臉部立體造型精細美觀，適合擺設觀賞，瓶身全彩印刷膜，顏色飽和，小巧有質感！快預備一個小空間收藏他們，兩款同時收藏更有紀念價值！</p>
                                    <h5>魯夫款/喬巴款</h5>
                                    <a href="/product">
                                        <button className="btnL_c btnR_c">
                                            <span>MORE+</span>
                                            <div className="border_c btnR_c"></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="store">
                        <div className="storeBg">
                            <div className="storeBg-div"></div>
                        </div>
                        <div className="storeMain">
                            <div className="storeText">
                                <div className="storeText-div">
                                    <h2>門市據點</h2>
                                    <a href="/store">
                                        <button className="btnL_c btnR_c">
                                            <span>MORE+</span>
                                            <div className="border_c btnR_c"></div>
                                        </button>
                                    </a>
                                </div>

                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </section >
                    <Footer />
                </>
            </body>
        );
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollEffect = document.querySelector('.scroll-effect');
        const triggerHeight = scrollEffect.offsetTop + window.innerHeight / 3.5;
        if (window.pageYOffset > triggerHeight) {
            this.setState({ showEffect: true });
        }
        const triggerHeight2 = triggerHeight+850;
        if (window.pageYOffset > triggerHeight2) {
            this.setState({ showEffect2: true });
        }
        const triggerHeight3 = triggerHeight2+400;
        if (window.pageYOffset > triggerHeight3) {
            this.setState({ showEffect3: true });
        }
        const triggerHeight4 = triggerHeight3+650;
        if (window.pageYOffset > triggerHeight4) {
            this.setState({ showEffect4: true });
        }
    }
    

}

export default Home;