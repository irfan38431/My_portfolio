import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Irfan Ahmed </span>
            from <span className="purple"> chennai, India.</span>
            <br />
            I am currently an Undergrad at Shiv Nadar University Chennai.
            <br />
            I have completed my Higher Secondary (Class 12 CBSE) at SBOA School & Junior College
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games and E-sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> most importantly - INNOVATE
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Annihilate your doubts, conquer your fears!"{" "}
          </p>
          <footer className="blockquote-footer">I Irfan Ahmed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
