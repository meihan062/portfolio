import React, { Component } from 'react';
import '../css/product_list2.css';
import '../css/index.css';
import Index from '../components/index.js';
import Footer from '../components/footer.js';
import Step from './product_step.js';

import img1 from '../images/product/A001blue.png';


class testCart3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }
    state = {
        length: document.getElementsByClassName("product").length
    }
    style = {
        display: 'grid'
    }



    CountNumber = (n) => {
        var a = 280;
        var text = document.getElementsByTagName("input")[0];
        var total = document.getElementsByTagName("p")[7];
        var sum = document.getElementsByTagName("p")[8];

        var count = parseInt(text.value);
        count += n;
        text.value = count;
        text.innerText = text.value;

        var price = parseInt(total.innerHTML);
        price = count * a;
        // var b = "NT$ "
        total.innerText = "NT$ " + price;
        sum.innerText = total.innerText;
        // console.log(sum);

        // -(-1)+(1)
        // 第0和1個按鈕控制第0個div 1 0 2
        // 第2和3個按鈕控制第1個div 5 1 4
        // 第4和5個按鈕控制第2個div 9 2 6
        var btn = document.getElementsByClassName("CountBtn");
        for (var i = 0; i < btn.length; i++) {
            // btn[i].setAttribute();
            // but[i].onclick = function () {
            //     b = this.getAttribute('i');
            //     alert('這是第' + b + '個按鈕');
            // }

            // x>=0 x<2 =>0
            // x>=2 x<4 =>1
            // x>=4 x<6 =>2

        }
        var b;

        if (n === 1) {
            // console.log(btn[i]);
            b = btn.length - 1;
            console.log(b);
        } else {
            b = btn.length - 2;
            console.log(b);
        }

        // console.log(btn.length);
    }




    ProductDelete = (n) => {
        this.ProductDelete2(n);
    }
    ProductDelete2(n) {
        var del = document.getElementsByClassName("ProductCartProduct");
        var newState = { ...this.state };
        del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
        newState.length -= 1;
        this.setState(newState);


        if (newState.length === 0) {
            this.Step(1);
        }
    }


    Step(n) {
        if (n === 1) {
            window.location.href = "/product";
        } else {
            window.location.href = "/product/step2";
        }
    }

    render() {
        const { currentPage } = this.state;
        const step1ClassName = currentPage >= 1 ? 'StepColor' : 'StepColor2';
        const step2ClassName = currentPage >= 2 ? 'StepColor' : 'StepColor2';
        const step3ClassName = currentPage >= 3 ? 'StepColor' : 'StepColor2';
        const step1NameClassName = currentPage >= 1 ? 'StepNameColor' : 'StepNameColor2';
        const step2NameClassName = currentPage >= 2 ? 'StepNameColor' : 'StepNameColor2';
        const step3NameClassName = currentPage >= 3 ? 'StepNameColor' : 'StepNameColor2';


        const value = localStorage.getItem('type');
        const productName = localStorage.getItem('name');
        let content = [];
        content.push(
            <p className='ProductCartP'>
                {/* 雙面飲料提袋 */}
                {productName}
                <br />
                款式 : {value}
            </p>

        )
        return (
            <body className='BodyProduct'>
                <Index />
                <Step StepColor1={step1ClassName} StepColor2={step2ClassName} StepColor3={step3ClassName} StepNameColor1={step1NameClassName} StepNameColor2={step2NameClassName} StepNameColor3={step3NameClassName} />
                <div className="ProductCartContent">
                    <div className="ProductCartProduct" style={this.style}>
                        <img src={img1} className="ProductCartImg" alt='雙面飲料提袋' />
                        {/* p0 */}
                        {/* <p className='ProductCartP'>
                            雙面飲料提袋
                            <br />
                            款式 : 藍色(香吉士、羅賓)
                        </p> */}
                        {content}
                        <div className="ProductCartNum">
                            <h4 className="ProductCartNumTitle">數量</h4>
                            <div className="ProductCartNumChoose">
                                <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
                                {/* i0 */}
                                <input type="text" value="1" className='ProductCartText' />
                                <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
                            </div>
                        </div>
                        <div className="ProductCartMoney">
                            <h4 className="ProductCartMoneyTitle">小計</h4>
                            {/* p1 */}
                            <p className="ProductCartMoneyP">NT$ 280</p>
                        </div>
                        <button className='DeleteBtn' onClick={this.ProductDelete.bind(this, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill DeleteBtnSvg" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>
                    <br /><br />


                    {/* <div className="product" style={this.style}>
                        <img src={img2} className="product_img" alt='托特包' />
                        p2
                        <p className='product_cart_p'>
                            托特包
                        </p>
                        <div className="num">
                            <h4 className="num_title">數量</h4>
                            <div className="num_choose">
                                <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
                                i1
                                <input type="text" value="1" className='ProductIntroText' />
                                <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
                            </div>
                        </div>
                        <div className="ProductCartMoney">
                            <h4 className="money_title">小計</h4>
                            p3
                            <p>00</p>
                        </div>
                        <button className='btn_delete' onClick={this.ProductDelete.bind(this, 2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div> */}

                </div>


                <div className="ProductCartPrice">
                    <div className="ProductCartPriceDiv">
                        <h4 className="ProductCartPriceTitle">訂單總計(未含運)</h4>
                        <hr className='ProductCartPriceHr' />
                        {/* p4 */}
                        <p className='ProductCartPriceP'>NT$ 280</p>
                        <div className="ProductCartBtn">
                            <button className="ProductCartShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
                            <button className="ProductCartNext" onClick={this.Step.bind(this, 2)}>下一步</button>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </body>
        );
    }
}


export default testCart3;