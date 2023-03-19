// import React, { Component } from 'react';
// import '../css/product_list2.css';
// import '../css/index.css';
// import Index from '../components/index.js';
// import Footer from '../components/footer.js';
// import Step from '../components/product_step.js';
// import List from '../components/product_cartlist.js';


// // import img1 from '../images/product/3.png';
// // import img2 from '../images/product/4.png';

// class productCart extends Component {
//     state = {
//         // length: document.getElementsByClassName("product").length,
//         // product: [
//         //     { name: "product1", price: 30, count: 1 },
//         //     { name: "product2", price: 40, count: 1 },
//         // ],
//         total: 0
//     }
//     // style = {
//     //     display: 'grid'
//     // }



//     // CountNumber = (n) => {
//     //     // var text = document.getElementsByClassName("ProductIntroText")[0];
//     //     // var PorductPrice = document.getElementsByClassName("ProductCartP")[0];
//     //     var newState = { ...this.state };

//     //     newState.count += n;
//     //     // if(newState.count >= 0) {
//     //     //     text.value = newState.count;
//     //     // }else {
//     //     //     newState.count = 0;
//     //     //     text.value = newState.count;
//     //     // }


//     //     // this.setState(newState);
//     //     // var prototal = this.state.price*newState.count;
//     //     // PorductPrice.innerHTML = "NT$ " + prototal;



//     //     if (newState.count < 0) {
//     //         newState.count = 0;
//     //     }
//     //     // var a = this.state.price;
//     //     // var prototal = (a*newState.count);
//     //     // this.state.price = prototal;


//     //     this.setState(newState);
//     //     var prototal = this.state.price * newState.count;
//     //     newState.total = prototal;

//     //     // PorductPrice.innerHTML = "NT$ " + prototal;

//     //     console.log(prototal);



//     //     // }
//     //     // var a;

//     //     // if (n === 1) {
//     //     //     // console.log(btn[i]);
//     //     //     a = btn.length - 1;
//     //     //     console.log(a);
//     //     // } else {
//     //     //     a = btn.length - 2;
//     //     //     console.log(a);
//     //     // }

//     //     // console.log(btn.length);
//     // }


//     // ProductDelete = (n) => {
//     //     this.ProductDelete2(n);
//     // }
//     // ProductDelete2(n) {
//     //     var del = document.getElementsByClassName("product");
//     //     var newState = { ...this.state };
//     //     del[n - 1].style.display = del[n - 1].style.display.replace("grid", "none");
//     //     newState.length -= 1;
//     //     this.setState(newState);

//     //     if (newState.length === 0) {
//     //         this.Step(1);
//     //     }
//     // }


//     Step(n) {
//         if (n === 1) {
//             window.location.href = "/product";
//         } else {
//             window.location.href = "/product/step2";
//         }
//     }

//     render() {
//         return (
//             // <React.Fragment>
//             <body className='bodyProduct'>
//                 <Index />
//                 <Step />
//                 <List />
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
//             // </React.Fragment>

//         );
//     }
// }


// export default productCart;