import React from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import "./style.css";

const Section = () => {
  return (
    <>
      <section className="herosection">
        <div class="hero-text">
        <h1 class="hero-title">
          Own Your Interest
          </h1>
          <div class="hero-btns">
              <div class="btn-desciption-box">
              <a  class="btn"><Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  bg="light"
                  aria-label="Search"
                />
              </Form></a>
              <a href="">Own what you Love</a>
              <div class="btn-desciption-box">
              <a class="btn btn-alt" href="about">About Us</a>
              </div>
              </div>
            <div class="hero-login-box">
            <p class="hero-login-info">Be A Part Of <strong href='/' >Mandala.com</strong></p>
            <a class="hero-login-btn" href="#">
                Login
              </a>
              <i class="ri-arrow-right-s-line"></i>
              </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
