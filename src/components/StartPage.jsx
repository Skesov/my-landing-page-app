import React from "react";
import { Container, Jumbotron, Button, Form } from "react-bootstrap";

function StartPage(props) {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    const input = event.target.value;
    setName(input);
  }

  return (
    <Jumbotron>
      <Container className="startpage">
        <h1>Добрый день!</h1>
        <p>Давайте познакомимся, введите ваше имя в поле ниже.</p>

        <Form
          className="form-inline mt-2 mt-md-0"
          onSubmit={(event) => {
            props.takeName(name);
            event.preventDefault();
          }}
        >
          <Form.Group controlId="userName">
            <Form.Control
              onChange={handleChange}
              className="form-control mr-sm-2"
              placeholder="Ваше имя"
              autoComplete="off"
            />
          </Form.Group>

          <Button
            type="submit"
            variant="secondary"
            className="btn my-2 my-sm-0"
          >
            Продолжить
          </Button>
        </Form>
        <br />
        <p className="footnote">
          Ваши данные нигде не сохраняются, данное приложение использует только
          React.useState(). Сброс произойдет при закрытии или перезагрузке
          страницы.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default StartPage;
