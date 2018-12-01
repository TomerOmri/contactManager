import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class Contact extends Component {
  constructor() {
    super();
    this.state = { showContactInfo: false };
  }

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="container">
        <ListGroupItem>
          <ListGroupItemHeading>
            {contact.name}{" "}
            <i
              onClick={() => {
                this.onShowClick();
              }}
              className="fas fa-sort-down"
              style={{ cursor: "pointer", color: "black" }}
            />
            <i
              className="fas fa-times"
              onClick={() => {
                this.onDeleteClick();
              }}
              style={{ cursor: "pointer", float: "right", color: "red" }}
            />
          </ListGroupItemHeading>
        </ListGroupItem>
        {showContactInfo ? (
          <div>
            {" "}
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
        ) : (
          <div />
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
