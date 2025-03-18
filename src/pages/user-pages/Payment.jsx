import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
   EmbeddedCheckoutProvider,
   EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useAuth } from "@clerk/clerk-react";

// สร้าง Stripe instance ด้วย public key ของคุณ
const stripePromise = loadStripe("pk_test_51QzCa7GzgqobIesy3LmpQalmx0iSnxRk0BtLGV63GxiXrToSx3wqrHMHYvGuotSruzgdIKwizRgPuTWFhcPYqcCo007gTqy6RB");

function Payment() {
   const { getToken } = useAuth();

   // ฟังก์ชันเพื่อดึง clientSecret จาก API
   const fetchClientSecret = useCallback(async () => {
      try {
         const token = await getToken();  // ดึง token จาก Clerk
         // สมมติว่า payment เป็นฟังก์ชันที่เรียก API เพื่อทำการชำระเงิน
         // const resPayment = await payment(token, userCart); // ให้เชื่อมต่อกับ backend ที่ทำการสร้าง clientSecret
         // console.log('resPayment', resPayment);
         // return resPayment.data.clientSecret;
         return "dummy-client-secret"; // จำลองค่า clientSecret สำหรับตอนนี้
      } catch (error) {
         console.error("Error fetching client secret: ", error);
         return null;
      }
   }, [getToken]);

   const [clientSecret, setClientSecret] = useState(null);

   // ดึง client secret เมื่อ component โหลด
   useEffect(() => {
      const getClientSecretData = async () => {
         const secret = await fetchClientSecret();
         if (secret) {
            setClientSecret(secret);
         }
      };

      getClientSecretData();
   }, [fetchClientSecret]);

   const options = { clientSecret };  // ส่ง clientSecret ไปยัง EmbeddedCheckout

   return (
      <div id="checkout">
         {clientSecret ? (
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
               <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
}

export default Payment;