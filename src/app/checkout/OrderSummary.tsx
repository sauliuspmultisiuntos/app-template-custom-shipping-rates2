
import React, { useState } from 'react';

export function OrderSummary() {
  const [pickupPoint, setPickupPoint] = useState('Pickup Point A'); // Default value for demo

  return (
    <div style={{ padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <h3>Order Summary</h3>
      {/* Existing order summary content goes here */}
      
      {/* Demo Pickup Point Section */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6e6e6', borderRadius: '5px' }}>
        <strong>Pickup Point:</strong>
        <div>
          <select value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)}>
            <option value="Pickup Point A">Pickup Point A - City Center</option>
            <option value="Pickup Point B">Pickup Point B - Northside</option>
            <option value="Pickup Point C">Pickup Point C - Eastside</option>
          </select>
        </div>
      </div>
    </div>
  );
}
