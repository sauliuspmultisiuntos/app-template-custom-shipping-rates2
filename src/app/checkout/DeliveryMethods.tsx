
import { useState } from 'react';
import { ParcelLockerPopup } from '@/app/checkout/ParcelLockerPopup';

export function DeliveryMethods() {
  const [selectedMethod, setSelectedMethod] = useState('free');
  const [showPopup, setShowPopup] = useState(false);

  const handleMethodChange = (method: string) => {
    console.log("Selected delivery method:", method); // Debug log
    setSelectedMethod(method);
    if (method.includes('Standard Delivery')) {
      console.log("Triggering popup for Standard Delivery"); // Debug log
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide popup for other methods
    }
  };

  return (
    <div>
      <h3>Delivery Method</h3>
      
      {/* Free Shipping Option */}
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="free"
            checked={selectedMethod === 'free'}
            onChange={() => handleMethodChange('free')}
          />
          Free Shipping
        </label>
      </div>

      {/* Standard Delivery Option */}
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="Standard Delivery 4"
            checked={selectedMethod === 'Standard Delivery 4'}
            onChange={() => handleMethodChange('Standard Delivery 4')}
          />
          Standard Delivery
          <div style={{ fontSize: '0.9em', color: '#666' }}>3-44 days</div>
        </label>
        <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>5,00 €</div>
      </div>

      {/* Express Delivery Option */}
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="express"
            checked={selectedMethod === 'express'}
            onChange={() => handleMethodChange('express')}
          />
          Express Delivery
          <div style={{ fontSize: '0.9em', color: '#666' }}>1-44 days</div>
        </label>
        <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>10,00 €</div>
      </div>

      {/* Popup for Parcel Locker selection */}
      {showPopup && <ParcelLockerPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
