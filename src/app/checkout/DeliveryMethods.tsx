
import { useState } from 'react';
import { ParcelLockerPopup } from '@/app/checkout/ParcelLockerPopup';

export function DeliveryMethods() {
  console.log("DeliveryMethods component loaded - updated version"); // Component load log

  const [selectedMethod, setSelectedMethod] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleMethodChange = (method: string) => {
    console.log("Method change handler triggered - updated version"); // Debug log
    setSelectedMethod(method);
    if (method === 'parcelLocker') {
      console.log("Triggering popup for Parcel Locker selection"); // Debug log for popup trigger
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

      {/* Parcel Locker Option */}
      <div>
        <label>
          <input
            type="radio"
            name="deliveryMethod"
            value="parcelLocker"
            checked={selectedMethod === 'parcelLocker'}
            onChange={() => handleMethodChange('parcelLocker')}
          />
          Parcel Locker
        </label>
      </div>

      {/* Standard and Express Delivery Options */}
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
        </label>
      </div>
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
        </label>
      </div>

      {/* Popup for Parcel Locker selection */}
      {showPopup && <ParcelLockerPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
