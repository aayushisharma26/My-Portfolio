import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Aayushi Sharma</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://cdn.dribbble.com/users/1187278/screenshots/15719501/media/02b128a761010ed25d595a82daff17d4.gif"
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "550px",
                  background: "transparent",
                  mixBlendMode: "screen", // Hide white/bright background
                  filter: "invert(1) brightness(1.5) sepia(1) hue-rotate(190deg)",
                }}
              />
            </Col> */}



          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
