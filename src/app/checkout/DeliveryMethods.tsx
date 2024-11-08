import { useState } from 'react';
import { ParcelLockerDropdown } from '@/app/checkout/ParcelLockerDropdown';

export function DeliveryMethods() {
  const [selectedMethod, setSelectedMethod] = useState('free');

  console.log('Selected Method:', selectedMethod);

  return (
    <div>
      <h3>Delivery Method</h3>
      
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="free"
            checked={selectedMethod === 'free'}
            onChange={() => setSelectedMethod('free')}
          />
          Free Shipping
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="standard"
            checked={selectedMethod === 'standard'}
            onChange={() => setSelectedMethod('standard')}
          />
          Standard Delivery
        </label>
        {selectedMethod === 'standard' && <ParcelLockerDropdown />} {/* Show only for "Standard Delivery" */}
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="express"
            checked={selectedMethod === 'express'}
            onChange={() => setSelectedMethod('express')}
          />
          Express Delivery
        </label>
      </div>
    </div>
  );
}
