
import { checkout } from "wix-ecom-backend";

// Function to add a custom message in the order summary on checkout load
export async function onCheckoutLoad(checkoutId) {
    const demoTextItem = {
        name: "demo demo demo demo demo demo demo tezt",
        quantity: 1,
        price: 0  // Set price to 0 to make it informational only
    };

    try {
        // Add custom line item to checkout
        await checkout.addToCheckout(checkoutId, { lineItems: [demoTextItem] });
        console.log("Demo text added to order summary on checkout load.");
    } catch (error) {
        console.error("Failed to add demo text to order summary:", error);
    }
}
