import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Navbar,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" text="white">
        <Container>
          <Row>
            <Col>
              <h4>¿Quienes somos?</h4>
              <p>
                {" "}
                Somos un grupo de estudiantes que hacen parte del programa
                MisionTic 2022 en la UTP quienes decidieron presentar como
                proyecto final, la creacion de una aplicacion web tipo
                E-Commerce llamada la Tiendita implementando el Stack
                tecnologico MERN
              </p>
            </Col>
            <Col>
              <h4>Integrantes</h4>
              <ListGroup variant="flush">
                <ListGroupItem>Jabid Jimenez Serrano</ListGroupItem>
                <ListGroupItem>Kevin Angarita Leal</ListGroupItem>
                <ListGroupItem>Andres Mesa Jimenez</ListGroupItem>
                <ListGroupItem>Gloria Murillo Cardenas</ListGroupItem>
                <ListGroupItem>Martin Martinez Romero</ListGroupItem>
              </ListGroup>
            </Col>
            <Col>
              <h4>Contactanos</h4>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <a
                    href="https://github.com/jimjabid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/jabid-andres-jimenez-serrano-960215175/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                  <a href="mailto:jabidandresjimenezserrano@gmail.com">
                    {" "}
                    <i class="fas fa-at"></i> Jabid Jimenez
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a
                    href="https://github.com/kealanle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/jabid-andres-jimenez-serrano-960215175/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                  <a href="mailto:kalangarita@hotmail.com">
                    {" "}
                    <i class="fas fa-at"></i> Kevin Angarita
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a
                    href="https://github.com/AndresCMesa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/jabid-andres-jimenez-serrano-960215175/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                  <a href="mailto:andrescamilo.mesajimenez@gmail.com">
                    {" "}
                    <i class="fas fa-at"></i> Andres Mesa
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a
                    href="https://github.com/Glomuca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/jabid-andres-jimenez-serrano-960215175/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                  <a href="mailto:gloriacardenas1987@outlook.es">
                    {" "}
                    <i class="fas fa-at"></i> Gloria Murillo
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a
                    href="https://github.com/Glomuca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/jabid-andres-jimenez-serrano-960215175/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>{" "}
                  <a href="mailto:gloriacardenas1987@outlook.es">
                    {" "}
                    <i class="fas fa-at"></i> Martin Martinez
                  </a>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container bg="primary">
        <Row>
          <Col className="text-center py-3">Copiright &copy; La Tiendita</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
