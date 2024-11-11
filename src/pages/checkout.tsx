
import DemoBox from '@/components/DemoBox';  // Import the DemoBox component

import { DeliveryMethods } from '@/app/checkout/DeliveryMethods';

export default function CheckoutPage() {
  return (
    <div>
      <h2>Checkout</h2>
      {/* Other checkout form elements go here */}
      <DeliveryMethods />
      <DemoBox />  // Insert DemoBox after Delivery Methods section {/* This will render the delivery methods with the parcel locker dropdown */}
      {/* Other checkout steps */}
    </div>
  );
}