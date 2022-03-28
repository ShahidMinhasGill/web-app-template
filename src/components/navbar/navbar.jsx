import React from "react";
import "./navbar.css";


// import {
//   Navbar,
//   Container,
//   Nav,
//   NavDropdown,
//   Form,
//   Button,
//   FormControl,
// } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";
// import { BsUiRadiosGrid } from "react-icons/bs";
import "./nav";
export default function Navbars() {
  
  return (
    <div className="fluid-container">
      <div className="row">
        <div className="col-12">
        
        
      {/* <Navbar  collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src="logo.svg" className="logo" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 text-color"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button size="sm" className="icon-here">
                <BsUiRadiosGrid /> Category
              </Button>{" "}
              <Nav.Link className="text-color" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-color" href="#about">
                About
              </Nav.Link>
              <NavDropdown title="Courses" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#course">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#community ">
                  {" "}
                  Community
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">pricing & plan</NavDropdown.Item>
                <NavDropdown.Item href="# ">
                  {" "}
                  Become A Trainier
                </NavDropdown.Item>
                <NavDropdown.Item href="# ">The Teacher</NavDropdown.Item>
                <NavDropdown.Item href="# ">Happy student</NavDropdown.Item>
                <NavDropdown.Item href="# ">Default Page</NavDropdown.Item>
                <NavDropdown.Item href="# ">Full Width Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">pricing & plan</NavDropdown.Item>
                <NavDropdown.Item href="# ">
                  {" "}
                  Become A Trainier
                </NavDropdown.Item>
                <NavDropdown.Item href="# ">The Teacher</NavDropdown.Item>
                <NavDropdown.Item href="# ">Happy student</NavDropdown.Item>
                <NavDropdown.Item href="# ">Default Page</NavDropdown.Item>
                <NavDropdown.Item href="# ">Full Width Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  {" "}
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-color" href="#">
                Contacat
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <img
                src="avtar.jpg"
                className="avatar-img rounded-circle img-height"
                alt=""
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      {/* <Navbar
      className=" sticky-nav"
      >
        <Container >
          <Navbar.Brand className="text-color" href="#">EduPress.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 text-color"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              <Nav.Link className="text-color" href="#home">Home</Nav.Link>
              <Nav.Link className="text-color" href="#about">About</Nav.Link>
              <NavDropdown title="Courses" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#course">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#community "> Community</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">pricing & plan</NavDropdown.Item>
                <NavDropdown.Item href="# "> Become A Trainier</NavDropdown.Item>
                <NavDropdown.Item href="# ">The Teacher</NavDropdown.Item>
                <NavDropdown.Item href="# ">Happy student</NavDropdown.Item>
                <NavDropdown.Item href="# ">Default Page</NavDropdown.Item>
                <NavDropdown.Item href="# ">Full Width Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">pricing & plan</NavDropdown.Item>
                <NavDropdown.Item href="# "> Become A Trainier</NavDropdown.Item>
                <NavDropdown.Item href="# ">The Teacher</NavDropdown.Item>
                <NavDropdown.Item href="# ">Happy student</NavDropdown.Item>
                <NavDropdown.Item href="# ">Default Page</NavDropdown.Item>
                <NavDropdown.Item href="# ">Full Width Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"> Something else here</NavDropdown.Item>
              </NavDropdown><Nav.Link className="text-color" href="#">Contacat</Nav.Link>
            </Nav>
            <BsSearch />
            <Form className="d-flex">
              <Button variant="success" size="sm"> Join</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
       <nav>
        <div class="logo">
            {/* <img src="logo.svg" alt="Logo Image" /> */}
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button class="login-button" href="#">Login</button></li>
            <li><button class="join-button" href="#">Join</button></li>
        </ul>
    </nav>

      </div>
      </div>
    </div>
  );
}
