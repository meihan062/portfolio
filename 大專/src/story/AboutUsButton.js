import React, { Component } from 'react';
import "../css/about_us.css";

class AboutUsButton extends Component {
    state = {}
    render() {
        return (
                <div className='about_us_button'>
                    <button className='Button'>
                        加入我們
                    </button>
                    <button className='Button'>
                        門市據點
                    </button>
                </div>
        );
    }
}

export default AboutUsButton;