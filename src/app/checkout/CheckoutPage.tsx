import { ParcelLockerDropdown } from '@/app/checkout/ParcelLockerDropdown';

export function CheckoutPage() {
  return (
    <div>
      <h2>Checkout</h2>
      {/* Add other checkout form elements here */}
      <ParcelLockerDropdown /> {/* Insert the parcel locker dropdown here */}
      {/* Additional checkout details */}
    </div>
  );
}

export default CheckoutPage;
