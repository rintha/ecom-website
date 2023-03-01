import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-info">
      <Container>
        <div className="row d-flex">
          <div className="col-lg-6">
            <p className="h1 fw-bold p-2 text-white">The Generics</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="m-3 fs-5">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-youtube" style={{ color: "red" }} />
              </a>
            </div>
            <div className="logo m-3 fs-5">
              <a
                href="https://www.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-spotify" style={{ color: "green" }} />
              </a>
            </div>
            <div className="logo m-3 fs-5">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-facebook" style={{ color: "	blue" }} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
