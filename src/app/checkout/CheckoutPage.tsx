import DemoTextBlock from './checkout/DemoTextBlock';

function CheckoutPage() {
  return (
    <div>
      {/* Existing checkout and order summary elements */}
      <OrderSummary />
      
      {/* Demo text block */}
      <DemoTextBlock />
    </div>
  );
}

export default CheckoutPage;