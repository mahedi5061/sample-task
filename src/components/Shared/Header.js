import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Profile from '../../images/3135715.png';
import './Header.css';
import {IoMdArrowDropdown} from 'react-icons/io';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" style={{padding: "25px"}}>
      <Container>
        <ul className="list-unstyled d-flex align-items-center gap-5 nav-menu">
            <li><a href="#" className="text-decoration-none text-uppercase menu-item">classes</a><IoMdArrowDropdown className="menu-item"/></li>
            <li><a href="#" className="text-decoration-none text-uppercase menu-item">subjects</a><IoMdArrowDropdown className="menu-item"/></li>
            <li><a href="#" className="text-decoration-none text-uppercase menu-item">tutor</a></li>
            <li><a href="#" className="text-decoration-none text-uppercase menu-item">students</a></li>
            <li><a href="#" className="text-decoration-none text-uppercase menu-item">parents</a></li>
            
        </ul>
        <li className="list-unstyled d-flex "><img src={Profile} style={{width:"50px"}}></img><NavDropdown   id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">PROFILE</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SIGN OUT</NavDropdown.Item>
           
        </NavDropdown></li>
      </Container>
    </Navbar>
  );
};

export default Header;
