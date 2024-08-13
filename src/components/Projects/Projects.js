import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aimage from "../../Assets/Projects/ai.png"
import ESP from "../../Assets/Projects/Screenshot 2024-08-13 213909.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Notepad 3.0"
              description="This is a simple Notepad application with a sticky pad feature and reminders functionality. The application allows you to create and save text notes, create sticky notes, add reminders, and customize text styles."
              ghLink="https://github.com/irfan38431/Notepad_3.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Prakriti- AI powered Mango Consultant"
              description="Prakriti is an AI powered Mango Consultant whic can conult an user in any suitable language based on the user preference either By text or by Voice messages"
              ghLink="https://github.com/irfan38431/Prakritii"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Integrated Health Accesible System"
              description="This dynamic website offers a simple yet comprehensive user interface, powered by advanced Generative AI. It navigates through the site, summarizing information from across the internet, and supports multilingual chat and voice assistance. The platform includes a medical knowledge database, locations of nearby public health centers and pharmacies, treatment guidelines, and details of upcoming medical conferences. Users can access a library of e-books, a researchers' tab with information from PubMed and Google Scholar, and a section for government schemes and important links tailored to user needs. The site is accessible in any language, providing an inclusive and informative experience."
              ghLink="https://github.com/Dhanush-777x/IHAS"
              demoLink="https://main--ihas-india.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aimage}
              isBlog={false}
              title="AI Algorithms"
              description="This repository contains implementations of various search algorithms in Python. These algorithms are dedicated to finding paths from one node to another in a graph."
              ghLink="https://github.com/irfan38431/AI_search_algorithms"
              //demoLink="https://main--ihas-india.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESP}
              isBlog={false}
              title="Chip to Chip Communications Using ESPNOw"
              description="This repository contains the implementation of the ESP-NOW protocol for the ESP8266 microcontroller"
              ghLink="https://github.com/irfan38431/AI_search_algorithms"
              //demoLink="https://main--ihas-india.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/irfan38431/PLANT_AI/tree/main  "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/irfan38431/AI-foMental-Health-Prediction/tree/main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/irfan38431/AI-foMental-Health-Prediction"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
