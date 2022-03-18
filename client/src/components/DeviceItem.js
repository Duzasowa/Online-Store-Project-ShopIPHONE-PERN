import React from 'react';
import {Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import '../style/deviceItem.css'

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <div class="item_col">
            <div class="di2-oeulnfy">
                <div class="di3-sptuhsw">
                    <div class="di4-xcmbbfi">
                        <div class="di5-egegwfs">
                            <div class="di6-wegegs" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                                <div class="di7-dfgnfs">
                                    {device.name}
                                </div>
                                <div class="di8-ugjsgrk">
                                    <div class="di9-jpagjuy">
                                        Available products
                                    </div>
                                </div>
                                <div class="di10-jpfdhfd">
                                    <Image width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                                </div>
                            </div>
                        </div>

                    </div>
                                        
                                            {/* Product evaluation */}
                    {/* <div class="di5-ugjsgrk"className="d-flex align-items-center">
                        <div class="di6-jpagjuy" >
                            {device.rating}
                        </div>
                        <Image style={{ marginRight: 10 }} width={18} height={18} src={star}/>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
};

export default DeviceItem;