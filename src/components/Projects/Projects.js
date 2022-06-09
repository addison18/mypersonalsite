import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import csu from "../../Assets/CSU.jpg";
import bkb from "../../Assets/bkb.jpg";
import logo from "../../Assets/logo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>   
        <Row>
         <Col>
         <h1 className="project-heading" >
          ADDISON DELOSREYES
         </h1>
         </Col>
          <Col> <img src={logo} alt="about" className="logo-image-style"  /></Col>
        </Row>
        <Row>
          <p className="project-school">
          A MOBILE LEGENDS PLAYER FROM CARAGA STATE UNIVERSITY
         </p>
        </Row>      
        <Row>
          <div className="project-line">
            MORE ABOUT ME
          </div>
        </Row>
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                isBlog={false}
                title={project.name}
                link={project.url}
                
              />
            </Col>
          ))}
        </Row>
        <Row>
        <div className="acad-line">
            My Academics
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="acad-con">
            <br></br>
             I am Addison Delos Reyes and I am studying at Caraga State University under the
             College of Computing and Information Sciences taking up Bachelor of Science in Information Technology.
          </div>
        </Row>
         <Container className="about-img">
            <img src={csu} alt="about" className="image-style"  />
            <Row>
              <a className="border" href="https://www.google.com/maps/place/Caraga+State+University/
              @8.9585847,125.5935691,17z/data=!3m1!4b1!4m5!3m4!1s0x3
              301eac565a4abe5:0x87859279e2e3f66a!8m2!3d8.9585847!4d125.5957578"> This is where I study</a>
            </Row>
          </Container>
          <Row>
        <div className="hob-line">
            My Hobbies
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="hob-con">
            <br></br>
             Aside from playing Mobile Lgends, I also love to play basketbal and I am a huge fan of Kobe Bryant.
          </div>
        </Row>
        <Container className="hob-img">
            <img src={bkb} alt="about" className="hob-image-style"  />
          </Container>
      </Container>
      <Row >
        <Col></Col>
        <p className="Social">IF YOU LIKE TO KNOW MORE ABOUT ME, FOLLOW ME THROUGH MY SOCIAL MEDIA BELOW THANK YOU!</p>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Projects;
