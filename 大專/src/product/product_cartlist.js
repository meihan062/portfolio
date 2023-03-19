import React, { Component } from 'react';
import '../css/product_list2.css';
// import img

class test2 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        length: document.getElementsByClassName("product").length,
        product: [
            { name: "product1", image: '../images/product/3.png', price: 30, count: 1 },
            // { name: "product2", image: '../images/product/4.png', price: 40, count: 1 },
        ],
        total: 0
    }
    style = {
        display: 'grid'
    }



    // CountNumber = (n) => {
    //     var newState = { ...this.state };

    //     newState.count += n;

    //     if (newState.count < 0) {
    //         newState.count = 0;
    //     }


    //     this.setState(newState);
    //     var prototal = this.state.price * newState.count;
    //     newState.total = prototal;

    //     console.log(prototal);

    // }


    // ProductDelete = (n) => {
    //     this.ProductDelete2(n);
    // }
    // ProductDelete2(n) {
    //     var del = document.getElementsByClassName("product");
    //     var newState = { ...this.state };
    //     del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
    //     newState.length -= 1;
    //     this.setState(newState);

    //     if (newState.length === 0) {
    //         this.Step(1);
    //     }
    // }



    AddCount = () => {
        this.state.product.forEach(item => {
            item.count ++;
        })
        this.setState({
            product: this.state.product
        })

        // 更改總total
        // this.state.total.forEach(item => {
            
        // })
        // console.log("++");
    }

    MinusCount = () => {
        this.state.product.forEach(item => {
            item.count --;

        })
        this.setState({
            product: this.state.product
        })
    }

    Delete = (n) => {
        var del = document.getElementsByClassName("product");
        var newState = { ...this.state };
        del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
        newState.length -= 1;
        this.setState(newState);

        if (newState.length === 0) {
            this.Step(1);
        }
        // console.log("delete");
    }


    render() {
        return (
            <React.Fragment>
                <div className="ProductCartContent" style={this.style}>
                    {this.state.product.map((item) =>
                        <div className="product">
                            <img src={item.image} alt="" />
                            <p className='product_cart_p'>
                                {item.name}
                                <br />
                                款式 : 紅色(魯夫、娜美)
                            </p>
                            <div className="num">
                                <h4 className="num_title">數量</h4>
                                <div className="num_choose">
                                    {/* <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button> */}
                                    <button className='ProductCartMinus CountBtn' onClick={this.MinusCount.bind(this, item)}>-</button>
                                    <input type="text" value={item.count} className='ProductIntroText' />
                                    <button className='ProductCartAdd CountBtn' onClick={this.AddCount.bind(this, item)}>+</button>
                                </div>
                            </div>
                            <div className="ProductCartMoney">
                                <h4 className="money_title">小計</h4>
                                <p className="ProductCartP">NT$ {item.price}</p>
                            </div>
                            {/* <button className='btn_delete' onClick={this.ProductDelete.bind(this, 1)}> */}
                            <button className='btn_delete' onClick={this.Delete.bind(this, item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                            </button>

                            <br></br>
                        </div>
                    )}
                </div>
            </React.Fragment>

        );
    }
}


export default test2;