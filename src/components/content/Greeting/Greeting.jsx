import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import photo from "./photo.jpg";
import s from "./Greeting.module.css";

function Greeting(props) {
  const name = props.name || "Владислав";

  return (
    <section className="jumbotron" id={s.greeting}>
      <Container className="block">
        <Row>
          <Col md="7">
            <h2 className={s.header}>Приятно познакомиться {name}</h2>
            <p className="lead">
              Меня зовут Владимир Скесов и я начинающий веб-разработчик. Думаю
              нас таких в последние время много развелось, поэтому пытаюсь
              выделиться за счет этой страницы. На данный момент сайт работает в
              связке Node.js + Express и React + Bootstrap. Размещен на Heroku,
              а исходный код приложения вы можете посмотреть на моём{" "}
              <a href="https://github.com/Skesov" target="blank">
                GitHub
              </a>
              .
            </p>
          </Col>
          <Col md="5">
            <Image id={s.photo} src={photo} alt="me" rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Greeting;
