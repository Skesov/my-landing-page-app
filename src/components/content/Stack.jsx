import React from "react";
import { Container } from "react-bootstrap";

function Stack(props) {
  return (
    <section className="jumbotron" id="stack">
      <Container className="block">
        <h2>Что я умею делать?</h2>
        <p>Благодаря курсу от Анджелы я знаю основы следующих технологий: </p>
        <ul class="list-rectangle">
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>принципы Rest API</li>
        </ul>
        <br />
        <p>
          Конечно же, это не ответ на вопрос в заголовке. На данном этапе я могу
          запустить сервер на Node.js с модулем express, собрать небольшой блог
          на движке ejs и даже подключить его к базе MongoDB используя фреймворк
          Mongoose, а сверху ещё авторизацию через модуль Passport. В общем,
          думаю это неплохая идея для первого личного проекта в портфолио и
          после создания этой страницы я этим и займусь.
        </p>
        <p>
          Сейчас я ещё мало чего могу сделать без открытой документации на
          втором мониторе, но мне интересно и я хочу дальше развиваться в этой
          области.
        </p>
      </Container>
    </section>
  );
}

export default Stack;
