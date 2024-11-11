
import { checkout } from "wix-ecom-backend";

// Global variable to use to refresh checkout
let refreshCheckoutCallback;

$w.onReady(async function () {
  // Get properties passed by the Checkout page
  const { checkoutId } = $widget.props;

  // Property usage
  const checkout = fetchCheckout(checkoutId);

  // Add selected items to the checkout on button click
  $w("#addItems").onClick(async () => {
    const itemsToAdd = $w("#itemsToChoose").value;
    await checkout.addToCheckout(checkoutId, { lineItems: itemsToAdd });

    // Call refreshCheckoutCallback to refresh the checkout
    refreshCheckoutCallback();
  });
});

// Export function to get the refresh checkout callback
/**
 * @function
 * @description An event handler that accepts a callback function that is invoked by a widget. The widget should call the function whenever the checkout needs to be refreshed.
 * @param {string} callback - Callback to be trigger whenever the checkout needs to be refreshed
 * @returns {void}
 */
export function onRefreshCheckout(callback) {
  refreshCheckoutCallback = callback;
}
