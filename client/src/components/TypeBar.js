import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/typeBar.css'


const TypeBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <div class="wd1-iarspct">
      <section class="wd2-vwrqfbh">
        <div class="wd3-vwvlycq">
          <div class="wd4-pejmxuy">
            <section class="wd5-eeervjw">
              <h2 class="wd6-dpsrfrw">Product type</h2>
              <div class="wd7-uanrfzw">
                {device.types.map(type => 
                  <a class="wd8-vsvjdjs" 
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                  >
                    {type.name}
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
});

export default TypeBar;