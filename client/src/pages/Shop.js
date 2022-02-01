import React from "react";
import TypeBar from "../components/TypeBar";
import {useContext, useEffect} from 'react';
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";
import Pages from "../components/Pages";
import '../style/shop.css'


const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand,])

  return (
    <div class="intro">
      <div class="intro_container">
        <div class="stage_content">
          <div class="stage_text">
            <div class="stage_text-column">
              <h1 class="stage_title">
                <p>Your device Apple</p>
                <p>without leaving home.</p>
              </h1>
              <h2 class="stage_description">
                <p>Check available products now.</p>
              </h2>
            </div>
          </div>
          {/* <------------------------> */}
          <div class="stage_under-text">
            <div class="grid_col">
              <div class="stage_grid">
                 <a class="stage_button">List Online</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CLOSED INTRO CONTAINER */}

      {/* OPEN DEVICE CONTAINER */}

      <div class="device">
        <div class="device_container">
          <div class="device_wb3">
            <div class="device_container-wb">
              <div class="device_wb3">
                <div class="device_intro_text">
                  <h1 class="wbtext_container">Model overview</h1>
                </div>
              </div>
              <div class="device_wb3 brandbar_list">
                <div class="wb4_brandbar_list">
                  <section class="wb5_brandbar_list">
                    <div class="wb6_brandbar_list">
                      <BrandBar/>
                    </div>
                  </section>
                </div>
              </div>
              <div class="w7">
                <div class="wb8_typebar">
                 <TypeBar/>
                </div>
                <div class="wb9_devicelist">
                  <DeviceList/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pages/>
    </div>
    

  );
});

export default Shop;
