import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
   EmbeddedCheckoutProvider,
   EmbeddedCheckout
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51QzCa7GzgqobIesy3LmpQalmx0iSnxRk0BtLGV63GxiXrToSx3wqrHMHYvGuotSruzgdIKwizRgPuTWFhcPYqcCo007gTqy6RB");


function Payment() {
   const fetchClientSecret = useCallback(async () => {
      const token = await getToken()
      const resPayment = await payment(token, userCart)
      console.log('resPayment', resPayment);
      console.log("PaymentPage")
      return resPayment.data.clientSecret
   })
   const options = { fetchClientSecret } //= resPayment.data.clientSecret
   return (
      <div id="checkout">
         <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
         >
            <EmbeddedCheckout />
         </EmbeddedCheckoutProvider>
      </div>
   )
}

export default Payment