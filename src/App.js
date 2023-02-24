import React, { useState } from 'react';

function MultiSelect() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
console.log(selectedOptions);
  const handleChange = (event) => {
    const value = event.target.value;

    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div>
      <div>
        <select value={selectedOptions.join(',')} onChange={handleChange} >
          <option value="" disabled hidden>Select options...</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div>
        {selectedOptions.join(',')}
        </div>
      </div>
    </div>
  );
}

export default MultiSelect;