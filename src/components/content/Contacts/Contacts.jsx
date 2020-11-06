import React from "react";
import { Container } from "react-bootstrap";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import s from "./Contacts.module.css";
console.log(s);

function Contacts(props) {
  const email = process.env.REACT_APP_EMAIL;
  const phone = process.env.REACT_APP_PHONE;
  const telegram = process.env.REACT_APP_TELEGRAM;
  return (
    <section className={s.contacts} id='contacts'>
      <Container className="block">
        <h2>Как со мной можно связаться</h2>

        <div className={s.container}>
          <div className={s.item}>
            <EmailOutlinedIcon style={{ fontSize: 70 }} />
            <p className={s.subtitle}>EMAIL</p>
            <a href={"mailto:" + email} target="blank">
              {email}
            </a>
          </div>
          <div className={s.item}>
            <PhoneIphoneOutlinedIcon style={{ fontSize: 70 }} />
            <p className={s.subtitle}>PHONE</p>
            <a href={"tel:" + phone} target="blank">
              {phone}
            </a>
          </div>
          <div className={s.item}>
            <TelegramIcon Outlined style={{ fontSize: 80 }} />
            <p className={s.subtitle}>TELEGRAM</p>
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
