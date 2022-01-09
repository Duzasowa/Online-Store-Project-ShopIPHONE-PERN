import React from "react";
import TypeBar from "../components/TypeBar";
import {useContext, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import { SHOP_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";
import Pages from "../components/Pages";
import '../style/shop.css'
import Footer from "../components/Footer";


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
      <div class="intro_container"></div>
          <div class="brand_container">
            <div class="brandbar">
              <BrandBar/>
            </div>
            <Button style={{cursor:'pointer', fontSize: '10px', marginLeft: '140px'}} variant="outline-secondary" href="/">ALL PRODUCTS</Button>
            <div class="device_type_container">
              <div class="typebar"><TypeBar/></div>
              <div class="device"><DeviceList/></div>
            </div>
          </div>
          <Pages/>

    </div>
    

  );
});

export default Shop;
