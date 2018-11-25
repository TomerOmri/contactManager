import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    const { contact } = this.props;
    let infoVisible = false;

    const onShowInfo = () => {
      infoVisible = infoVisible ? false : true;
    };

    return (
      <div className="container">
        <ListGroupItem active>
          <ListGroupItemHeading>
            {contact.name}{" "}
            <i onClick={onShowInfo()} className="fas fa-sort-down" />
          </ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading />
          <ListGroupItemText>
            <ul>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>
      </div>
    );
  }
}

export default Contact;
