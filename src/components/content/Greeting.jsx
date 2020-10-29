import React from "react";
import {Row, Container, Col, Image } from "react-bootstrap";
import photo from "../../photo.jpg";

function Greeting(props) {
  const name = props.name || "Владислав";

  return (
    <section className="jumbotron" id="greeting">
      <Container>
        <Row>
          <Col md="7">
            <h2 className="greeting-heading">Приятно познакомиться {name}</h2>
            <p className="lead">
              Меня зовут Владимир Скесов и я начинающий веб-разработчик. Думаю
              нас таких в последние время много развелось, поэтому я пытаюсь
              выделиться за счет этого сайта. На данный момент он работает в
              связке Node.js + Express, React + Bootstrap. А исходный код
              приложения вы можете посмотреть на GitHub по ссылке ниже.
            </p>
          </Col>
          <Col md="5">
            <Image src={photo} alt="me" rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Greeting;
