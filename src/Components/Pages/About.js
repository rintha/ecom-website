import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="py-4">
        <h2 className="text-center fw-bold">ABOUT</h2>
        <Container>
          <Row
            className="d-flex align-items-center"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Col md={4}>
              <Image
                src={require("../../assets/thaikkudam-bridge.jpg")}
                fluid={true}
                roundedCircle
                alt="bandmember"
              ></Image>
            </Col>
            <Col md={8}>
              <p className="text-muted py-3">
               <b> Thaikkudam Bridge </b>is a music band from Kerala, India, known for
                their fusion music blending Indian classical music, folk music,
                and rock music. The band was formed in 2013 and has gained
                widespread popularity for their unique sound and electrifying
                live performances. Their music is known to appeal to audiences
                of all ages and backgrounds, and has received critical acclaim
                for their innovative approach to Indian music. The band consists
                of talented musicians, who play a variety of instruments,
                including the guitar, violin, percussion, and keyboard. With
                their high-energy performances and catchy fusion music,
                Thaikkudam Bridge has established themselves as one of the most
                exciting music groups in India today. <br/>Thaikkudam Bridge's music
                has received widespread recognition and critical acclaim, and
                the band has won numerous awards and accolades for their work.
                They have become ambassadors for Indian music, and have inspired
                a new generation of musicians and music lovers to explore the
                rich cultural heritage of India. With their unique sound and
                electrifying performances, Thaikkudam Bridge is one of the most
                exciting and innovative music groups in India today.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
