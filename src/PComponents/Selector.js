// src/components/Selector.js
import React from 'react';

function Selector({ options, selectedValue, onChange }) {
  return (
    <div className="selector">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default Selector;
