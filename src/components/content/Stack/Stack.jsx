import React from "react";
import { Container } from "react-bootstrap";
import s from "./Styles.module.css";

function Stack(props) {
  return (
    <section className="jumbotron" id="stack">
      <Container className="block">
        <h2>Что я умею делать?</h2>
        <div className={s.stack}>
          <div className={s.item_1}>
            <p>
              Благодаря курсу от Анджелы я знаю основы технологий из этого
              списка.
            </p>
          </div>
          <div className={s.item_2}>
            <ul class={s.list}>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>
                <span className={s.mern}>M</span>ongoDB
              </li>
              <li>
                <span className={s.mern}>E</span>xpress
              </li>
              <li>
                <span className={s.mern}>R</span>eact
              </li>
              <li>
                <span className={s.mern}>N</span>ode.js
              </li>
              <li>Rest API</li>
            </ul>
          </div>
          <div className={s.item_3}>
            <p>
              Конечно же, это не ответ на вопрос в заголовке. На данном этапе я
              могу запустить сервер на Node.js с модулем express, собрать
              модульную внешку в React и даже подключить его к базе MongoDB
              используя фреймворк Mongoose, а сверху ещё авторизацию через
              модуль Passport. В общем, думаю это неплохая идея для первого
              личного MERN stack проекта в портфолио и после создания этой
              страницы я этим и займусь.
            </p>
            <p>
              Сейчас я мало что могу сделать без подглядывания в документацию,
              но мне интересно и я хочу дальше развиваться в этой области.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Stack;
