
import { useState } from 'react';

export function DemoDropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div style={{ margin: '20px 0' }}>
      <label htmlFor="demoDropdown">Choose an option:</label>
      <select
        id="demoDropdown"
        onChange={(e) => setSelectedOption(e.target.value)}
        value={selectedOption}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}
