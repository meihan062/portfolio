import React, { Component } from 'react';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

// import img1 from "../images/product/A001blue.png";
// import img2 from "../images/product/A001red.png";
// import img3 from "../images/product/A001green.png";
// import img4 from "../images/product/A001.jpg";



class IntroTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            // productIntro: [],
            productImg: [],
            slideIndex: 1,
            num: 1,
            selectedOption: '' // 選取的option值
        };
        this.TypeSelect = this.TypeSelect.bind(this); // 綁定DeliveryChange方法
    }
    // state = {
    //     products: [],
    //     // productIntro: [],
    //     productImg: [],
    //     slideIndex: 1,
    //     num: 1,
    //     selectedOption: '' // 選取的option值
    // }
    style = {
        paddingTop: "100px"
    }

    componentDidMount() {
        const { productName } = this.props.match.params;
        fetch(`http://localhost:8000/testIntro/${productName}`)
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
        console.log(n);
        this.showSlides(this.state.slideIndex += n);
        // this.showSlides(this.state.slideIndex + n);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("ProductMySlides");

        if (n > slides.length) {
            this.state.slideIndex = 1;
            // this.setState({ slideIndex: 1 });
        }
        if (n < 1) {
            this.state.slideIndex = slides.length;
            // this.setState({ slideIndex: slides.length });
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
    }

    addNumber = () => {
        var newState = { ...this.state };
        newState.num += 1;
        this.setState(newState);
        console.log(newState.num);
    }

    TypeSelect(event) {
        this.setState({ selectedOption: event.target.value });
    }

    addCart = () => {
        const { selectedOption } = this.state;
        let name = document.getElementsByClassName("ProductIntroTitle")[0];
        // console.log(name.innerHTML);
        if (selectedOption) {
            localStorage.setItem('type', selectedOption);
            localStorage.setItem('name', name.innerHTML);
            alert("已加入購物車");
        } else {
            alert("請選擇款式");
        }

        // let cart = [];
        // if (localStorage.getItem('cart')) {
        //     cart = JSON.parse(localStorage.getItem('cart'));
        // }
        // cart.push(product.p_name);
        // localStorage.setItem('cart', JSON.stringify(cart));
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
            <body className='BodyProduct' >
                <Index />
                <div className="ProductIntroSlideshowContainer" style={this.style}>
                    {/* <div className='ProductIntroImg'>
                    <div className="ProductIntroImgSmall">
                        {products.map(product => (
                            product.p_id === "A001red" || product.p_id === "A001blue" ? (
                                <img src={require(`../images/product/${product.p_id}.png`)} className="ProductMySlides fade SmallImg" alt='' />
                            ) : null
                        ))}
                    </div>
                    <div className="ProductIntroImgBig">
                        {products.map(product => (
                            product.p_id === "A001green" ? (
                                <img src={require(`../images/product/${product.p_id}.png`)} className="ProductMySlides fade BigImg" alt='' />
                            ) : null
                        ))}
                        <a className="ProductIntroPrev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                        <a className="ProductIntroNext" onClick={this.plusSlides.bind(this, 1)}>❯</a>
                    </div>
                    </div> */}



                    {/* {products.map(product => (
                        <div className='ProductIntroImg'>
                            <div className="ProductIntroImgSmall">
                                <img src={require(`../images/product/${product.p_id}.png`)} className="ProductMySlides fade SmallImg" alt='' />
                            </div>

                            <div className="ProductIntroImgBig">
                                <img src={require(`../images/product/${product.p_id}.png`)} className="ProductMySlides fade BigImg" alt='' /> 
                                <a className="ProductIntroPrev" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                                <a className="ProductIntroNext" onClick={this.plusSlides.bind(this, 1)}>❯</a>
                            </div>
                        </div>
                    ))} */}




                    {intro}

                </div>
                <Footer />
            </body>
        );
    }
}

export default IntroTest;