import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  setValue: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step, value, setValue }) => {
  const range = max - min;
  const percentage = ((value - min) / range) * 100;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div
        style={{
          width: `${percentage}%`,
          height: '10px',
          backgroundColor: 'blue',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            top: '-5px',
            left: `${percentage - 10}%`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default Slider;
