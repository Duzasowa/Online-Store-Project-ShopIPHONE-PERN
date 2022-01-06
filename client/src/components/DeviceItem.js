import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={4} className={"mt-3"} >
            <Card style={{width: 210, height: 300,  cursor: 'pointer', margin: 12, textAlign: "center"}} border={"grey"} border-r onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div style={{ paddingLeft:22 }} >Device...</div>
                    <div className="d-flex align-items-center">
                        <div  >{device.rating}</div>
                        <Image style={{ marginRight: 10 }} width={18} height={18} src={star}/>
                    </div>
                </div>
                <div style={{ paddingLeft:10 }}>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;