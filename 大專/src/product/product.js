import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/product_list.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';

import banner1 from "../images/product/banner1.jpg";
import banner2 from "../images/product/banner2.jpg";
import banner3 from "../images/product/banner3.jpg";



class product extends Component {
    state = {
        products: [],
        products1: [],
        products2: [],
        products3: [],
        banner: [banner1, banner2, banner3],
        slideIndex: 1,
    }
    startStyle = {
        display: "block"
    }



    componentDidMount() {
        fetch('http://localhost:8000/product')
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

        fetch('http://localhost:8000/product/OnePiece')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                if (data) {
                    const jsonData = JSON.parse(data);
                    this.setState({ products1: jsonData })
                }
            }
            )
            .catch(error => console.error(error))

        fetch('http://localhost:8000/product/Fumenaction')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {

                if (data) {
                    const jsonData = JSON.parse(data);
                    this.setState({ products2: jsonData })
                }
            }
            )
            .catch(error => console.error(error))

        fetch('http://localhost:8000/product/Godzilla')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {

                if (data) {
                    const jsonData = JSON.parse(data);
                    this.setState({ products3: jsonData })
                }
            }
            )
            .catch(error => console.error(error))


        // setInterval(() => {


            // var newState = {...this.state};
            // newState.slideIndex += 1;
            // this.showSlides(newState.slideIndex);
            // this.setState(newState);
            // console.log(this.state.slideIndex);
            // this.showSlides(a);

        //     this.setState(prevState => ({ slideIndex: prevState.slideIndex + 1 }), () => {
        //         console.log(this.state.slideIndex);
        //     });
        // }, 6000);

        this.timerID = setInterval(() => {
            this.setState(prevState => ({ slideIndex: prevState.slideIndex + 1 }), () => {
            //   console.log(this.state.slideIndex);
              this.showSlides(this.state.slideIndex);
            });
          }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }




    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
        // this.setState({
        //     slideIndex: this.state.slideIndex + n
        //   });
    }
    currentSlide = (n) => {
        this.showSlides(this.state.slideIndex = n);
    }

    showSlides(n) {
        // var newState = { ...this.state };
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


        // product
        // let productImg = [];
        // for (let i = 0; i < this.state.productTitle.length; i++) {
        //     productImg.push(
        //         <div className='ProductListDiv typ1' style={this.startStyle}>
        //             <img src={this.state.productImages[i]} className="ProductListImg" alt='' />
        //             <NavLink to={`/航海王/${this.state.productTitle[i]}`} className="ProductListTitle" href='/product_intro.js'>{this.state.productTitle[i]}</NavLink>
        //         </div>
        //     )
        // }

        // let productImg2 = [];
        // for (let i = 0; i < this.state.productTitle2.length; i++) {
        //     productImg2.push(
        //         <div className='ProductListDiv typ2' style={this.ImgListStyle}>
        //             <img src={this.state.productImages2[i]} className="ProductListImg" alt='' />
        //             <NavLink to={`/黃阿媽的後宮生活/${this.state.productTitle2[i]}`} className="ProductListTitle" href='/product_intro.js'>{this.state.productTitle2[i]}</NavLink>
        //         </div>
        //     )
        // }

        // let productImg3 = [];
        // for (let i = 0; i < this.state.productTitle3.length; i++) {
        //     productImg3.push(
        //         <div className='ProductListDiv typ3' style={this.ImgListStyle}>
        //             <img src={this.state.productImages3[i]} className="ProductListImg" alt='' />
        //             <NavLink to={`/哥吉拉/${this.state.productTitle3[i]}`} className="ProductListTitle" href='/product_intro.js'>{this.state.productTitle3[i]}</NavLink>
        //         </div>
        //     )
        // }

        // productimages
        const { products, products2, products3 } = this.state;
        let productImg = [];
        const { location } = this.props;
        // 根据 URL 的不同来渲染不同的内容
        if (location.pathname === '/product' || location.pathname === '/product/OnePiece') {
            productImg.push(
                <div className="ProductList">
                    {products.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt={product.p_name} />
                            {/* <NavLink to={`/product/${product.p_type}/${product.p_name}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink> */}
                            <NavLink to={`/product/${product.p_type}/${product.p_id}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))}
                </div>
            )
        }
        else if (location.pathname === '/product/Fumenaction') {
            productImg.push(
                <div className="ProductList">
                    {products2.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt='' />
                            <NavLink to={`/product/${product.p_type}/${product.p_id}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))}
                </div>
            )
        }
        else if (location.pathname === '/product/Godzilla') {
            productImg.push(
                <div className="ProductList">
                    {products3.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`../images/product/${product.p_id}.png`)} className="ProductListImg" alt='' />
                            <NavLink to={`/product/${product.p_type}/${product.p_id}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))}
                </div>
            )
        }

        // var i = 1;
        // var intervalId = setInterval(function () {
        //     this.plusSlides(i);
        // }, 1000);


        // const { products } = this.state;
        return (
            <body className='BodyProduct'>
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
                    {/* 根據網址列名稱印出不同名稱(商品分類) */}
                    {/* <h1>About {props.match.params.who}</h1> */}

                    <NavLink to="/product/OnePiece" className="name">航海王</NavLink> | &nbsp;
                    <NavLink to="/product/Fumenaction" className="name">黃阿媽的後宮生活</NavLink>| &nbsp;
                    <NavLink to="/product/Godzilla" className="name">哥吉拉</NavLink>
                </div>


                <hr className='separate1' />
                {/* <div className="ProductList"> */}
                {productImg}
                {/* {productImg2}
                    {productImg3} */}
                {/* {products.map(product => (
                        <div key={product.p_id} className='ProductListDiv'>
                            <img src={require(`${product.p_img}`)} className="ProductListImg" alt={product.p_name} />
                            <NavLink to={`/product/航海王/${product.p_name}`} className="ProductListTitle" href='/product_intro.js'>{product.p_name}</NavLink>
                        </div>
                    ))} */}
                {/* </div> */}
                <Footer />
            </body>
        );
    }
}

export default product;