import { useEffect, useState } from 'react';
import { Box, Card, Cell, Collapse, Dropdown, FormField, Input, Layout, Text, TextButton } from '@wix/design-system';
import { ChevronDown, ChevronUp } from '@wix/wix-ui-icons-common';
import { ShippingCosts, ShippingMethodType, ShippingUnitOfMeasure } from '@/app/types/app-data.model';
import testIds from '@/app/utils/test-ids';

// Added ParcelLockerDropdown component for managing parcel lockers
export function ParcelLockerDropdown() {
  const [selectedLocker, setSelectedLocker] = useState('');
  const parcelLockers = [
    { id: 1, name: 'Parcel Locker A - City Center' },
    { id: 2, name: 'Parcel Locker B - Northside' },
    { id: 3, name: 'Parcel Locker C - Eastside' },
  ];

  return (
    <div>
      <label htmlFor="parcelLocker">Choose a parcel locker:</label>
      <select id="parcelLocker" onChange={(e) => setSelectedLocker(e.target.value)} value={selectedLocker}>
        <option value="" disabled>
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

export function ShippingDeliveryMethodForm({
  title,
  unitOfMeasure,
  shippingCosts,
  onUnitOfMeasureSelected,
  onShippingCostsChanged,
  expandByDefault = false,
}) {
  const uomName =
    unitOfMeasure === ShippingUnitOfMeasure.NUM_OF_ITEMS
      ? 'item'
      : unitOfMeasure === ShippingUnitOfMeasure.WEIGHT_IN_LB
      ? 'lb'
      : 'kg';
  const [isOpen, setIsOpen] = useState(expandByDefault);

  return (
    <Card dataHook={testIds.DASHBOARD.SHIPPING_METHOD}>
      <Card.Header
        title={title}
        suffix={
          <TextButton dataHook={testIds.DASHBOARD.SHIPPING_METHOD_EXPAND} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </TextButton>
        }
      />
      <Collapse open={isOpen}>
        <Card.Divide
