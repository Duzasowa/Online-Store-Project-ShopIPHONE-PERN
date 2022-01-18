import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import '../style/admin.css'
import '../style/shop.css'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  return (
    <div class="admin_header">
        <div class="admin_text">
          <div class="admin_description">Here you can add a product to the site</div>
        </div>
      <div class="admin_container">
        <div class="admin_inner">
          <div class="admin_item">
            <div class="admin_image"></div>
            <a class="stage_button"
              onClick={() => setTypeVisible(true)}
            >
              Add type
            </a>
          </div>

          <div class="admin_item">
            <div class="admin_image-2"></div>
            <a class="stage_button"
              onClick={() => setBrandVisible(true)}
            >
              Add brands
            </a>
          </div>

          <div class="admin_item">
            <div class="admin_image-3"></div>
            <a class="stage_button"
              onClick={() => setDeviceVisible(true)}
            >
              Add devices
            </a>
          </div>

          <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
          <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
          <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </div>
      </div>
    </div>

  );
}

export default Admin;