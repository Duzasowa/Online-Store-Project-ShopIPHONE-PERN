import React from "react";
import { Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/bigStar.png"

const DevicePage = () => {
  const device ={id: 1, name: "Iphone 12 pro", price: 11000, rating: 3, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
  const description = [
    {id:1, title: 'RAM', description: '54GB'},
    {id:2, title: 'Processor', description: 'Core I3'},
    {id:3, title: 'Number of Cores', description: '4'},
    {id:4, title: 'HDD', description: '1024GB'},
    {id:5, title: 'Camera', description: '12MP'},
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} scr={device.img}/>
        </Col>
        <Col md={4}>
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
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Characteristic</h2>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;

