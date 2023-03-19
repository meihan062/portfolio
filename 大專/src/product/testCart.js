// import React, { Component, useState } from 'react';
// // import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import '../css/product_list2.css';
// import '../css/index.css';
// import Index from '../components/index.js';
// import Footer from '../components/footer.js';
// import Step from '../components/product_step.js';



// // import img1 from '../images/product/3.png';
// // import img2 from '../images/product/4.png';

// const product = [
//     {
//         id: 1,
//         name: 'Product 1',
//         image: '../images/product/3.png',
//         count: 1,
//         price: 10
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         image: '../images/product/4.png',
//         count: 1,
//         price: 20
//     }
// ]



// class productCart extends Component {

//     // const product = [
//     //     {
//     //         id: 1,
//     //         name: 'Product 1',
//     //         image: '../images/product/3.png',
//     //         count: 1,
//     //         price: 10
//     //     },
//     //     {
//     //         id: 2,
//     //         name: 'Product 2',
//     //         image: '../images/product/4.png',
//     //         count: 1,
//     //         price: 20
//     //     }
//     // ]


//     state = {
//         length: document.getElementsByClassName("product").length
//     }


//     style = {
//         display: 'grid'
//     }





//     CountNumber = (n) => {
//         // var text = document.getElementsByClassName("ProductIntroText")[0];
//         // var PorductPrice = document.getElementsByClassName("ProductCartP")[0];
//         var newState = { ...this.state };


//         newState.count += n;
//         // if(newState.count >= 0) {
//         //     text.value = newState.count;
//         // }else {
//         //     newState.count = 0;
//         //     text.value = newState.count;
//         // }


//         // this.setState(newState);
//         // var prototal = this.state.price*newState.count;
//         // PorductPrice.innerHTML = "NT$ " + prototal;



//         if (newState.count < 0) {
//             newState.count = 0;
//         }
//         // var a = this.state.price;
//         // var prototal = (a*newState.count);
//         // this.state.price = prototal;


//         this.setState(newState);
//         var prototal = this.state.price * newState.count;
//         newState.total = prototal;

//         // PorductPrice.innerHTML = "NT$ " + prototal;

//         console.log(prototal);



//         // -(-1)+(1)
//         // 第0和1個按鈕控制第0個div 1 0 2
//         // 第2和3個按鈕控制第1個div 5 1 4
//         // 第4和5個按鈕控制第2個div 9 2 6
//         // var btn = document.getElementsByClassName("CountBtn");
//         // for (var i = 0; i < btn.length; i++) {
//         //     // btn[i].setAttribute();
//         //     // but[i].onclick = function () {
//         //     //     b = this.getAttribute('i');
//         //     //     alert('這是第' + b + '個按鈕');
//         //     // }

//         //     // x>=0 x<2 =>0
//         //     // x>=2 x<4 =>1
//         //     // x>=4 x<6 =>2

//         // }
//         // var a;

//         // if (n === 1) {
//         //     // console.log(btn[i]);
//         //     a = btn.length - 1;
//         //     console.log(a);
//         // } else {
//         //     a = btn.length - 2;
//         //     console.log(a);
//         // }

//         // console.log(btn.length);
//     }


//     ProductDelete = (n) => {
//         this.ProductDelete2(n);
//     }
//     ProductDelete2(n) {
//         var del = document.getElementsByClassName("product");
//         var newState = { ...this.state };
//         del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
//         newState.length -= 1;
//         this.setState(newState);

//         if (newState.length === 0) {
//             this.Step(1);
//         }
//     }


//     Step(n) {
//         if (n === 1) {
//             window.location.href = "/product";
//         } else {
//             window.location.href = "/product/step2";
//         }
//     }

//     render(cartItems) {
//         return (
//             <body className='bodyProduct'>
//                 <Index />
//                 <Step />
//                 <div className="ProductCartContent">
//                     {cartItems.map((item) => (
//                         <div className="product" style={this.style} id={item.id}>
//                             <img src={item.image} alt={item.name} />
//                             <p className='product_cart_p'>
//                                 {item.name}
//                                 <br />
//                                 款式 : 紅色(魯夫、娜美)
//                             </p>
//                             <div className="num">
//                                 <h4 className="num_title">數量</h4>
//                                 <div className="num_choose">
//                                     <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
//                                     {/* i0 */}
//                                     <input type="text" value={item.count} className='ProductIntroText' />
//                                     <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
//                                 </div>
//                             </div>
//                             <div className="ProductCartMoney">
//                                 <h4 className="money_title">小計</h4>
//                                 {/* p1 */}
//                                 <p className="ProductCartP">NT$ {item.price}</p>
//                             </div>
//                             <button className='btn_delete' onClick={this.ProductDelete.bind(this, 1)}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//                                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//                                 </svg>
//                             </button>
//                             {/* <div>
//                                 <h3>{item.name}</h3>
//                                 <p>Price: ${item.price}</p>
//                             </div> */}

//                         </div>
//                     ))}


//                     {/* <img src={this.product.image} className="product_img" alt='雙面飲料提袋' /> */}
//                     {/* p0 */}
//                     {/* <p className='product_cart_p'>
//                         {this.state.name}
//                         <br />
//                         款式 : 紅色(魯夫、娜美)
//                     </p> */}
//                     {/* <div className="num">
//                         <h4 className="num_title">數量</h4>
//                         <div className="num_choose">
//                             <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
//                             i0
//                             <input type="text" value={this.state.count} className='ProductIntroText' />
//                             <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
//                         </div>
//                     </div> */}
//                     {/* <div className="ProductCartMoney">
//                         <h4 className="money_title">小計</h4>
//                         p1
//                         <p className="ProductCartP">NT$ {this.state.total}</p>
//                     </div> */}
//                     {/* <button className='btn_delete' onClick={this.ProductDelete.bind(this, 1)}>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//                             <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//                         </svg>
//                     </button> */}
//                     <br /><br />


//                     {/* <div className="product" style={this.style}>
//                         <img src={img2} className="product_img" alt='托特包' />
//                         <p className='product_cart_p'>
//                             托特包
//                         </p>
//                         <div className="num">
//                             <h4 className="num_title">數量</h4>
//                             <div className="num_choose">
//                                 <button className='ProductCartMinus CountBtn' onClick={this.CountNumber.bind(this, -1)}>-</button>
//                                 <input type="text" value={this.state.count} className='ProductIntroText' />
//                                 <button className='ProductCartAdd CountBtn' onClick={this.CountNumber.bind(this, 1)}>+</button>
//                             </div>
//                         </div>
//                         <div className="ProductCartMoney">
//                             <h4 className="money_title">小計</h4>
//                             <p>NT$ {this.state.total}</p>
//                         </div>
//                         <button className='btn_delete' onClick={this.ProductDelete.bind(this, 2)}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//                                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
//                             </svg>
//                         </button>
//                     </div> */}

//                 </div>


//                 <div className="ProductCartPrice">
//                     <div>
//                         <h4>訂單總計(未含運)</h4>
//                         <hr />
//                         {/* p4 */}
//                         <p>NT$ {this.state.total}</p>
//                         <div className="ProductCartBtn">
//                             <button className="ProductCartShopping" onClick={this.Step.bind(this, 1)}>繼續購物</button>
//                             <button className="ProductCartNext" onClick={this.Step.bind(this, 2)}>下一步</button>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 <Footer />
//             </body>
//         );
//     }
// }


// export default productCart;