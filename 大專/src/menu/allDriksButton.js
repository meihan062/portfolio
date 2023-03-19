import React, { Component } from 'react';
import "../css/drinks.css";

class AllDriksButton extends Component {
    state = {}
    render() {
        return (
                <div className='AllDriksButton'>
                    <button className='Button'>
                        全部飲品
                    </button>
                </div>
        );
    }
}

export default AllDriksButton;