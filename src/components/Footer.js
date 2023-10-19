import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Simple_synthwave_dark_abstract_mystical_logo_pink_purp-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon reseaux">
              <a href="https://fr.indeed.com/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://fr.linkedin.com/in/nathan-hermand-31a994210"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}