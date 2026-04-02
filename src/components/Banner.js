import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerimg from '../assets/logo.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  const toRotate = [
    'Dev Full Stack',
    'Backend com Java',
    'APIs REST e SQL',
  ];

  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 1.8);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(100);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, loopNum, isDeleting, delta, toRotate, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem-vindo ao meu portfólio</span>

            <h1>
              <span className="wrap">{text}</span>
            </h1>

            <p>
              Desenvolvedora Full Stack com foco em backend utilizando Java,
              APIs REST e banco de dados SQL. Tenho experiência com
              desenvolvimento de aplicações web completas e estou em busca de
              uma oportunidade de estágio para evoluir profissionalmente e
              contribuir com soluções eficientes.
            </p>

            <button
              onClick={() =>
                document.getElementById('projetos')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Ver Projetos <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerimg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
