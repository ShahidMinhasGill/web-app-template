import React from 'react';
import {Container} from '@material-ui/core';
import './footer.css'

export default function footer() {
  return (
    <div>
    <footer class="footer-section">
        <div class="container">
            {/* <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="footer-content pt-5 pb-5 d-flex justify-content-between">
                <div class="row text-left">
                    <div class="col-xl-4 col-lg-3 mb-50">
                        <div class="footer-widget">
                            {/* <div class="footer-logo">
                                <a href="index.html">
                                    <img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"></img></a>
                            </div> */}
                            {/* <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div> */}
                            <div class="footer-social-icon">
                                {/* <span>Follow us</span> */}
                                {/* <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a> */}
                                      <ul>
                             
                                <li><a href="#">PSD TO HTML</a></li>
                                <li><a href="#">TEMPLATES</a></li>
                                <li><a href="#">GET A SUPPORT</a></li>
                                <li><a href="#">AFFILIATE</a></li>
                              
                              
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-6 mb-30">
                        <div class="footer-widget text-left">
                            {/* <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div> */}
                            <ul>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">TERMS OF USAGE</a></li>
                                <li><a href="#">PRIVACY POLICY</a></li>
                                <li><a href="#">PRICING & PLAN</a></li>
                                <li><a href="#">BECOME A TRAINER</a></li>
                                
                            
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Dont miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"></input>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center ">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
