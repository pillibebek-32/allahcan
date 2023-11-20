import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn, FaYahoo} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Alperdev.net</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2021-{year} AU</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">

            </li>

            <li className="social-icons">
              <a
                href="mailto:contact@alperdev.net"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYahoo />
              </a>
            </li>
            
            //<li className="social-icons">
            //  <a
            //    href="https://www.instagram.com/a.u.senol"
            //    style={{ color: "white" }}
            //    target="_blank"
            //    rel="noopener noreferrer"
            //  >
             //   <AiFillInstagram />
             // </a>
            //</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
