import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{branding}</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <Link to="/" className="nav-link"><i className="fas fa-home" /> Home</Link>
          <Link to="/contact/add" className="nav-link"><i className="fas fa-plus" /> Add Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  branding: "myApp"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
