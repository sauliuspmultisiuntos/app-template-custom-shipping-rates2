
import { checkout } from "wix-ecom-backend";
import { getAccessToken } from './auth';

// API route to handle checkout actions with OAuth authentication
export async function handleCheckoutActions(req, res) {
    const { action, checkoutId, items } = req.body;

    // Ensure OAuth token is retrieved for secure API calls
    const accessToken = await getAccessToken();
    if (!accessToken) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }

    try {
        if (action === "addDemoText") {
            const demoTextItem = {
                name: "demo demo demo demo demo demo demo tezt",
                quantity: 1,
                price: 0  // Set price to 0 for informational text
            };
            await checkout.addToCheckout(checkoutId, { lineItems: [demoTextItem] });
            console.log("Demo text added to order summary.");
            res.status(200).json({ success: true });
        } else {
            res.status(400).json({ error: "Invalid action" });
        }
    } catch (error) {
        console.error("Failed to handle checkout action:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
