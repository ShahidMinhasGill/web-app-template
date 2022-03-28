import React from "react";
import "./blog.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
export default function blog() {
  return (
    <div>
      <section id="blog">
        <div className="container">
          <div className="big-title text-center">
            <h4>FROM THE BLOG</h4>
            <hr className="customhrcenter customhr" />
            <p>
              We share professional education articles, university news and much
              more on our EduPress blog.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 text-left">
              <div className="blog-wrapper clearfix">
                <div className="post-media">
                  <img src="blog_01.jpg" alt="" className="img-responsive" />
                </div>
              </div>
              <div className="blog-title text-left">
                <div className="blog-meta">
                  <ul className="list-inline d-flex">
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle />
                        21 June 2016
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <BiMessageRounded />
                        12  Comments
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <GrFormView />
                        234 Views
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>
                  <a href="#">Why Learning System is powerful?</a>
                </h4>
                <p>
                  Easily change/switch/swap every placeholder inside every image
                  on Sedna with the included Sketch files. You’ll have this
                  template customised to suit your business in no time!
                </p>
              </div>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
            <div className="col-md-4 col-sm-12 text-left">
              <div className="blog-wrapper clearfix">
                <div className="post-media">
                  <img src="blog_02.jpg" alt="" className="img-responsive" />
                </div>
              </div>
              <div className="blog-title text-left">
                <div className="blog-meta">
                  <ul className="list-inline d-flex">
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle />
                        21 June 2016
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <BiMessageRounded />
                        12  Comments
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <GrFormView />
                        44 Views
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>
                  <a href="#">Finally an awesome template!</a>
                </h4>
                <p>
                  Easily change/switch/swap every placeholder inside every image
                  on Sedna with the included Sketch files. You’ll have this
                  template customised to suit your business in no time!
                </p>
              </div>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
            <div className="col-md-4 col-sm-12 text-left">
              <div className="blog-wrapper clearfix">
                <div className="post-media">
                  <img src="blog_03.jpg" alt="" className="img-responsive" />
                </div>
              </div>
              <div className="blog-title text-left">
                <div className="blog-meta">
                  <ul className="list-inline d-flex">
                    <li>
                      <a href="#">
                        <AiOutlineClockCircle />
                        21 June 2016
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <BiMessageRounded />
                        77  Comments
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#">
                        <GrFormView />
                        457 Views
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>
                  <a href="#">Don't forget to check our new blog..</a>
                </h4>
                <p>
                Easily change/switch/swap every placeholder inside every image on Sedna with the included Sketch files. You’ll have this template customised to suit your business in no time!
                </p>
              </div>
              <a href="#" className="readmore">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
