import {
  useShippingAddress,
  useApplyShippingAddressChange,
  Banner,
  useApi,
  useTranslate,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';
import { get } from '../service'
import { useEffect, useState, useCallback } from 'react'

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const address = useShippingAddress();
  const applyShippingAddressChange = useApplyShippingAddressChange();

  const translate = useTranslate();
  const { extension } = useApi();

  const pincodeData = async(zip) => {
    const pincodeDetails = await get(zip)
     applyShippingAddressChange({
        type: "updateShippingAddress",
        address:{
          provinceCode: pincodeDetails.data.postcode_details.state_code,
          city: pincodeDetails.data.postcode_details.city
        }
      });
  }

  if (address.zip) {
    pincodeData(address.zip)
  }

  return null;
}