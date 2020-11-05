import React from "react";
import { Container } from "react-bootstrap";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';

function Contacts(props) {
  const email = process.env.REACT_APP_EMAIL;
  const phone = process.env.REACT_APP_PHONE;
  const telegram = process.env.REACT_APP_TELEGRAM;
  return (
    <section id="contacts">
      <Container className="block">
        <h2>Как со мной можно связаться</h2>
        {/* <p>
          Сейчас я живу в Краснодаре. Если не найду вариант трудоустройства
          здесь, скорее всего займусь переездом в Москву.
        </p>
        <p>Вот несколько вариантов связи со мной:</p> */}
        <div className="contacts-grid-container">
          <div className="contacts-item">
            <EmailOutlinedIcon style={{ fontSize: 70 }} />
            <p className='contacts-subtitle'>EMAIL</p>
            <a href={"mailto:" + email} target="blank">
              {email}
            </a>
          </div>
          <div className="contacts-item">
            <PhoneIphoneOutlinedIcon style={{ fontSize: 70 }} />
            <p className='contacts-subtitle'>PHONE</p>
            <a href={"tel:" + phone} target="blank">
              {phone}
            </a>
          </div>
          <div className="contacts-item">
            <TelegramIcon Outlined style={{ fontSize: 80 }} />
            <p className='contacts-subtitle'>TELEGRAM</p>
            <a href={"https://t.me/" + telegram} target="blank">
              {telegram}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
