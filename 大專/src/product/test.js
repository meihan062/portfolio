import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import banner1 from "../images/product/banner1.jpg";
import banner2 from "../images/product/banner2.jpg";
import banner3 from "../images/product/banner3.jpg";
// import img1 from "../images/product/A001blue.png";
// import img2 from "../images/product/A002.png";
// import img3 from "../images/product/A003luffy.png";


class Test extends Component {
    state = {
        products: [],
        products2: [],
        // productTitle: ["雙面飲料手提袋", "摺疊購物袋", "紀念收藏瓶"],
        banner: [banner1, banner2, banner3],
        slideIndex: 1,
        // productImages: [img1, img2, img3],
    }
    startStyle = {
        display: "block"
    }

    componentDidMount() {
        fetch('http://localhost:8000/test')
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
            })
            .catch(error => console.error(error))
        fetch('http://localhost:8000/test2')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                if (data) {
                    const jsonData2 = JSON.parse(data);
                    this.setState({ products2: jsonData2 })
                }
            })
            .catch(error => console.error(error))
    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
    }
    currentSlide = (n) => {
        this.showSlides(this.state.slideIndex = n);
    }

    showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            this.state.slideIndex = 1;
        }
        if (n < 1) {
            this.state.slideIndex = slides.length;
        }
        let k;
        for (k = 0; k < slides.length; k++) {
            var newStyle = { ...this.startStyle }
            newStyle.display = "none";
            slides[k].style.display = newStyle.display;
        }
        for (k = 0; k < dots.length; k++) {
            dots[k].className = dots[k].className.replace(" active_banner", "");
        }

        slides[this.state.slideIndex - 1].style.display = this.startStyle.display;
        dots[this.state.slideIndex - 1].className += " active_banner";
    }


    render() {
        // banner
        let bannerImg = [];
        for (let j = 0; j < this.state.banner.length; j++) {
            if (j === 0) {
                // 第一個div的display為block
                bannerImg.push(
                    <div className="mySlides Productfade" style={this.startStyle}>
                        <img src={this.state.banner[j]} className="ProductBanner" alt='' />
                    </div>
                )
            }
            else {
                var newStyle = { ...this.startStyle }
                newStyle.display = "none";
                // 剩下的div的display為none
                bannerImg.push(
                    <div className="mySlides Productfade" style={newStyle}>
                        <img src={this.state.banner[j]} className="ProductBanner" alt='' />
                    </div>
                )
            }
        }

        // productimages
        const { products, products2 } = this.state;
        let productImg = [];
        // productImg.push(
        //     <div className="ProductList">
        //         {products.map(product => (
        //             <div key={product.p_id} className='ProductListDiv'>
        //                 <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt='' />
        //                 <NavLink to={`/${product.p_type}/${product.p_name}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
        //             </div>
        //         ))}
        //     </div>
        // )



        const { location } = this.props;

        // 根据 URL 的不同来渲染不同的内容
        if (location.pathname === '/test') {
            productImg.push(
                <div className="ProductList">
                    {products.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt='' />
                            <NavLink to={`/${product.p_type}/${product.p_name}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))}
                </div>
            )
        } else if (location.pathname === '/test2') {
            productImg.push(
                <div className="ProductList">
                    {products2.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt='' />
                            <NavLink to={`/${product.p_type}/${product.p_name}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))}
                </div>
            )
        }


        return (
            <body>
                <Index />
                <div className="ProductSlideshowContainer">
                    {bannerImg}

                    <a className="ProductPrevBanner" onClick={this.plusSlides.bind(this, -1)}>❮</a>
                    <a className="ProductNextBanner" onClick={this.plusSlides.bind(this, 1)}>❯</a>

                    <div className='dots'>
                        <span className="dot active_banner" onClick={this.currentSlide.bind(this, 1)}></span>
                        <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span>
                        <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span>
                    </div>
                </div>
                <div className="typ">

                    <NavLink to="/product/航海王" className="name">航海王</NavLink> | &nbsp;
                    <NavLink to="/product/哥吉拉" className="name">哥吉拉</NavLink> | &nbsp;
                    <NavLink to="/product/黃阿媽的後宮生活" className="name">黃阿媽的後宮生活</NavLink>
                </div>


                <hr className='separate1' />

                {productImg}

                <Footer />
            </body>
        );
    }
}

export default Test;