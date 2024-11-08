
import React, { useState } from 'react';

export function DeliveryMethods() {
  console.log("DeliveryMethods component loaded - minimal version"); // Component load log

  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (method: string) => {
    console.log("Method change handler triggered - minimal version"); // Debug log
    setSelectedMethod(method);
  };

  return (
    <div>
      <h3>Minimal Delivery Method Component</h3>
      
      {/* Example Delivery Option */}
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="example"
            checked={selectedMethod === 'example'}
            onChange={() => handleMethodChange('example')}
          />
          Example Shipping
        </label>
      </div>
    </div>
  );
}
