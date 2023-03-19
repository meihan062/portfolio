import React, { Component } from 'react';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import img1 from "../images/product/A001blue.png";
import img2 from "../images/product/A001red.png";
import img3 from "../images/product/A001green.png";
import img4 from "../images/product/A001.jpg";



class ProductIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productImg: [img1, img2, img3, img4],
            slideIndex: 1,
            num: 1,
            selectedOption: '' // 選取的option值
        };
        this.TypeSelect = this.TypeSelect.bind(this); // 綁定DeliveryChange方法
    }
    style = {
        paddingTop: "100px"
    }

    componentDidMount() {
        const { productId } = this.props.match.params;
        // const { productType } = this.props.match.params;
        fetch(`http://localhost:8000/product/OnePiece/${productId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {

                if (data) {
                    const jsonData = JSON.parse(data);
                    this.setState({ products: jsonData })
                }
            }
            )
            .catch(error => console.error(error))

    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("ProductMySlides");

        if (n > slides.length) {
            this.state.slideIndex = 1;
        }
        if (n < 1) {
            this.state.slideIndex = slides.length;
        }


        let k;
        for (k = 0; k < slides.length; k++) {
            var a = this.state.slideIndex + k;
            if (a > slides.length) {
                a -= 4;
                slides[k].src = slides[k].src.replace(slides[k].src, this.state.productImg[a - 1]);
            }
            slides[k].src = slides[k].src.replace(slides[k].src, this.state.productImg[a - 1]);
        }
    }

    minusNumber = () => {
        var newState = { ...this.state };
        newState.num -= 1;
        if (newState.num < 0) {
            newState.num = 0;
        }
        this.setState(newState);
        // console.log(newState.num);
    }

    addNumber = () => {
        var newState = { ...this.state };
        newState.num += 1;
        this.setState(newState);
        // console.log(newState.num);
    }

    TypeSelect(event) {
        this.setState({ selectedOption: event.target.value });
    }

    addCart = () => {
        const { selectedOption } = this.state;
        let name = document.getElementsByClassName("ProductIntroTitle")[0];
        let num = document.getElementsByClassName("ProductIntroText")[0];
        let price = document.getElementsByClassName("ProductIntroPrice")[0].innerHTML;
        if (selectedOption) {
            localStorage.setItem('type', selectedOption);
            localStorage.setItem('name', name.innerHTML);
            localStorage.setItem('num', num.value);
            localStorage.setItem('price', price);
            alert("已加入購物車");
        } else {
            alert("請選擇款式");
        }
    }



    render() {

        const { products } = this.state;
        const productIntro = products.filter(
            // (被處理的元素，元素在陣列中的索引，被執行的陣列本身)
            (product, index, self) =>
                // 對於每一個元素product，判斷是否是第一次出現在陣列中
                // 第一次出現，self.findIndex(t => t.p_img === product.p_img)的返回值就是index
                // 不是第一次出現，self.findIndex(t => t.p_img === product.p_img)的返回值會是前面出現過的元素的索引。
                // self.findIndex(t => t.p_img === product.p_img) = index -> 第一次出現
                index === self.findIndex((p) => p.p_name === product.p_name && p.id === product.id)
        );


        let intro = [];
        intro.push(
            <div className="ProductIntroContent">
                {productIntro.map((product, index) => (
                    <div className="ContentProduct" key={index}>
                        <h1 className='ProductIntroTitle'>{product.p_name}</h1>
                        <p className='ProductIntro'>
                            {product.p_describe.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <hr className='separate2' />
                        <h3 className='ProductIntroPrice'>NT$ {product.p_price}</h3>
                        <div className="choose">
                            <select className='TypeSelect' onChange={this.TypeSelect}>
                                <option value="no">請選擇款式</option>
                                <option value="紅色款">紅色款</option>
                                <option value="綠色款">綠色款</option>
                                <option value="藍色款">藍色款</option>
                            </select>
                            <button type="submit" className='ProductIntroMinus' onClick={this.minusNumber}>-</button>
                            <input type="text" value={this.state.num} className="ProductIntroText" />
                            <button type="submit" className='ProductIntroPlus' onClick={this.addNumber}>+</button>
                            <button className="CartBtn" onClick={this.addCart}>加入購物車</button>
                        </div>
                    </div>
                ))}
            </div>
        )

        return (
            <body className='BodyProduct'>
                <Index />
                <div className="ProductIntroSlideshowContainer" style={this.style}>
                    <div className="ProductIntroImgSmall">
                        <img src={img2} className="ProductMySlides fade SmallImg" alt='' />
                        <img src={img3} className="ProductMySlides fade SmallImg" alt='' />
                        <img src={img4} className="ProductMySlides fade SmallImg" alt='' />
                    </div>
                    <div className="ProductIntroImgBig">
                        <img src={img1} className="ProductMySlides fade BigImg" alt='' />
                        <a className="ProductIntroPrev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                        <a className="ProductIntroNext" onClick={this.plusSlides.bind(this, 1)}>❯</a>
                    </div>
                    {/* <div className="ProductIntroContent">
                        <h1 className='ProductIntroTitle'>雙面飲料手提袋</h1>
                        <p className='ProductIntro'>
                            · 自己喝太孤單，草帽海賊團來當神隊友。
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可雙面翻轉的飲料提袋，正面是全彩熱昇華轉印，背面是精美刺繡，
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一次擁有兩個夥伴，優質又超值。
                        </p>
                        <p className='ProductIntro'>
                            · 雙面飲料提袋一共三款：
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;紅款：魯夫＆娜美
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;綠款：喬巴＆索隆
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍款：香吉士＆羅賓
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夥伴們收集開始囉！！！
                        </p>
                        <hr className='separate2' />
                        <h3 className='ProductIntroPrice'>NT$ 280</h3>
                        <div className="choose">
                            <select className='TypeSelect'>
                                <option>請選擇款式</option>
                                <option>紅色款</option>
                                <option>綠色款</option>
                                <option>藍色款</option>
                            </select>
                            <button type="submit" className='ProductIntroMinus' onClick={this.minusNumber}>-</button>
                            <input type="text" value={this.state.num} className="ProductIntroText" />
                            <button type="submit" className='ProductIntroPlus' onClick={this.addNumber}>+</button>
                            <button className="CartBtn" onClick={this.addCart}>加入購物車</button>
                        </div>
                    </div> */}
                        {intro}

                </div>
                {/* <br /><br /> */}
                <Footer />
            </body>
        );
    }
}

export default ProductIntro;