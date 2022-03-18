import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {Context} from "../index";
import '../style/popup.css'


const Popup = () => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.clear()
  }

  return (
    <div id="popup" class="popup">
      <a href='' class="popup_area"></a>
      <div class="popup_body">
        <div class="popup_content">
          {user.isAuth ?
            <div class="">
              <a href="#" class="popup_close">x</a>
              <div class="popup_title">ShopIPHONE</div>
                <div class="popup_text">Welcome!</div>
                <div class="popup_btns">
                  <div class="popup_button-up"
                    onClick={() => {
                      history.push(ADMIN_ROUTE)
                      window.location.reload();
                    }}
                  >
                    Admin Panel
                  </div>
                  <div class="popup_button-down"
                    onClick={() => {
                      logOut();
                      window.location.reload();
                    }}
                  >
                    Log off
                  </div>
                </div>
            </div>
            :
            <div>
              <a href="#" class="popup_close">x</a>
              <div class="popup_title">ShopIPHONE</div>
              <div class="popup_text">Log in here.</div>
              <div class="popup_btns">
                <div class="popup_button-up"
                  onClick={() => {
                    history.push(LOGIN_ROUTE);
                    window.location.reload();
                  }}
                >
                  Log in
                </div>
                <div class="popup_button-down"
                  onClick={() => {
                    history.push(REGISTRATION_ROUTE);
                    window.location.reload();
                  }}
                >
                  Registration
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>  
  );
}

export default Popup;
