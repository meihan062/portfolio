import React, { Component } from 'react';
import '../css/index.css';
import footerLogo from '../images/home/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="footer">
                    <div className="footerLogo"><img src={footerLogo} alt="" /></div>
                    <div className="footerMain">
                    <a className="footer-T" href="/contact"><FontAwesomeIcon icon={faEnvelope} />&nbsp;聯繫我們</a>
                       <a className="footer-icon" href="/Login" ><FontAwesomeIcon icon={faFacebook} />&nbsp;社群交流</a>

                    </div>
                    <div className="footerAddress">
                        <p>地址:台中市黎明路二段691號
                            <br />
                            Tel:04-72345678
                        </p>
                    </div>
                </footer>
        );
    }
}
 
export default Footer;