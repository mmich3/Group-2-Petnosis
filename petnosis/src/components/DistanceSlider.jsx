import React, { useState } from 'react';

const DistanceSlider = ({ onChange }) => {
  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full max-w-md mt-4">
      <label className="label">
        <span className="label-text font-semibold text-sm text-black">Search Radius: {value} miles</span>
      </label>
      <input
        type="range"
        min="1"
        max="25"
        value={value}
        onChange={handleChange}
        className="range range-primary w-full"
      />
      <div className="w-full flex justify-between text-xs px-1 mt-1">
        <span>1</span>
        <span>25</span>
      </div>
    </div>
  );
};

export default DistanceSlider;