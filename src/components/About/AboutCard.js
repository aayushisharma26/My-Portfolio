import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aayushi Sharma </span>
            from <span className="purple">Madhya Pradesh, India.</span>
            <br />
            I am currently a student at NavGurukul, where I have developed my skills in
            HTML, CSS, JavaScript, React, Next.js, and Bootstrap, Node.js, .
            <br />
            Recently, I completed the MERN stack bootcamp at Zuvy, expanding my expertise
            in full-stack development.
            <br />
            I’ve also worked with the Milaan Foundation as a Leader, where I had the privilege
            of guiding and empowering over 20 students.
            <br />
            <br />
            Apart from coding, here are some other activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always be curious and strive to make a positive impact!"{" "}
          </p>
          <footer className="blockquote-footer">Aayushi Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

