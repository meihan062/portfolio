import React, { Component } from 'react';
import '../css/index.css';
import "../css/about_us.css";
import Index from '../components/index.js';
import Headernav from './headernav.js';
import Footer from '../components/footer.js';
import originTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import t06 from '../images/story/brand_story_images/t06.png';
import startTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import t07 from '../images/story/brand_story_images/t07.png';
import spiritTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import strictTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import persistenceTeaDec from '../images/story/about_us_images/teaLine_dec.png';
import img_tea from '../images/story/food_images/堅持-茶葉.jpg';
import img_person from '../images/story/food_images/堅持-店員.PNG';
import img_drink from '../images/story/food_images/堅持-飲料.jpg';


class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyTab: null
        };
        this.defaultOpenRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            storyTab: "tab1"
        });
        this.defaultOpenRef.current.click();
    }

    // { 兩區域切換 }
    openIt = (evt, two) => {
        this.setState({
            storyTab: two
        });
    }

    render() {
        const { storyTab } = this.state;
        return (
            <div>
                <Index />
                <main>
                    < Headernav />
                    <div className='StoryTwoBtnTab'>
                        <button
                            ref={this.defaultOpenRef}
                            className={`tabLinks ${storyTab === "tab1" ? "active" : ""}`}
                            onClick={evt => this.openIt(evt, "tab1")}
                            id='defaultOpen'>
                            品牌故事
                        </button>
                        <button
                            className={`tabLinks ${storyTab === "tab2" ? "active" : ""}`}
                            onClick={evt => this.openIt(evt, "tab2")}>
                            嚴選食材
                        </button>
                    </div>


                    <div className='storyContent'
                        style={{ display: storyTab === "tab1" ? "" : "none" }}
                        id='brandStory'>
                        <div className="brandOriginContent">
                            <div className='titleOrigin'>
                                <div className="left_title_Origin">
                                    <span> 品牌起源</span>
                                </div>
                                <img className="origin_tea_dec" src={originTeaDec} alt="" />
                            </div>
                            <div className="brandOriginText">
                                1987年初，在以美食、小吃聞名的台南，正準備創業的趙福全先生與太太坐在一家茗品店裡，討論著未來的願景。趙先生點了一杯泡沫桂香紅茶，這是他第一次喝這款剛開始流行的手搖茶飲。在不斷試茶、配茶的過程中，趙先生發揮創意巧思，精心調配多種產地、產季、茶類的茶葉比例，並搭配多元的煮、泡、燜、調等方式，以天然的茶葉成就多種絕妙的好味道。
                            </div>
                            <div className="t06">
                                <img src={t06} alt="" />
                            </div>
                        </div>
                        <div className="brandStartContent">
                            <div className="t07">
                                <img src={t07} alt="" />
                            </div>
                            <div className="brandStartText">
                                之後趙先生在台南市金華路二段的巷弄內嘗試開店，當時想替這間小店取個有福氣的好名字，而在反覆思量之後，聽從父親的建議：「呷茶，『清心』上好」，並徵求舅公的同意，決定使用舅公位於澎湖數十年老字號「清心飲食店」的名稱，正式命名為「清心冷飲站」。
                            </div>
                            <div className="titleStart">
                                <div className="left_title_Start">
                                    <span>品牌草創</span>
                                </div>
                                <img className="start_tea_dec" src={startTeaDec} alt="" />
                            </div>
                        </div>
                        <div className="brandSpiritContent">
                            <div>
                                <div className="left_title_Spirit">
                                    <span>品牌精神</span>
                                </div>
                                <img className="spirit_tea_dec" src={spiritTeaDec} alt="" />
                                <div className="TrustCreatText">
                                    <div className="trust">誠信</div>
                                    <p className="trustText">
                                        創立以來力求務實經營、嚴謹管理、穩健成長。我們堅持以「誠信」原則服務消費者，講究真材實料、貨真價實、童叟無欺。
                                    </p>
                                    <div className="creat">創新</div>
                                    <p className="creatText">
                                        於沖調技術、品管作為、意象設計、門市裝潢、行銷策略等多元面向，不斷精益求精、推陳出新。
                                    </p>
                                </div>
                                {/* <div className="Spirit_decLine">
                                    <div className="line_brandSpirit_dec_1"></div>
                                    <div className="line_brandSpirit_dec_2"></div>
                                </div> */}
                                <div className="WorkhardThanksText">
                                    <div className="workhard">用心</div>
                                    <p className="workhardText">
                                        嚴選優質茶葉、食材與包材，落實食品安全衛生之把關，訂定標準作業程序，堅持以「手工」與「客製化」沖泡、調製飲品。
                                    </p>
                                    <div className="thanks">惜福</div>
                                    <p className="thanksText">
                                        本著「惜福」、「感恩」的心意，力行「取之社會，用之社會」的理念，善盡企業的社會責任。。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='foodStoryContent'
                        style={{ display: storyTab === "tab2" ? "" : "none" }}
                        id='brandStrict'>
                        <div className="brandStrictContent">
                            <div className="titleStrict">
                                <div className="left_title_Strict">
                                    <span>品牌嚴選</span>
                                </div>
                                <img className="strict_tea_dec" src={strictTeaDec} alt=""></img>
                            </div>
                            <div className="strictCollection">
                                <div className="teaPicture">
                                    <div className="foodText">
                                        茶葉<br />
                                        檢驗報告
                                    </div>
                                    <a href="/story/report" >
                                        <div className='seeMoreBtn'>
                                            <button className="smallButton">查看更多</button>
                                        </div>
                                    </a>
                                </div>
                                <div className="solidPicture">
                                    <div className="foodText">
                                        固態食材<br />
                                        檢驗報告
                                    </div>
                                    <div className='seeMoreBtn'>
                                        <button className="smallButton">查看更多</button>
                                    </div>
                                </div>
                                <div className="liquidPicture">
                                    <div className="foodText">
                                        液態食材<br />
                                        檢驗報告
                                    </div>
                                    <div className='seeMoreBtn'>
                                        <button className="smallButton">查看更多</button>
                                    </div>
                                </div>
                                <div className="milkPicture">
                                    <div className="foodText">
                                        乳品及鮮果<br />
                                        檢驗報告
                                    </div>
                                    <div className='seeMoreBtn'>
                                        <button className="smallButton">查看更多</button>
                                    </div>
                                </div>
                                <div className="pickPicture">
                                    <div className="foodText">
                                        包材<br />
                                        檢驗報告
                                    </div>
                                    <div className='seeMoreBtn'>
                                        <button className="smallButton">查看更多</button>
                                    </div>
                                </div>
                                <div className="elsePicture">
                                    <div className="foodText">
                                        其他<br />
                                        檢驗報告
                                    </div>
                                    <div className='seeMoreBtn'>
                                        <button className="smallButton">查看更多</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="PersistenceContent">
                            <div className="persistenceCard">
                                <img src={img_tea} alt="" />
                                <div className="persistenceTeaText">「清心福全」落實食品安全衛生管理，不僅嚴選優質原物料，更實施自主檢驗。</div>
                            </div>
                            <div className="persistenceCard">
                                <img src={img_person} alt="" />
                                <div className="persistencePersonText">「清心福全」強調顧客至上、品管優先、服務第一，「用心」專注於每一環節。</div>
                            </div>
                            <div className="persistenceCard">
                                <img src={img_drink} alt="" />
                                <div className="persistenceDrinkText">10種系列飲品，各有獨到的風味與口感，以提供消費者全方位、多樣化的手搖飲料推薦選擇。</div>
                            </div>
                            <div className="">
                                <div className="left_title_persistence">
                                    品牌堅持
                                </div>
                                <img className="persistence_tea_dec" src={persistenceTeaDec} alt="" />
                            </div>
                        </div>
                    </div>
                </main >
                <Footer />
            </div>
        );
    }


}

export default Story;