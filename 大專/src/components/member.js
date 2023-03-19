import React, { Component } from 'react';
import '../css/index.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';


class Member extends Component {
    state = {
        userItem: {
            id: 25,
            mname: '甲乙丙',
            mtel: '0912345678',
            mpid: '1234',
            gender: 'F',
            birthday: '2023-01-01',
            email: 'zxc123@gnail.com',
            address: '台中市',
            mimages: '',
            setOk: false
        }
    }

    async componentDidMount() {
        var result = await axios.get("http://localhost:8000/login");
        var url = `http://localhost:8000/member/${result.data.user}`;
        var fromServer = await axios.get(url);
        var newState = { ...this.state };
        newState.userItem = fromServer.data;
        this.setState(newState);
    }
    render() {
        return (
            <>
                <div className="memberMain" style={{ opacity: this.state.setOk ? '0.4' : '1' }}>
                    <p>會員資料</p>
                    <div className="memberForm-d">
                        {/* <label className='memberForm-span1'>您目前使用的手機號碼:</label><br /> */}
                        <input className='input_m input_mtel' type="tel" name="mtel" value={'您的手機號碼 : ' + this.state.userItem.mtel}
                            onChange={this.mtelChange} readonly="readonly" /><br />
                    </div>
                    <form className="memberForm-T" action="/member/edit" method='post' onSubmit={this.okClick}>

                        <div className="memberForm-D">
                            <div className='memberForm-span' >★外送資料預設</div>
                            <div className="memberForm-dd">
                                <input className='input_m' type="hidden" id="userItemMtel"
                                    name="mtel" value={this.state.userItem.mtel} />
                                <div className='inputDiv'>
                                    <span className='inputSpan'><FontAwesomeIcon icon={faUser} /></span>
                                    <input className='input_m' type="text" name="mname" value={this.state.userItem.mname}
                                        onChange={this.mnameChange} placeholder='姓名' /></div>
                                <div className='inputDiv'><span className='inputSpan'><FontAwesomeIcon icon={faEnvelope} /></span>
                                    <input className='input_m' type="email" name="email" value={this.state.userItem.email}
                                        onChange={this.emailChange} placeholder='Eail' /></div>
                                <div className='inputDiv'><span className='inputSpan'><BsFillPinMapFill /></span>
                                    <input className='input_m' type="text" name="address" value={this.state.userItem.address}
                                        onChange={this.addressChange} placeholder='地址' /></div>
                            </div>


                        </div>
                        <div className="memberForm-D">
                            <button className="button" type="button" onClick={this.okClick}>
                                更新
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{ display: this.state.setOk ? 'block' : 'none' }} className='okDiv'>
                    <div className='okDivmain'>
                        <p><AiFillCheckCircle/></p>
                        <p>更新成功!</p>
                        </div>                   
                </div>
                <span onClick={this.doWrite} className='doWrite'></span>
            </>

        );
    }

    mnameChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.mname = e.target.value;
        this.setState(newState);
    }

    emailChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.email = e.target.value;
        this.setState(newState);
    }

    addressChange = (e) => {
        var newState = { ...this.state };
        newState.userItem.address = e.target.value;
        this.setState(newState);
    }

    okClick = async () => {
        var fromServer = await axios.put("http://localhost:8000/member/edit", {
            ...this.state.userItem
        });
        console.log(fromServer);
        this.setState({ setOk: true });
        setTimeout(() => {
            this.setState({ setOk: false });
        }, 1500);
    };
    
    //快速輸入
    doWrite=()=>{
        var newState = { ...this.state };
        newState.userItem.email = 'zxcc123@gmail.com';
        newState.userItem.address = '台中市南屯區公益路二段51號18樓';
        this.setState(newState);
    }


}

export default Member;