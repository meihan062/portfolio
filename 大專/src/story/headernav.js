import React, { Component } from 'react';

class Headernav extends Component {
    state = {}
    render() {
        return (
            <header className='header_1'>
                <div className='container'>
                    <h4 className='about'>ABOUT Ching Shin Fu Chuan</h4>
                    <h5 className='chineseLogo'>關於清心福全</h5>
                    <div className='rectangle'></div>
                </div>
            </header>
        );
    }
}

export default Headernav;