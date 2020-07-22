import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const AboutPage = () => (
  <Container>
    <Row>
      <Col className="md-auto">
        <h2 className="display-4 p-2">Proyecto educativo</h2>
        <p className="lead">
          Cuatrovientos es un Centro Integrado Privado Concertado de Formación
          Profesional gestionado por una cooperativa de profesionales, cuyo fin
          es la formación integral de personas capaces de insertarse en el mundo
          socio-laboral a través de:
          <ListGroup className=" pt-5">
            <ListGroup.Item className="list-group-item">
              Un modelo educativo basado en la innovación, el emprendimiento, la
              internacionalización, y el compromiso, así como la igualdad de
              oportunidades (comprende la equidad, la inclusión y la no
              discriminación),
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              Un modelo de gestión basado en la mejora continua y en los
              principios cooperativos,
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              Y la participación y colaboración de la Comunidad Educativa
              (alumnado, ex alumnado, familias, personal del centro, empresas y
              entidades colaboradoras).
            </ListGroup.Item>
          </ListGroup>
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutPage;
