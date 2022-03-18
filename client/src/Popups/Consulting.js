import React from "react";
import { DUMMY_ROUTE, IPHONEPAGE_ROUTE } from '../utils/consts';
import { useHistory } from 'react-router-dom';
import '../style/consulting.css';


const Consulting = () => {
  const history = useHistory()
  return (
    <div id="consulting" class="popups">
      <a href='#' class="popups_area"></a>
      <div class="popups_body">
        <div class="popups_content">
          <a href="#" class="popup_close">x</a>
          <div class="popups_title">Our products</div>
          <div class="rgjhzj">
            <div class="jgygwt">
              <div class="popups_text">
                <a class="cqxedz" onClick={() => {history.push(IPHONEPAGE_ROUTE); window.location.reload();}}>
                  <p>Iphone 13</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
              <div class="popups_text">
                <a class="cqxedz" onClick={() => history.push(DUMMY_ROUTE)}>
                  <p>In the process ...</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;