
import React, { useState } from 'react';

interface ParcelLockerPopupProps {
  onClose: () => void;
}

export function ParcelLockerPopup({ onClose }: ParcelLockerPopupProps) {
  const [selectedLocker, setSelectedLocker] = useState('');

  const parcelLockers = [
    { id: 1, name: 'Parcel Locker A - City Center' },
    { id: 2, name: 'Parcel Locker B - Northside' },
    { id: 3, name: 'Parcel Locker C - Eastside' },
  ];

  return (
    <div style={{
      position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      padding: '20px', backgroundColor: 'white', border: '1px solid #ddd', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    }}>
      <h3>Select Parcel Locker</h3>
      <select
        onChange={(e) => setSelectedLocker(e.target.value)}
        value={selectedLocker}
        style={{ marginBottom: '20px', padding: '5px' }}
      >
        <option value="" disabled>Select a location</option>
        {parcelLockers.map(locker => (
          <option key={locker.id} value={locker.id}>{locker.name}</option>
        ))}
      </select>
      <div>
        <button onClick={onClose} style={{ padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Close</button>
      </div>
    </div>
  );
}
