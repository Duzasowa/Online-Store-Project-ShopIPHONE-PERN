import React from "react";
import "../style/iphonePage.css"
import Video from "../video/video.mp4"

const iphonePage = () => {
  return (
    <div class="iphonePage_intro">
      {/* ------The upper part-intro------ */}
      <div class="full_screen">
        <div class="full_screen-body">
          <div class="full_screen-title">Iphone 13</div>
          <div class="full_screen-text">Every inch is a professional.</div>
        </div>
        <video class="full_screen_video" autoPlay muted preload="auto">
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      {/* ------Advantages------ */}

      <div class="ip1-gghpjt">
        <div class="ip2-bqjong">
          <p>Night time?</p>
          <p>Strong.</p>
        </div>
        <div class="ip3-hjhlgx">

        </div>
      </div>
      <div class="ip1-gghpjt">
        <div class="ip2-bqjong-2">

        </div>
        <div class="ip3-hjhlgx-2">
          <p>2,2X times more</p>
          <p>lights</p>
        </div>
      </div>
      
      {/* ------Size------ */}
      <div class="iphonePage_content">
        <div class="ip4-content_container">
          <div class="ip5-kfvzkn">
            iPhone 13 Pro Max
            <p class="ip6-mqimja">6.7'</p>
          </div>
          <div class="ip7-jwjqkc"></div>
          <div class="ip8-zeynim"></div>
          <div class="ip9-zfmksi">
             iPhone 13 Pro
             <p class="ip10-vbgtiq">6.7'</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iphonePage;