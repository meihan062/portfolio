import React, { Component } from 'react';
import '../css/product_list2.css';
// import '../css/index.css';
// import Index from '../components/index.js';
// import Footer from '../components/footer.js';


class Step extends Component {
    state = {
        // 'padding-top': '100px',
        // productTitle: [1, 2, 3],
        // banner: [banner1, banner2, banner3],
        // slideIndex: 1
    }
    // startStyle = {
    //     display: "block"
    // }
    style = {
        paddingTop: '100px'
    }

    render() {
        // const { StepColor1, StepColor2, StepColor3 } = this.props;
        return (
            <body className='BodyProduct' style={this.style}>
                {/* <Index /> */}
                <div className="Step">
                    <div>
                        <div className={`Step1 ${this.props.StepColor1}`}>
                            <p className='StepP'>1</p>
                        </div>
                        <p className={`StepName ${this.props.StepNameColor1}`}>購物車清單</p>
                    </div>
                    <div>
                        <hr className='StepDivHr'/>
                    </div>
                    <div>
                        <div className={`Step2 ${this.props.StepColor2}`}>
                            <p className='StepP'>2</p>
                        </div>
                        <p className={`StepName ${this.props.StepNameColor2}`}>填寫資料</p>
                    </div>
                    <div>
                        <hr className='StepDivHr'/>
                    </div>
                    <div>
                        <div className={`Step3 ${this.props.StepColor3}`}>
                            <p className='StepP'>3</p>
                        </div>
                        <p className={`StepName ${this.props.StepNameColor3}`}>訂單已送出</p>
                    </div>
                </div>
                {/* <Footer /> */}
            </body>
        );
    }
}

export default Step;