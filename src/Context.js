import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {" "}
        {this.props.children}{" "}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
