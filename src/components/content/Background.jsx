import React from "react";
import { Container } from "react-bootstrap";
// import { Container, Col, Image } from "react-bootstrap";

function Background(props) {
  return (
    <section id="background">
      <Container className="block">
        <h2>Немного прошлого</h2>
        <p>
          Окончил КубГТУ с двумя специальностями: "Сервис технологических и
          транспортных машин (в пищевой и перерабатывающей промышленности)" и
          "Финансы и кредит".
        </p>
        <p>
          Сразу после окончания университета устроился на хлебозавод
          слесарем-ремонтником, в конце 2013 года получил повышение до мастера
          по эксплуатации и ремонту оборудования. В конце 2017 года получил
          должность главного механика. Организовывал работы по ремонту
          оборудования, вел обязательную документацию, проектировал цеха для
          модернизации, составлял бюджеты... Но развития дальше в принципе быть
          не могло. Поэтому начал думать о том, чтобы сменить профессию. Я
          продал машину, чтобы уменьшить финансовую нагрузку и начал собирать
          деньги.{" "}
          <a
            href="https://kuban.rbc.ru/krasnodar/freenews/5df777b89a794700be42b91d"
            target="blank"
          >
            Пожар в конце 2019 года
          </a>{" "}
          только утвердил мои намерения. К слову пожары на хлебозаводах не
          редкость (мука и масло, отличная смесь, чтобы гореть) и даже у нас был
          не первый, но накипело.
        </p>
        <p>
          Параллельно с работой я создал и вёл по очереди два сайта Skesov.ru и
          GeekTeam.pro. Оба были статейниками на Wordpress, посвящённые
          настройкам операционных систем Windows и Android. И когда встал вопрос
          о том, чем заниматься в будущем, если не работать на заводах - я решил
          начать с Веб-разработки. Узнав о моих планах друг из среды посоветовал
          мне курс от Angela Yu на Udemy, собственно{" "}
          <a href="https://www.udemy.com/certificate/UC-ee04e77e-487a-4c0f-8a56-88fbf99606d8/">
            его то я и прошёл
          </a>
          , первые результаты вы сейчас видите на экране.
        </p>
      </Container>
    </section>
  );
}

export default Background;
