import React from "react";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Header />
      <section>
        <div className="text-center">
          <h2>ABOUT</h2>
        </div>
        <Container>
          <Row>
            <Col>
              <Image
                src={require("../assets/BandMembers.png")}
                fluid={true}
                roundedCircle
                alt="bandmember"
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
