import React, { Component } from "react";
import Contact from "../Contact/Contact.js";
import { ListGroup } from "reactstrap";
import { Consumer } from "../../Context.js";

class ContactList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <ListGroup>
                {contacts.map(contact => {
                  return (
                    <div className="container">
                      <Contact contact={contact} />
                    </div>
                  );
                })}
              </ListGroup>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
