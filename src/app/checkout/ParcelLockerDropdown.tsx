// src/app/checkout/ParcelLockerDropdown.tsx
import { useState } from 'react';

export function ParcelLockerDropdown() {
  const [selectedLocker, setSelectedLocker] = useState('');
  const parcelLockers = [
    { id: 1, name: 'Parcel Locker A - City Center' },
    { id: 2, name: 'Parcel Locker B - Northside' },
    { id: 3, name: 'Parcel Locker C - Eastside' },
  ];

  return (
    <div>
      <label htmlFor='parcelLocker'>Choose a parcel locker:</label>
      <select id='parcelLocker' onChange={(e) => setSelectedLocker(e.target.value)} value={selectedLocker}>
        <option value='' disabled>
          Select a location
        </option>
        {parcelLockers.map((locker) => (
          <option key={locker.id} value={locker.id}>
            {locker.name}
          </option>
        ))}
      </select>
    </div>
  );
}
