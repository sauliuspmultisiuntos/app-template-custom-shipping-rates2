import { getShippingAppData } from '@/app/actions/app-data';
import { calculatePrice } from '@/app/utils/shipping-calculator';
import { wixAppClient } from '@/app/utils/wix-sdk.app';

wixAppClient.shippingRates.provideHandlers({
  async getShippingRates({ request, metadata }) {
    const appData = await getShippingAppData({ instanceId: metadata.instanceId! });
    const currency = metadata.currency;

    return {
      shippingRates: appData.shippingMethods.map(({ code, title, logistics, costs, unitOfMeasure }) => ({
        code,
        title: title === 'Standard Shipping' ? 'Standard Shipping 4' : title,
        logistics,
        cost: {
          price: `${calculatePrice(request, costs, unitOfMeasure)}`,
          currency: currency!,
        },
      })),
    };
  },
});

export async function POST(request: Request) {
  console.info('Shipping rates::POST - called');
  return wixAppClient.servicePlugins.processRequest(request);
}
