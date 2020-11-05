import React from "react";
import { Container } from "react-bootstrap";

function Portfolio(props) {
  return (
    <section className="jumbotron" id="portfolio">
      <Container className="block">
        <h2>Портфолио</h2>
        <p>
          На данный момент это заготовка для данного блока, она будет
          пополняться по мере выхода проектов
        </p>
      </Container>
    </section>
  );
}

export default Portfolio;
