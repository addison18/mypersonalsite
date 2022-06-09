import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col></Col>
        <Col md="4" className="footer-body">
          <SocialMedia />
        </Col>
        <Col></Col>

      </Row>
    </Container>
  );
}

export default Footer;
