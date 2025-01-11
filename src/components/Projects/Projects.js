import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DevSync from "../../Assets/Projects/DevSync_open.png"
import chatApp from "../../Assets/Projects/chat_app.png"
import netflix from "../../Assets/Projects/netflix-gpt.png"

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
              imgPath={DevSync}
              isBlog={false}
              title="DevSync"
              description="A real-time collaborative code editor where  multiple users can view live changes, save their code for future use, and run HTML, CSS, and JavaScript. Users receive notifications about connected collaborators. Built with the MERN stack and Socket.io."
              ghLink="https://github.com/ranjanmahto/DevSync"
              demoLink="https://devsync-frontend-rldx.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Realtime Chat App"
              description="A real-time chat application built with React and Firebase. Supports media sharing and includes blocking features, enabling instant messaging between users with seamless communication."
              ghLink="https://github.com/ranjanmahto/realtime-chat-app"
              demoLink="https://realtime-chat-app-inky-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Gpt"
              description="A movie trailer streaming platform built using React and Firebase. Features GPT-powered search and best recommendation using Gemini 1.5 flash latest API to enhance user experience."
              ghLink="https://github.com/ranjanmahto/netflix-gpt"
              demoLink="https://netflix-gpt890.vercel.app/"              
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
