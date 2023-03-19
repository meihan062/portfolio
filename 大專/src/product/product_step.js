import React, { Component } from 'react';
import '../css/product_list2.css';


class Step extends Component {
    style = {
        paddingTop: '100px'
    }

    render() {
        return (
            <body className='BodyProduct' style={this.style}>
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
            </body>
        );
    }
}

export default Step;