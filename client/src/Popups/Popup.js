import React from "react";
import '../style/popup.css'


const Popup = () => {
  return (
      <div id="popup" class="popup">
        <a href='' class="popup_area"></a>
        <div class="popup_body">
          <div class="popup_content">
            {/* <a href="#" class="popup_close">x</a> */}
            <div class="popup_title">ShopIPHONE</div>
            <div class="popup_text">Log in here.</div>
            <div class="popup_btns">
             <a href="/login" class="popup_button-up">Log in</a>
             <a href="registration" class="popup_button-down">Registration</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Popup;