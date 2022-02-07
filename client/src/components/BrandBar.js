import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { SHOP_ROUTE} from '../utils/consts';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import "../style/brandBar.css"



const BrandBar = observer(() => {
  const history = useHistory()
  const {device} = useContext(Context)

  return (
    <div class="bb1-brandBar">
      <div class="bb2-polrepqh">
        <section class="bb3-brandBar_container">
          <div class="bb4-jdzerqpnqowscli">
            <div class="bb5-qhegqvuferebaif">              
              <div>
                <button
                  class="bb6-wscnpnmv" onClick={() => {
                  history.go(0); 
                  // setTimeout(function(){window.scrollTo(0, 900) }, 12)
                  }}
                  >
                  <a>All  produkts</a>
                </button>
              </div>
              {device.brands.map(brand =>
                  <button class="bb6-wscnpnmv"
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                  >
                    {brand.name}
                  </button>
                )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default BrandBar;