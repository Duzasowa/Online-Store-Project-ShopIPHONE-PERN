import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>VRSHOP</NavLink>
          {user.isAuth ?
            <Nav className="ms-auto">
              <Nav.Link style={{color: 'white'}} href="#home">Admin Panel</Nav.Link>
              <Nav.Link style={{color: 'white'}} href="#features">Sing</Nav.Link>
            </Nav>
            :
            <Nav className="ms-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
            </Nav>
          }
      </Container>
    </Navbar>

  );
});

export default NavBar;