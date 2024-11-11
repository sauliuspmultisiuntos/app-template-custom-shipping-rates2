
import React, { useEffect } from 'react';
import { handleCheckoutActions } from 'backend/checkoutApi';

const Checkout = ({ checkoutId }) => {
    useEffect(() => {
        // Automatically add demo text to the order summary when the checkout loads
        const addDemoText = async () => {
            try {
                const response = await handleCheckoutActions({ action: "addDemoText", checkoutId });
                if (response.success) {
                    console.log("Demo text added successfully");
                } else {
                    console.error("Failed to add demo text");
                }
            } catch (error) {
                console.error("Error adding demo text:", error);
            }
        };

        addDemoText();
    }, [checkoutId]);

    return (
        <div>
            <h1>Checkout Page</h1>
            {/* Render other checkout page content here */}
        </div>
    );
};

export default Checkout;
