import { useState } from 'react'; // Add this import
import { ParcelLockerDropdown } from '@/app/checkout/ParcelLockerDropdown';

export function DeliveryMethods() {
  const [selectedMethod, setSelectedMethod] = useState('standard'); // or however your delivery method is managed

  return (
    <div>
      <h3>Delivery Method</h3>
      {/* Other delivery options */}
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
        {selectedMethod === 'standard' && <ParcelLockerDropdown />} {/* Show dropdown when Standard is selected */}
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
