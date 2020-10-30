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
          <li><span className='mern'>M</span>ongoDB</li>
          <li><span className='mern'>E</span>xpress</li>
          <li><span className='mern'>R</span>eact</li>
          <li><span className='mern'>N</span>ode.js</li>
          <li>принципы Rest API</li>
        </ul>
        <br />
        <p>
          Конечно же, это не ответ на вопрос в заголовке. На данном этапе я могу
          запустить сервер на Node.js с модулем express, собрать модульную внешку в React и даже подключить его к базе MongoDB используя фреймворк
          Mongoose, а сверху ещё авторизацию через модуль Passport. В общем,
          думаю это неплохая идея для первого личного проекта (MERN stack) в портфолио и
          после создания этой страницы я этим и займусь.
        </p>
        <p>
          Сейчас я ещё мало чего могу сделать без подглядывания в документацию, но мне интересно и я хочу дальше развиваться в этой
          области.
        </p>
      </Container>
    </section>
  );
}

export default Stack;
