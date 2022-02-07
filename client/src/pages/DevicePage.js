import React, {useEffect, useState} from "react";
import { Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"
import { DUMMY_ROUTE } from '../utils/consts';
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { useHistory } from 'react-router-dom';
import "../style/devicePage.css"

const DevicePage = () => {
  const history = useHistory()
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (

    <div class="device_page">
      {/* -----The upper part----- */}
      <div class="dn1-device_navbar">
        <div class="dn2-device_wrapper">
          <div class="dn3-device_content">
            <div class="dn4-device_title">
              <a class="dn5-device_name">
                {device.name}
              </a>
            </div>
            <div class="dn6-device_price">
              <div class="dn7-device_content">
                <div class="dn8-device_navbar"> 
                  <div class="dn9-device_navbar">
                    From
                  </div>
                  <div class="dn10-device_navbar">
                    {device.price}$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower part   */}
      <div class="dp1-device_page-main">
        <div class="dp2-device_page-main2">
          <div class="dp3-device_page-row">
            {/* -----The left part----- */}
            <div class="dp4-device_column">
              <div class="dp5-device_img">
                <Image width={550} height={556} src={process.env.REACT_APP_API_URL + device.img}/>
              </div>
              <div class="dp6-device_box-service">
                <div class="dp7-device_box-row">
                  <div class="dp8-device_box-delivery">
                    <p class="dp9-device_box-text">Free contactless delivery. </p>
                  </div>
                  <div class="dp8-device_box-return">
                    <p class="dp9-device_box-text">Simple and free returns</p>
                  </div>
                </div>
              </div>
              <div class="dp10-device_box-contact">
                <div class="dp11-device_chat">
                  <div class="dp12-device_text">
                    Shopping assistance:
                  </div>
                  <div class="dp13-decice_context">
                    call 999 999 999
                  </div>
                </div>
              </div>
            </div>
            {/* -----The right part----- */}
            <div class="dc1-device_column-large">
              <div class="dc2-vjnkiqb">
                <div class="dc3-nayxonh">
                  <h1 class="dc4-fnajlyc">
                    <div class="dc5-gnkfcmd">News</div>
                    Buy {device.name}
                  </h1>
                </div>
              </div>

              <div class="dc6-iljrhqv">
                <div class="dc7-ypnxdpj">
                  <div class="dc8-rqigcsf">
                    Choose the model for you.
                  </div>
                  <div class="dc9-geqolko">
                    <div class="dc10-vtlsess">
                      <a class="dc11-sluoenu" onClick={() => history.push(DUMMY_ROUTE)}>
                        Which version is for you?
                      </a>
                    </div>
                  </div>
                  <div class="dc12-rheowfh">
                    <div class="dc13-kolarab ">
                      <span class="dc17-fcrchvw">
                        <span class="dc18-phgykyv">
                          {device.name}
                        </span>
                        <span class="dc19-qkpgjff">
                          From
                          <span class="dc22-optgzyb">{device.price}$</span>
                        </span>
                      </span>
                      <span class="dc20-ucmjosn">
                        <span class="dc21-tsrajjn">
                          Choose the best for yourself!
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Row className="d-flex flex-column m-3" style={{paddingTop: 50}}>
                <h2>Characteristic</h2>
                {device.info.map((info, index) =>
                  <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                  </Row>
                )}
              </Row>
            </div>
          </div>
        </div>
      </div>
      
      {/* xxxxxxxxxxxxxxxxxxxxxxxxx
      <div class="dc23-egdlzu">
        <div class="dc24-rnnuxs">Contents of the package</div>
        <div class="dc25-vqggck">
          <div class="dc26-lhqiqn"></div>
          <div class="dc27-xaftjm"></div>
        </div>

      </div> */}


    </div>
    
  );
}

export default DevicePage;

           

{/* <Col md={4}>
                  <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                    >
                      {device.rating}
                    </div>
                  </Row>
                </Col>
                <Col md={4}>
                  <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                  >
                    <h3>Cost: {device.price}$</h3>
                    <Button variant={"outline-dark"}>Add to Basket</Button>
                  </Card>
                </Col> */}