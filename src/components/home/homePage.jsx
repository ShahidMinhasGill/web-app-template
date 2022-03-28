import React from "react";
import { Container,Button } from "react-bootstrap";
import "./homeStyle.css";
export default function home() {
  return (
    <div >
      <section>
        <div  className="demo-parallax parallax section looking-photo bg-image bg-img"
    data-stellar-background-ratio="0.5">
          

      <Container >
      <div className="row centermessage text-left">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="tagline">
           <h4>
           A Powerful 
           
           <span className="element">Course</span>
           <span className="typed-cursor">|</span>
           <br></br>
           Website Template.
           </h4>
           <p >
          We're among one of the best Education Bootstrap template on the Envato marketplace to build a powerful online university websites. The team family is a small collection of designers and who have one thing in common - we all love coding.
          </p>
          
          </div>
          <Button className="custom-btn" variant="contained" size="lg">VIEW OUR COURSES</Button>

        </div>
      </div>
      </Container>
      </div>
      </section>
    </div>
  );
}
