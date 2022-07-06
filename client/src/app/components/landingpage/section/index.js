import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              <a  class="btn" href="/login">Search</a>
              <a href="">Simular un prestamo</a>

              <div class="btn-desciption-box">
              <a class="btn btn-alt" href="#">Quiero Invertir</a>
              <a href="">Simular una inversion</a>
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
