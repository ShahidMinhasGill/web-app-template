import React from "react";
import "./course.css";
import { Button } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
export default function course() {
  return (
    <div>
      <section id="course">
        <div className="container">
          <div className="row">
            <div className="big-title text-center">
              <h2>ONE OF THE BEST EDUCATION TEMPLATE ON THE MARKET</h2>
              <hr className="customhr customhrcenter" />
              <p className="lead text-center">
                The EduPress template compatible with all mobile devices and
                modern browsers. This template coded with Bootstrap Framework
              </p>
            </div>
            <div className="col-lg-4">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="embedsPage"
                  className="embed-responsive-item"
                  src=" https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="widget-title  text-left pt-4">
                <div className="pull-left">
                  <h3>
                    <a href="#">Learn English in 20 Days</a>
                  </h3>
                  <div className="rating mt-1">
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                  </div>
                </div>
                <div className="pull-right">
                  <a href="" className="btn btn-sm btn-inverse">
                    $20.00
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="embedsPage"
                  className="embed-responsive-item"
                  src=" https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="widget-title  text-left pt-4">
                <div className="pull-left">
                  <h3>
                    <a href="#">The Best Diction Course</a>
                  </h3>
                  <div className="rating mt-1">
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                  </div>
                </div>
                <div className="pull-right">
                  <a href="" className="btn btn-sm btn-inverse">
                    $20.00
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="embedsPage"
                  className="embed-responsive-item"
                  src=" https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="widget-title  text-left pt-4">
                <div className="pull-left">
                  <h3>
                    <a href="#">PowerPoint Training</a>
                  </h3>
                  <div className="rating mt-1">
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                    <RiStarSFill className="star-color" />
                  </div>
                </div>
                <div className="pull-right">
                  <a href="" className="btn btn-sm btn-inverse">
                    $20.00
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Button className="custom-btn mt-5" variant="contained" size="lg">VIEW ALL COURSES</Button>
        </div>
      </section>
    </div>
  );
}
