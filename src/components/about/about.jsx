import React from "react";
import "./about.css";
import { ImMobile } from "react-icons/im";
import { GoPerson } from "react-icons/go";
import { RiSendPlaneFill,RiLockPasswordLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

export default function about() {
  return (
    <div className="fluid-container">
      <section id="about">
        <div className="container">
          <div className="big-title text-center">
            <h2>WHAT OTHERS SAY ABOUT EDUPRESS</h2>
            <hr className="customhrcenter customhr" />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="testibox">
                <img
                  className="img-responsive rounded-circle alignleft img-circle wow fadeIn"
                  src="testi_01.png"
                  alt=""
                />

                <p>
                  Thanks for your awesome video tutorials! Its helped me a lot!
                  Pellentesque at tellus vitae augue sodales lobortis eget in
                  ipsum.
                </p>
                <div className="text-left name ml-5">
                  <h4>Amanda Martin</h4>
                  <small>
                    Web Designer at
                    <a href="">Wikipedia</a>
                  </small>
                </div>
                <hr className="customhrcenter customhr" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="testibox">
                <img
                  className="img-responsive rounded-circle alignleft img-circle wow fadeIn"
                  src="testi_02.png"
                  alt=""
                />

                <p>
                  When I need a education template, the EduPress helped me much!
                  Its helped me a lot! Pellentesque at tellus vitaes lobortis
                  eget in ipsu augue sodale.
                </p>
                <div className="text-left name ml-5">
                  <h4>Bob Davidson</h4>
                  <small>
                    CEO at
                    <a href="">Pedicalica</a>
                  </small>
                </div>
                <hr className="customhrcenter customhr" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="testibox">
                <img
                  className="img-responsive rounded-circle alignleft img-circle wow fadeIn"
                  src="testi_04.png"
                  alt=""
                />

                <p>
                  Finally I got amazing template for our new site.. Thanks for
                  build beautiful item man you're awesome! Pellentesque at
                  tellus vitaes lobortis eget in ipsu augue.
                </p>
                <div className="text-left name ml-5">
                  <h4>Darwin Luksenburg</h4>
                  <small>
                    Founder at
                    <a href="">Material INC.</a>
                  </small>
                </div>
                <hr className="customhrcenter customhr" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="testibox">
                <img
                  className="img-responsive rounded-circle alignleft img-circle wow fadeIn"
                  src="testi_03.png"
                  alt=""
                />

                <p>
                  The EduPress is an awesome website template for my next web
                  design project. We used this template on our university site.
                  Thanks PSDConvertHTML team!
                </p>
                <div className="text-left name ml-5">
                  <h4>Jenny Sunders</h4>
                  <small>
                    English Teacher at
                    <a href="#">Harward Uni.</a>
                  </small>
                </div>
                <hr className="customhrcenter customhr" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section overflow ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="device-showcase hidden-sm hidden-xs">
                <img src="iphone.png" alt="" className="devices" />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-6 service-list ">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>Responsive Mobile Friendly</h3>
                      <hr />
                      <p>
                        Our templates are 100% responsive, your website will
                        look great on mobile devices.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 service-list">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>Fast & Friendly Support</h3>
                      <hr />
                      <p>
                        We offer personalized email support when you need help,
                        daily available 24/7.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 service-list">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>Easy Customization</h3>
                      <hr />
                      <p>
                        Our templates are fun to use and customizable without
                        being bloated with options.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 service-list">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>Update & Upgrade</h3>
                      <hr />
                      <p>
                        We offer lifetime update for all our templates! When the
                        web technology need upgrade.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 service-list">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>Simple & Clean Code</h3>
                      <hr />
                      <p>
                        We work with most popular Bootstrap Framework with all
                        our premium & free templates.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 service-list">
                    <div className="row ">
                      {/* <ImMobile className="mbl-icon"/> */}
                      <h3>SEO & Social Friendly</h3>
                      <hr />
                      <p>
                        We are all aware of the need for search engines. Our
                        templates seo & social friendly.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
      <section className="about-background-color">
        <div className="row">
          <div className="col-12">
            <h4>SIGN UP TO RECEIVE FREE UPDATES AS SOON AS THEY HIT!</h4>
            <hr className="customhrcenter customhr" />
          </div>
          <div class="col-md-3 position-relative">
            <div class="input-group has-validation">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                   <GoPerson />
              </span>
              <input
                type="text"
                placeholder="Your Name"
                class="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required=""
              ></input>
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div class="col-md-3 position-relative">
            <div class="input-group has-validation">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <RiSendPlaneFill />
              </span>
              <input
                type="text"
                placeholder="Your Name"
                class="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required=""
              ></input>
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div class="col-md-3 position-relative">
            <div class="input-group has-validation">
              <span
                class="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <RiLockPasswordLine />
              </span>
              <input
                type="text"
                placeholder="Your Name"
                class="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required=""
              ></input>
              <div class="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
              
            </div>

          </div>
          <div class="col-md-3">
            <div class="form-group">
           
              <Button className="custom-btn" variant="contained" size="small">SIGN UP FOR FREE!</Button>

              
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
