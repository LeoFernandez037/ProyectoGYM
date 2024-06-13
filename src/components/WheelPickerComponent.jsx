// WheelPickerComponent.js
import React, { useState } from 'react';
import WheelPicker from 'react-simple-wheel-picker';
import "./WheelPickerComponent.css";
function WheelPickerComponent () {
  const values = ['test1', 'test2', 'test3', 'test4', 'test5'];

  const [data, setData] = useState(values.map((value, index) => ({
    id: (index + 1).toString(),
    value: value
  })));

  const handleOnChange = (target) => {
    console.log(target);
  };

  return (
    <div className="wheel-picker-wrapper">
<WheelPicker
      data={data}
      onChange={handleOnChange}
      height={200}
      width={250}
      titleText="Enter value same as aria-label"
      itemHeight={50}
      selectedID={data[0].id}
      color="#ffffff"
      activeColor="rgba(208, 253, 62, 1)"
      backgroundColor="transparent"
      fontSize="45px"
      shadowColor="transparent"
    />
    </div>
    
  );
};

export default WheelPickerComponent;
