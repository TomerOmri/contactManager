import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.js";
import Header from "./components/Header/Header.js";
import { Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Row />
        <div className="container">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              {" "}
              <ContactList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
