
import { checkout } from "wix-ecom-backend";

// Global variable to use to refresh checkout
let refreshCheckoutCallback;

/**
 * Function to add items to checkout
 * @param {string} checkoutId - ID of the current checkout session
 * @param {Array} itemsToAdd - Array of items to add to the checkout
 * @returns {Promise<void>}
 */
export async function addItemsToCheckout(checkoutId, itemsToAdd) {
    try {
        await checkout.addToCheckout(checkoutId, { lineItems: itemsToAdd });
        
        // Call the refresh function if defined
        if (refreshCheckoutCallback) {
            refreshCheckoutCallback();
        }
    } catch (error) {
        console.error("Failed to add items to checkout:", error);
    }
}

/**
 * Function to set the refresh checkout callback
 * @param {Function} callback - Callback to trigger when checkout needs to be refreshed
 */
export function onRefreshCheckout(callback) {
    refreshCheckoutCallback = callback;
}
