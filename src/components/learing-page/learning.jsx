import React from 'react'
import './learning.css';
import { Container,Button } from "react-bootstrap";

export default function learning() {
  return (
    <div>
      <section id="learning">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 text-left">
                      <div className="big-title m15 text-left ">
                          <h2>MULTI PURPOSE LEARNING SYSTEM</h2>
                          <hr className="customhr" />
                          <p>
                              One template hundreds of beautiful section elements! Don't forget to check our awesome video documentation!
                          </p>
                      </div>
                      <div className="text-left">
                          
                      <p >
                      Easily change/switch/swap every placeholder inside every image on Sedna with the included Sketch files. You’ll have this template customised to suit your business in no time!
                      </p>
                      <p>
                      Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue..
                      </p>
                      </div>
                      <div className="row text-left">
                          <div className="col-lg-6 check">
                              <ul>
                                  <li>Learning Management System</li>
                                  <li> Suitable for Onepage Courses</li>
                                  <li>Use on University Websites</li>
                                  <li>Build an Awesome Community</li>
                              </ul>
                          </div>
                          <div className="col-lg-6 check">
                              <ul>
                                  <li> Simple & Clean Code</li>
                                  <li>Modern Browsers Compatible</li>
                                  <li>Beautiful CSS3 Animations</li>
                                  <li>Beginner Friendly Documentation</li>
                                 
                              </ul>
                          </div>
                      </div>
                      <Button className="custom-btn" variant="contained" size="lg">VIEW ALL COURSES</Button>
                  </div>
                  <div className="col-lg-6">
                      <img src="macbook.png" alt="" />
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
