import React from "react";
import { Container } from "react-bootstrap";

function Contacts(props) {
  const email = process.env.REACT_APP_EMAIL;
  const phone = process.env.REACT_APP_PHONE;
  const telegram = process.env.REACT_APP_TELEGRAM;
  return (
    <section id="contacts">
      <Container className="block">
        <h2>Как со мной можно связаться</h2>
        <p>
          Сейчас я живу в Краснодаре. Если не найду вариант трудоустройства
          здесь, скорее всего займусь переездом в Москву.
        </p>
        <p>Вот несколько вариантов связи со мной:</p>
        <ul>
          <li>
            Email:{" "}
            <a href={"mailto:" + email} target="blank">
              {email}
            </a>
          </li>
          <li>
            Телефон:{" "}
            <a href={"tel:" + phone} target="blank">
              {phone}
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a href={"https://t.me/" + telegram} target="blank">
              {telegram}
            </a>
          </li>

        </ul>
        <p>А также, вы можете посетить мой <a href='https://github.com/Skesov' target='blank'>GitHub</a>, на котором будут находиться
          исходники данного и следующих моих проектов.</p>
      </Container>
    </section>
  );
}

export default Contacts;
