import React, { Component } from "react";
import Contact from "../Contact/Contact.js";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class ContactList extends Component {
  constructor() {
    super();

    // this.deleteClickHandler = this.deleteClickHandler.bind(this);

    this.state = {
      contacts: [
        {
          id: 1,
          name: "Tomer Omri",
          email: "tomeromrix@gmail.com",
          phone: "0528822813"
        },
        {
          id: 2,
          name: "Shany Shefer",
          email: "shany@gmail.com",
          phone: "0092342813"
        },
        {
          id: 3,
          name: "Shirel Montana",
          email: "shirel@gmail.com",
          phone: "0528928819"
        }
      ]
    };
  }

  deleteContact = () => {
    console.log("123");
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        <ListGroup>
          {contacts.map(contact => {
            return (
              <div className="container">
                <Contact
                  contact={contact}
                  deleteClickHandler={this.deleteContact}
                />
              </div>
            );
          })}
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default ContactList;
