import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <Row  md={4} className="g-2 d-flex text-center" style={{marginLeft: 70}} >
        {device.brands.map(brand =>
          <Button
            variant="outline-secondary"
            style={{cursor:'pointer', maxWidth:'200px'}}
            key={brand.id}
            className="p-2"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Button>
        )}
    </Row>
  );
});

export default BrandBar;