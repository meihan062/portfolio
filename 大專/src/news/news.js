import React, { Component } from 'react';

import Index from '../components/index.js';
import Footer from '../components/footer.js';

import '../css/news.css';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
            showDialog: false,
            newsList: [
                {
                    date: '2022-12-12',
                    title: '航海王｜清心福全 雙面飲料提袋，最佳拍檔陪你喝到爽！',
                    content: '可雙面翻轉的飲料提袋，正面是全彩熱昇華轉印，背面是精美刺繡，一次擁有兩個夥伴，優質又超值!\n雙面飲料提袋一共三款：紅款：魯夫＆娜美、綠款：喬巴＆索隆、藍款：香吉士＆羅賓，夥伴們收集開始囉！\n【販售資訊】12月16日（週5）上午11:00起，來店購買任一飲品，即可以280元加購一個。\n【注意事項】本加價購僅限來店消費,不適用於外送、電話預約及經由外送平台之消費，且當次消費限購一個。',
                    imageSrc: require('../images/news/products/20221212.jpg'),
                }
            ],
            currentNewsIndex: null,
        };
        this.defaultOpenRef = React.createRef();
    }
   
    openDialog = (index) => {
        this.setState({
            currentNewsIndex: index,
            showDialog: true,
        });
    };

    closeDialog = () => {
        this.setState({
            currentNewsIndex: null,
            showDialog: false,
        });
    };

    render() {
        const { activeTab, newsList, currentNewsIndex, showDialog } = this.state;
        const currentNews = newsList[currentNewsIndex];
        return (
            <div>
                <div className='setHeight'>
                    <Index />
                </div>


                <div className="topSizeNews">
                    <div className='topText'>
                        <h2>最新消息</h2>
                    </div>
                </div>


                <div className="twoBtn tab">
                    <button
                    ref={this.defaultOpenRef}
                    className={`tablinks ${activeTab === "tab1" ? "active" : ""}`} 
                    onClick={evt => this.openIt(evt, "tab1")} 
                    id="defaultOpen"
                    >
                        最新活動
                    </button>
                    <button 
                    className={`tablinks ${activeTab === "tab2" ? "active" : ""}`} 
                    onClick={evt => this.openIt(evt, "tab2")}
                    >
                        產品推薦
                    </button>
                </div>



                <div className="tabcontent"
                    style={{ display: activeTab === "tab1" ? "block" : "none" }} 
                    id="latestNews">

                    <div className="allCards">

                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20230209.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-02-09</span>
                                        <h3 className="infoTitle">旅程還沒結束，繼續航行到海的盡頭吧</h3>
                                        <p className="infoText">航海王—清心福全授權活動即將進入尾聲囉，這次行程大家還滿意嗎？
                                            不想說再見的夥伴，別感到傷感，因為「無論天涯海角，我們羈絆永存」，
                                            當然更要記得，把握最後時間，到清心福全找魯夫喔！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn showDialogBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20230209-1.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-02-09</span>
                                        <h3 className="infoTitle">關於我和鬼變成家人的那件事×清心福全 聯名周邊</h3>
                                        <p className="infoText">即日起購買『清心福全』大杯飲品就可以得到 『#限量獨家聯名紙杯』
                                            除此之外，加購『#脫單恰好瓶』就能得到電影聯名專屬精美貼紙！
                                            數量有限要買要快喔！
                                            進電影院別忘了帶杯清心福全才夠Chill～</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn showDialogBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20230205.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-02-06</span>
                                        <h3 className="infoTitle">不敢相信！關於我和家人一起喝清心珍珠奶茶和梅子綠茶</h3>
                                        <p className="infoText">2023年充滿歡笑及淚水的電影《關於我和鬼變成家人的那件事》將在2月10日全台上映啦！
                                            現在只要留言並標記@兩位好友就有機會抽到「電影票交換券」、「脫單恰好瓶1個+電影同款貼紙1包」喔!</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn showDialogBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20230118.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-01-18</span>
                                        <h3 className="infoTitle">【新年試手氣】1/19～2/15喝清心抽好運！</h3>
                                        <p className="infoText">農曆春節近了，炒氣氛少不了草帽海賊團～
                                            不讓過年冷清清，來清心福全喝飲料，還可以抽航海王加價購，笑喝喝過新年，把美味飲料和熱鬧好運一起帶回家！
                                            ‣活動時間：2023年1月19日（週四）至2月15日（週三）
                                            ‣活動辦法：在本活動貼文下方留言「新年喝清心抽好運，飲料夥伴帶回家」並標記@兩位好友，即可參加抽獎。
                                            ‣活動獎品：
                                            2月15日以前完成上述步驟皆可參加抽獎，並於2月16日（週四）上午11:00依序抽出
                                            航海王撲克牌1組（2款）共5名、航海王雙面飲料提袋1組（3款）共5名、航海王摺疊購物袋共5名、航海王紀念收藏瓶1組（2款）共5名。</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20230103.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-01-01</span>
                                        <h3 className="infoTitle">跨年元旦連假開工，送走了22，迎來了23</h3>
                                        <p className="infoText">2023新年新氣象，新的開始，新的希望，祝福粉粉們新年充滿快樂、愛，
                                            還有新發現！新的一年「ONE PIECE」草帽一行人依然聚首於清心福全，在和之國所面臨的新冒險、
                                            新挑戰即將展開，粉粉們拭目以待吧！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221230.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-30</span>
                                        <h3 className="infoTitle">5、4、3、2、1 HAPPY NEW YEAR！</h3>
                                        <p className="infoText">5、4、3、2、1 HAPPY NEW YEAR！
                                            真的是一轉眼2022就要結束了，一起開心地迎接2023年吧！
                                            連假車潮與人潮會十分擁擠，記得開心的出門也要平安的回家哦！
                                            清心福全祝福粉粉們新年快樂，明年也請多多指教囉～</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221206.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-06</span>
                                        <h3 className="infoTitle">清心福全歡樂耶誕加碼好禮【喝清心茶．遊日本趣】加價GO 加價購</h3>
                                        <p className="infoText">Merry Christmas！清心福全歡樂耶誕加碼好禮【喝清心茶．遊日本趣】加價GO 加價購
                                            一年一度的聖誕節又到來了，聖誕老公公來發禮物囉～
                                            消費滿額就有機會抽到iPhone 14、日本東京雙人來回機票...等多項大獎，清心福全與大家分享聖誕喜悅，你絕對沒看錯就是這麼好康，一起來參加禮物滿滿的抽獎活動吧！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221115.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-11-15</span>
                                        <h3 className="infoTitle">【航海王｜清心福全】2022熱血合作開跑</h3>
                                        <p className="infoText">展開無限大～的地圖，向著一望無際～的彼方
                                            草帽海賊團回來了！
                                            在充滿日式風情的和之國，身著和服裝扮的魯夫一行人，為了達成夢想將面臨各式各樣的挑戰，如果你也對夢想有滿腔熱血，就成為我們的夥伴吧！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221104.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-11-04</span>
                                        <h3 className="infoTitle">清心悠遊卡好禮 指定飲品現折5元</h3>
                                        <p className="infoText">最新強檔-港式(絲滑)奶茶/珍珠港式(絲滑)奶茶你喝過了嗎？！
                                            即日起-11/30使用悠遊卡、悠遊聯名卡，以悠遊卡功能扣款購買現折5元</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221101.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-11-01</span>
                                        <h3 className="infoTitle">Red Bull 紅牛能量飲品限時優惠+GO</h3>
                                        <p className="infoText">天氣轉涼昏昏欲睡？為何不來杯「Red Bull紅牛能量飲品」幫你帶來滿滿能量，同時享受手搖飲的快樂！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/latestNews/20221027.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-10-27</span>
                                        <h3 className="infoTitle">清心福全Ｘ台灣 Pay 喝手搖享10%回饋</h3>
                                        <p className="infoText">| 活動時間 |2022/10/01 - 2022/11/30 <br /> | 活動地點
                                            |清心福全受理「台灣Pay」之門市據點，部分清心福全門市不適用本活動，實際參與活動之門市請依現場公告為準。</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                    </div>
                    <br />



                    {/* <div className="pageCenter">

                        <div className="arrow">
                            <i className="fa-solid fa-caret-left fa-2x"></i>
                        </div>


                        <div className="pageNum">
                            <span className="defaultPage">1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>


                        <div className="arrow">
                            <i className="fa-solid fa-caret-right fa-2x"></i>
                        </div>

                    </div> */}

                </div>



                <div className="tabcontent"
                    style={{ display: activeTab === "tab2" ? "block" : "none" }} 
                    id="productRecommended">
                    <div className="allCards">
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20230203.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-02-03</span>
                                        <h3 className="infoTitle">補班日不憂鬱｜來杯清心福全</h3>
                                        <p className="infoText">該來的還是要來，不過草帽海賊團會陪你一起度過難關的，因為我們是夥伴啊！
                                            當然濃郁鮮奶與錫蘭紅茶交織出口感滑順的鮮奶茶，也是冒險途中不可或缺的美味補給品。一起跟憂鬱的心情說掰掰～
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20230130.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-01-30</span>
                                        <h3 className="infoTitle">｜開工順利迎接新氣象｜</h3>
                                        <p className="infoText">假期結束了，在充足的休息後，你準備好和草帽海賊團一起迎接新一年的挑戰了嗎？
                                            迎接挑戰前先來杯清心，為自己加油打氣，往新航道前行！
                                            "開工提神飲品推薦"
                                            #RedBull紅牛無糖能量綠茶 https://pse.is/4qjswj
                                            #RedBull紅牛能量紅茶 https://pse.is/4r4srb
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20230130-1.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-01-30</span>
                                        <h3 className="infoTitle">春光明媚的春節假期，粉粉們安排好要去哪踏青了嗎？</h3>
                                        <p className="infoText">春光明媚的春節假期，粉粉們安排好要去哪踏青了嗎？
                                            順便外帶沁涼的清心飲料陪你出遊～
                                            "出遊必備飲品"
                                            茉綠茶凍拿鐵：https://reurl.cc/VRAO5Z
                                            粉條鮮奶茶：https://reurl.cc/qZ7A1y
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20230116.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2023-01-16</span>
                                        <h3 className="infoTitle">【航海王｜清心福全】第三波紙杯全台陸續上市</h3>
                                        <p className="infoText">風浪再大，有草帽團船員們的相伴，就有面對未來挑戰的勇氣。
                                            航海王第三波杯款，全新風格、全新畫面，到清心帶上它們繼續完成探險吧！
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221222.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-22</span>
                                        <h3 className="infoTitle">Merry Christmas！喝清心挑好禮</h3>
                                        <p className="infoText">還在煩惱交換禮物送什麼？【航海王｜清心福全】多項加價購任你挑！
                                            送禮特別又不失面子～
                                            聚會必備「撲克牌」：https://pse.is/4kq55x
                                            環保實用「摺疊購物袋」：https://pse.is/4herd7
                                            多重質感「雙面飲料提袋」：https://pse.is/4kglmx
                                            精緻擺設「紀念收藏瓶」：https://pse.is/4lulsq
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221220.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-20</span>
                                        <h3 className="infoTitle">【航海王｜清心福全摺疊購物袋_喬巴】12/23超萌登場</h3>
                                        <p className="infoText">獨家限量加價購【航海王｜清心福全摺疊購物袋_喬巴】12/23超萌登場
                                            航海王摺疊購物袋外觀以超人氣喬巴頭像造型設計，不僅能作為可愛掛飾，後方開口可抽取出能夠重複使用的購物袋，袋形展開空間容量大，摺小時收納又超方便，小巧隨身攜帶不負擔，是逛街、採購的好幫手！
                                            喬巴摺疊購物袋正、反面以彩色油墨印刷，肩背、手提皆適宜，既簡約好看又兼顧實用性的萌物，絕對非擁有不可！
                                            加購辦法：12月23日（五）上午11：00起，來店購買任一飲品，即可以480元加購「摺疊購物袋_喬巴」一個。
                                            注意事項：
                                            1.產品圖片僅供參考,實際產品以各門市販售為準。
                                            2.本加價購數量有限至該款式售完為止。
                                            3.本加價購僅限「來店」消費,不適用於外送、電話預約及經由外送平台之消費,且每人當次消費限購一個。
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221214.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-14</span>
                                        <h3 className="infoTitle">【航海王｜清心福全】第二波航海王紙杯 全台陸續上市</h3>
                                        <p className="infoText">在和之國裡面的勁敵不只四皇凱多率領的百獸海賊團、夏洛特·莉莉的BIG MOM海賊團，
                                            還有更多其他艱難的挑戰，面對對如此強大的敵對勢力，草帽海賊團們還得擴充同盟！粉粉們快來清心福全響應這精彩可期的冒險吧！</p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {newsList.map((news, index) => (
                            <div className="card" key={index}>
                                <div className="flexBox">
                                    <div className="imgBoxxx">
                                        <div className="imgSize"><img src={news.imageSrc} className="cardImg" alt='' /></div>
                                    </div>
                                    <div className="rightSide">
                                        <div className="info">
                                            <span className="dateFontSize">{news.date}</span>
                                            <h3 className="infoTitle">{news.title}</h3>
                                            <p className="infoText">{news.content}
                                            </p>
                                        </div>
                                        <div className="atBtn">
                                            <button className="moreBtn" onClick={() => this.openDialog(0)}>more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221201.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-01</span>
                                        <h3 className="infoTitle">清心福全推出【航海王紀念收藏瓶】12/9開賣！</h3>
                                        <p className="infoText">你想收藏帥氣的魯夫，還是可愛的喬巴，航海王—清心福全 #紀念收藏瓶 ★魯夫款＆喬巴款★，帥氣與可愛兼備！
                                            收藏瓶人物臉部立體造型精細美觀，適合擺設觀賞，瓶身全彩印刷膜，顏色飽和，小巧有質感！快預備一個小空間收藏他們，兩款同時收藏更有紀念價值！
                                            ＊本商品僅限擺設、收藏，請勿當作容器使用，偶頭與瓶身轉動可能造成杯身包膜破損亦不可分離、拔取。
                                            【販售資訊】12月9日（週5）上午11:00起，來店或外送不限大、中、小杯，購買任一飲品，即可以460元加購【魯夫款】或以499元加購【喬巴款】。
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221201-1.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-12-01</span>
                                        <h3 className="infoTitle">【冬季飲品推薦】來杯熱呼呼冬季療癒飲品趕走寒意！</h3>
                                        <p className="infoText">隨著近日氣溫驟降越來越有感，來杯熱呼呼冬季療癒飲品趕走寒意，讓人打從心底超滿足！
                                            小小編暖心、暖身推薦：茶香馥郁、奶味香濃【港式（絲滑）奶茶】、圓潤飽滿、絲滑醇厚【珍珠港式（絲滑）奶茶】
                                            撫慰身心靈的靠清心福全來溫暖，如果還不夠那只好請魯夫的「業火拳槍」來增溫了（笑）
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221122.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-11-22</span>
                                        <h3 className="infoTitle">限量加價購〈航海王—清心福全撲克牌〉11/25登場上岸</h3>
                                        <p className="infoText">限量加價購〈航海王—清心福全撲克牌〉11/25登場上岸
                                            2種款式：Q版、TV版，不同的畫風，絕對值得擁有好好珍藏。
                                            大小朋友都想搶著入手的航海王撲克牌，和朋友相愛相殺的經典遊戲，先說好輸的人洗牌喔！
                                            牌卡選用PVC材質全彩印刷，防撕、耐磨、防水，全程台灣製造，高質感的收藏品。
                                            【販售資訊】11月25日（週五）上午11：00起，來店消費任一飲品，即可以120元加購「撲克牌」一副。
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="flexBox">
                                <div className="imgBoxxx">
                                    <div className="imgSize"><img src={require("../images/news/products/20221118.jpg")} className="cardImg" alt=''/></div>
                                </div>
                                <div className="rightSide">
                                    <div className="info">
                                        <span className="dateFontSize">2022-11-18</span>
                                        <h3 className="infoTitle">｜航海王ǀ清心福全｜首波航海王紙杯即日起上市</h3>
                                        <p className="infoText">在新世界的「和之國」是個強大且孤立主義的國家，挑戰正在前方，讓我們加入草帽海賊團，一起航向新的旅程吧！
                                            首波杯款9大主角一次滿足，草帽海賊團換上了精美和服，畫風和色彩更加繽紛，航海迷快來收集吧！
                                        </p>
                                    </div>
                                    <div className="atBtn">
                                        <button className="moreBtn">more</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {showDialog && currentNews && (
                            <div className="modal">
                                <div className="dialog">
                                    <div className="title">{currentNews.title}</div>
                                    <img className="picture" src={currentNews.imageSrc} alt="" />
                                    <div className="date">{currentNews.date}</div>
                                    <div className="content">{currentNews.content}</div>
                                    <div className="buttons">
                                        <div className="cancelBtn okBtn" onClick={this.closeDialog}>返回</div>
                                    </div>
                                </div>
                            </div>
                        )}




                    </div>
                    <br />



                    {/* <div className="pageCenter">

                        <div className="arrow">
                            <i className="fa-solid fa-caret-left fa-2x"></i>
                        </div>

                        <div className="pageNum">
                            <span className="defaultPage">1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>

                        <div className="arrow">
                            <i className="fa-solid fa-caret-right fa-2x"></i>
                        </div>

                    </div> */}



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
    }
    // { 預設開啟 }
    componentDidMount() {
        this.setState({
            activeTab: "tab1"
        });
        this.defaultOpenRef.current.click();
    }










}

export default News;