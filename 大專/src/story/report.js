import React, { Component } from 'react';
import "../css/about_us.css";
import Index from '../components/index.js';
import Headernav from './headernav.js';
import Footer from '../components/footer.js';
import tea01 from '../images/story/tea_check_images/原鄉四季茶葉.jfif';
import Tea01 from '../images/story/PDF/原鄉四季.pdf';
import tea02 from '../images/story/tea_check_images/特級綠茶茶葉.jfif';
import Tea02 from '../images/story/PDF/特級綠茶茶葉.pdf';
import tea03 from '../images/story/tea_check_images/錫蘭紅茶.jfif';
import Tea03 from '../images/story/PDF/錫蘭紅茶茶葉.pdf';
import tea04 from '../images/story/tea_check_images/烏龍綠茶茶葉.jfif';
import Tea04 from '../images/story/PDF/烏龍綠茶茶葉.pdf';
import tea05 from '../images/story/tea_check_images/極品菁茶茶葉.jfif';
import Tea05 from '../images/story/PDF/極品菁茶茶葉.pdf';
import tea06 from '../images/story/tea_check_images/翡翠烏龍綠茶茶葉.jfif';
import Tea06 from '../images/story/PDF/翡翠烏龍茶葉.pdf';
import tea07 from '../images/story/tea_check_images/嚴選高山茶茶葉.jfif';
import Tea07 from '../images/story/PDF/嚴選高山茶茶葉.pdf';
import tea08 from '../images/story/tea_check_images/特選普洱茶茶葉.jfif';
import Tea08 from '../images/story/PDF/特選普洱茶茶葉.pdf';

class Report extends Component {

    state = {}
    componentDidMount() {
        const images = document.querySelectorAll('img');

        images.forEach(image => {
            // 取得當前image的父級元素所設定的超連結地址，並將其存入 pdfPath 常數中
            const pdfPath = image.parentElement.href;

            // 滑鼠進入(放大效果)
            image.addEventListener('mouseover', () => {
                image.style.transform = 'scale(1.2)';
                image.style.transition = 'transform 0.5s';
            });

            // 滑鼠離開(縮回效果)
            image.addEventListener('mouseout', () => {
                image.style.transform = 'scale(1)';
                image.style.transition = 'transform 0.5s';
            });

            // 滑鼠點擊進去後，觸發<a>進入PDF檔的個別頁面
            image.parentElement.addEventListener('click', event => {
                event.preventDefault();
                // 透過window.open( )用新分頁的的方式來開啟PDF檔案的網址
                window.open(pdfPath, '_blank');
            });
        });
    }
    render() {
        return (
            <div>
                <Index />
                <main>
                    < Headernav />
                    <div className='teaCheckText'>
                        茶葉檢驗報告
                    </div>
                    <div className='teaCheckList'>
                        原鄉四季茶葉、特級綠茶茶葉、錫蘭紅茶茶葉、烏龍綠茶茶葉、極品菁茶茶葉、翡翠烏龍茶葉、嚴選高山茶茶葉、特選普洱茶葉等「茶葉」類SGS檢驗報告。
                    </div>
                    <div className="teaArea1">
                        <div className="checkText" id="checkText">
                            <a href={Tea01} target="_blank" rel="noreferrer">
                                <img src={tea01} alt='' className='zoomable-image' />
                                {/* 放大鏡的icon */}
                                {/* <span className='tooltip-icon'></span> */}
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea02} target="_blank" rel="noreferrer">
                                <img src={tea02} alt='' className='zoomable-image' />
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea03} target="_blank" rel="noreferrer">
                                <img src={tea03} alt='' className='zoomable-image' />
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea04} target="_blank" rel="noreferrer">
                                <img src={tea04} alt='' className='zoomable-image' />
                            </a>
                        </div>
                    </div>
                    <div className="teaArea2">
                        <div className='checkText' id="checkText">
                            <a href={Tea05} target="_blank" rel="noreferrer">
                                <img src={tea05} alt='' className='zoomable-image' />
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea06} target="_blank" rel="noreferrer">
                                <img src={tea06} alt='' className='zoomable-image' />
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea07} target="_blank" rel="noreferrer">
                                <img src={tea07} alt='' className='zoomable-image' />
                            </a>
                        </div>
                        <div className="checkText" id="checkText">
                            <a href={Tea08} target="_blank" rel="noreferrer">
                                <img src={tea08} alt='' className='zoomable-image' />
                            </a>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        );
    }
}

export default Report;