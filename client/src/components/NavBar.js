import React, {useContext} from 'react';
import {Context} from "../index";
import { ADMIN_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import { useHistory } from 'react-router-dom';
import '../style/navbar.css';
import '../style/popup.css';
import Popup from '../Popups/Popup';
import Consulting from '../Popups/Consulting';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()

  const storege = () => {
    localStorage.clear();
  }

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.clear()
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
                  {/* ICON */}
              </div>
            </div>
            <div class="header_item-container">
              <div class="header_item-profile">
                <div class="syrybf">
                  <div class="cjbxog">
                    <div class="dplzxs">
                      <a class="mmztxu" href="#popup">
                        <div class="header_item-icon">
                          <Popup/>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* /---------------The lower part of Navbar-----------/ */}
        <div class="header_desktop">
          <div class="header_navigation">
            <div class="header_navigation_menu">
              <button class="menu_button">
                <Consulting/>
                <a class="menu_text" href="#consulting">Online consulting</a>
              </button>
              <button class="menu_button">
                <a class="menu_text">Purchase and financing</a>
              </button>
              <button class="menu_button">
                <a class="menu_text">Servis</a>
              </button>
              <button class="menu_button">
                <a class="menu_text">Technologies and innovations</a>
              </button>
              {user.isAuth ?
                <div class="main_button">
                  <div class="menu_button"
                    onClick={() => history.push(ADMIN_ROUTE)} 
                  >
                    Admin Panel
                  </div>
                  <div class="menu_button"
                    onClick={() => logOut()}
                  >
                    Log off
                  </div>
                </div>
                :
                <div class="menu_button" style={{paddingLeft: 710}} >
                  {/* <a variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</a> */}
                </div>
              }
              

            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default NavBar;