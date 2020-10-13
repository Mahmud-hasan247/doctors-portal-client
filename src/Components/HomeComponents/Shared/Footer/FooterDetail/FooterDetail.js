import React from 'react';
import './FooterDetail.css';
import facebook from '../../../../../images/facebook-f-brands.svg';
import twitter from '../../../../../images/twitter-brands.svg';
import google from '../../../../../images/google-plus-g-brands.svg';

const FooterDetail = () => {
    return (
        <>
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-3 mt-5 pt-5">
                        <ul>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem, ipsum.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <ul >
                            <h6 className="special-color">Services</h6>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem, ipsum.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                            <li className='footer-items'>Lorem, ipsum.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5 ">
                        <ul>
                            <h6 className="special-color">Oral Health</h6>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                            <li className='footer-items'>Lorem, ipsum dolor.</li>
                            <li className='footer-items'>Lorem, ipsum.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                            <li className='footer-items'>Lorem, ipsum.</li>
                            <li className='footer-items'>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <ul>
                            <h6 className="special-color">Our Address</h6>
                            <li className='footer-items'>Rosulpur, Donia,</li>
                            <li className='footer-items'>Jatrabari, Dhaka. 1200</li>
                            <div className="social-icons d-flex mt-3">
                                <img className='icons img-circle' src={facebook} alt="" />
                                <img className='icons' src={google} alt=""/>
                                <img className='icons' src={twitter} alt=""/>
                            </div>
                            <button className='btn mt-3'>Contact</button> <br/>
                            <small>+8801444444444</small>
                        </ul>
                    </div>
                </div>
                <footer className='text-center text-muted mt-5 pb-3'>Copyright all rights reserved. 2020</footer>

            </div>
        </>
    );
};

export default FooterDetail;