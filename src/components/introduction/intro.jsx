import React from "react";
import "./intro.css";
export default function intro() {
  return (
    <div>
      <section id="introduction">
        <div className="container service-list">
          <div className="row">
            <div className="col-lg-3 text-left">
              <img src="icon_01.png" alt="" />
              <div className="k">
                <h3>Best Multi-Tier Courses</h3>
                <hr></hr>
              </div>
              <p>
                EduPress is a powerful Education HTML template that comes with
                an easy template option interface.
              </p>
            </div>
            <div className="col-lg-3 text-left">
              <img src="icon_02.png" alt="" />
              <div className="k">
                <h3>Buy / Sell Courses</h3>
                <hr></hr>
              </div>
              <p>
              If you are looking premium quality multi vendor learning template for your next website, the EduPress ideal for you!
              </p>
            </div>
            <div className="col-lg-3 text-left">
              <img src="icon_03.png" alt="" />
              <div className="k">
                <h3>Multi Purpose Dashboard</h3>
                <hr></hr>
              </div>
              <p>
              With our awesome dashboard panels, you can showcase all your personal details, messages, social profiles.
              </p>
            </div>
            <div className="col-lg-3 text-left">
              <img src="icon_04.png" alt="" />
              <div className="k">
                <h3>Easy to Use Video Panels</h3>
                <hr></hr>
              </div>
              <p>
              We build an amazing HTML5 video player for video courses. Also you can use any embed codes from Youtube or Vimeo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
