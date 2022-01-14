import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, Button, Nav, Navbar} from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom';
import '../style/navbar.css';
import '../style/popup.css';
import Popap from '../pages/Popap';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <div class="header">
      {/* /-------------The upper part of Navbar-----------/ */}
      <div class="header_wrapper">
        <div class="header_top">
          <a href="/" class="header_title">
            <div class="header_icon">
              <div class="header_name">ShopIPHONE</div>
            </div>
          </a>
          <div class="header_top_menu">
            <div class="header_item-search">
              <input className="header_search-input" type="text" placeholder="What are you looking for?"/>
            </div>
            <div class="header_wand-container">
              <div class="header_wand"></div>
            </div>
            <div class="header_input-controls">
              <div class="header_input-icon">

              </div>
            </div>
            <div class="header_item-container">
              <div class="header_item-profile">
                <a href="#popup">
                  <div class="header_item-icon">
                    <Popap/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* /---------------The lower part of Navbar-----------/ */}
        <div class="header_desktop">
        <div class="header_navigation">
          
            <div class="header_navigation_menu">
              <div class="header_button_menu">
                <a class="menu_button">Online consulting</a>
                <a class="menu_button">Purchase and financing</a>
                <a class="menu_button">Servis</a>
                <a class="menu_button">Technologies and innovations</a>
              </div>
            </div>
        
        </div>
        </div>

      </div>
    </div>
  );
});

export default NavBar;