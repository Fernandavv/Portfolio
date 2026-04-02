import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, Tab } from 'react-bootstrap';

import projimg1 from '../assets/projeto1.png';
import projimg2 from '../assets/piz.png';
import projimg3 from '../assets/port.png';
import agenda from '../assets/agenda.png';

export const Projects = () => {

  const projects = [
    {
      title: "Life Is Strange",
      description: "Landing page, projeto da faculdade",
      imgUrl: projimg1,
      link: "https://fernandavv.github.io/ls/"
    },
    {
      title: "Pizza",
      description: "Interface web para pedidos de pizza em PHP",
      imgUrl: projimg2,
      link: "https://pi-za.vercel.app/"
    },
    {
      title: "Portfolio",
      description: "Projeto em React",
      imgUrl: projimg3,
      link: "https://fe-black.vercel.app/"
    },
    {
      title: "Agendamento",
      description: "Sistema full stack Angular + Spring Boot",
      imgUrl: agenda,
      link: "https://agenda-simples-nine.vercel.app/"
    },
  ];

  return (
    <section id="projetos" className="project">
      <Container>
        <Row>
          <Col>

            <h2>Projetos</h2>
            <p>Meus Projetos</p>

            <Tab.Container defaultActiveKey="first">
              <Tab.Content>

                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
    </section>
  );
};