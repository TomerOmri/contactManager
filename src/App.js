import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.js";
import Header from "./components/Header/Header.js";
import { Row, Col } from "reactstrap";
import { Provider } from "./Context.js";
import ContactForm from "./components/ContactForm/ContactForm.js";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <Row />
          <div className="container">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <ContactForm />
                <ContactList />
              </Col>
            </Row>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
