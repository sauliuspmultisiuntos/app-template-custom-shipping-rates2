
'use client';
import { Box, Breadcrumbs, Button, Cell, Layout, Loader, Page } from '@wix/design-system';
import { useSDK } from '@/app/utils/wix-sdk.client-only';
import { useCallback, useEffect, useState } from 'react';
import { ShippingDeliveryMethodForm } from '@/app/dashboard/parts/ShippingDeliveryMethodForm';
import { WixPageId } from '@/app/utils/navigation.const';
import { useSetShippingAppData, useShippingAppData } from '@/app/client-hooks/app-data';
import testIds from '@/app/utils/test-ids';

export const ShippingRatesPageContent = () => {
  const { dashboard: { showToast, navigate } } = useSDK();
  const persistShippingAppData = useSetShippingAppData();
  const { data: persistedShippingAppData, isLoading: isLoadingAppData } = useShippingAppData();
  const [currentShippingAppData, setCurrentShippingAppData] = useState(persistedShippingAppData);
  
  useEffect(() => {
    setCurrentShippingAppData(persistedShippingAppData);
  }, [persistedShippingAppData]);

  const [loading, setLoading] = useState(false);
  const onSave = useCallback(() => {
    setLoading(true);
    persistShippingAppData(currentShippingAppData!)
      .then(() => {
        showToast({ message: 'Shipping rates saved successfully.', type: 'success' });
      })
      .catch(() => {
        showToast({ message: 'Failed to save shipping rates.', type: 'error' });
      })
      .finally(() => setLoading(false));
  }, [persistShippingAppData, currentShippingAppData, showToast]);

  const ButtonsBar = useCallback(() => (
    <Box gap='SP2'>
      <Button
        skin='standard'
        priority='secondary'
        onClick={() => setCurrentShippingAppData(persistedShippingAppData)}
      >
        Cancel
      </Button>
      <Button onClick={onSave}>{loading ? <Loader size='tiny' /> : 'Save'}</Button>
    </Box>
  ), [loading, onSave, persistedShippingAppData]);

  return (
    <Page height='100vh' dataHook={testIds.DASHBOARD.WRAPPER}>
      <Page.Header
        actionsBar={<ButtonsBar />}
        breadcrumbs={
          <Breadcrumbs
            activeId='2'
            items={[
              { id: WixPageId.MANAGE_APPS, value: 'Apps' },
              { id: 'shipping-app-page', value: 'Shipping Rate App', disabled: true },
            ]}
            onClick={({ id }) => navigate(id as string)}
          />
        }
        title='Shipping Rate App'
        subtitle='Customize shipping fees based on item quantity, weight, and delivery speed, ensuring a flexible and cost-effective solution for your business.'
      />
      <Page.Content>
        <Layout>
          <Cell span={8}>
            {isLoadingAppData ? (
              <Loader size='large' />
            ) : (
              currentShippingAppData?.shippingMethods.map((method, index) => (
                <Cell key={method.code}>
                  <ShippingDeliveryMethodForm
                    expandByDefault={index === 0}
                    title={method.title}
                    unitOfMeasure={method.unitOfMeasure}
                    onUnitOfMeasureSelected={() => {}}
                    shippingCosts={method.costs}
                    onShippingCostsChanged={() => {}}
                    methodType={method.type}
                  />
                </Cell>
              ))
            )}
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};
