import React, { Component } from 'react';
import '../css/order.css';

class LocaBox1 extends Component {
    state = {}
    render() {
        return (
            <div className="locaBox1">
                <div className="local inMe" >
                    <span> 地點</span>
                </div>
                <div className="locatInput inMe">
                    <select name="" id="storeWhere">
                        <option value="">東興店</option>
                    </select>
                    <br /><br />
                </div>
                <br /><br />
            </div>
        );
    }
}

export default LocaBox1;