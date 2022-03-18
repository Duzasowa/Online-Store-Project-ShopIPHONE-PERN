import React, {useContext} from 'react';
import {Context} from "../index";
import $ from 'jquery'; 
import { DUMMY_ROUTE, SERVIS_ROUTE, FINANCING_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import { useHistory } from 'react-router-dom';
import '../style/navbar.css';
import '../style/popup.css';
import Popup from '../Popups/Popup';
import Consulting from '../Popups/Consulting';

 

function barsik(event){
  document.querySelector('#nav-toggle').onclick = function(event){
    event.preventDefault();
  
    $(this).toggleClass("active");
    $("#header_navigation_menu").toggleClass("active");
  
  }
}

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()


  return (
    <div class="header header--fixed" id="header">
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
        <div class="header_desktop"  id="header_desktop">
          <div class="header_navigation">
            
            <div class="header_navigation_menu" id="header_navigation_menu">
              <a class="menu_button" >
                <Consulting/>
                <a class="menu_text" href="#consulting">Online consulting</a>
              </a>
              <a class="menu_button">
                <a class="menu_text" onClick={() => history.push(FINANCING_ROUTE)} >Purchase and financing</a>
              </a>
              <a class="menu_button">
                <a class="menu_text" onClick={() => history.push(SERVIS_ROUTE)} >Servis</a>
              </a>
              <a class="menu_button">
                <a class="menu_text" onClick={() => history.push(DUMMY_ROUTE)} >Technologies and innovations</a>
              </a>
            </div>

            <div class="nav-toggle" id="nav-toggle" onClick={barsik}>
              <span class="nav-toggle__item">Menu</span>
            </div>
              
          </div>
        </div>


      </div>
    </div>
  );
});




export default NavBar;