import React, { Component } from 'react';
import axios from 'axios';
import '../css/index.css';
import { IoMdLock } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';

class PassWord extends Component {

    state = {
        mtel: '0900345678',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: '',
        setOk: false
    }

    render() {
        return (
            <>
                <div className="memberMain" style={{ opacity: this.state.setOk ? '0.4' : '1' }} >
                    <p>變更密碼</p>
                    <form className="memberForm-T" action="/member/password" method='post' onSubmit={this.okClick}>
                        <div className='error-div'><span className='error-div-p'>{this.state.errorMessage}</span></div>
                        <div className="memberForm-D">
                            <div className="memberForm-dd">
                                <div className='inputDiv'><span className='inputSpan'> <IoMdLock /></span>
                                    <input className='input_m' type="password" name='currentPassword'
                                        value={this.state.currentPassword} onChange={this.currentChange}
                                        placeholder='原密碼' /></div>
                                <div className='inputDiv'><span className='inputSpan'> <FaKey /></span>
                                    <input className='input_m' type="password" name='newPassword'
                                        value={this.state.newPassword} onChange={this.newChange}
                                        placeholder='新密碼' /></div>
                                <div className='inputDiv'><span className='inputSpan'> <FaKey /></span>
                                    <input className='input_m' type="password" name='mpid'
                                        value={this.state.confirmPassword} onChange={this.confirmChange}
                                        placeholder='確認密碼' /></div>
                            </div>
                        </div>
                        <div className="memberForm-D">
                            <button className="button" type="button" onClick={this.okClick}>
                                確認
                            </button>
                        </div>
                    </form>

                </div>
                <div style={{ display: this.state.setOk ? 'block' : 'none' }} className='okDiv'>
                    <div className='okDivmain'>
                        <p><AiFillCheckCircle /></p>
                        <p>更新成功!</p>
                    </div>

                </div>
                <span onClick={this.doWrite} className='doWrite'></span>
            </>
        );
    }
    currentChange = (e) => {
        var newState = { ...this.state };
        newState.currentPassword = e.target.value;
        this.setState(newState);
    }

    newChange = (e) => {
        var newState = { ...this.state };
        newState.newPassword = e.target.value;
        this.setState(newState);
    }

    confirmChange = (e) => {
        var newState = { ...this.state };
        newState.confirmPassword = e.target.value;
        this.setState(newState);

    }

    okClick = () => {
        const { mtel, currentPassword } = this.state;
        axios.post('http://localhost:8000/password', { mtel, currentPassword })
            .then((response) => {
                if (response.data.success) {
                    if (this.state.newPassword !== this.state.confirmPassword) {
                        this.setState({ errorMessage: '※新密碼和確認密碼不一致' })
                        return;
                    }
                    axios.put("http://localhost:8000/password", {
                        ...this.state,
                    });
                    this.setState({ setOk: true }); // 在成功後設置 setOk 為 true
                    this.setState({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                        errorMessage: ''
                    });
                    // 設置計時器，在 3 秒後將 setOk 設置為 false
                    setTimeout(() => {
                        this.setState({ setOk: false });
                    }, 1500);
                } else {
                    // 驗證失敗，顯示錯誤消息
                    const errorMessage = response.data.message;
                    this.setState({ errorMessage })
                }
            })
    }
    //快速輸入
    doWrite = () => {
        var newState = { ...this.state };
        newState.currentPassword= '123';
        newState.newPassword= '12345678';
        newState.confirmPassword='1234567';
        this.setState(newState);
    }

}

export default PassWord;