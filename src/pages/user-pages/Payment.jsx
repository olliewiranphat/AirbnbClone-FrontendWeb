// import { useState } from "react";
// import { BankingIcon, CreditCardIcon, MastercardIcon, PaypalIcon, VisaIcon } from "../../icon/Icon";
// import { useNavigate } from "react-router";

// const PaymentForm = () => {
//    const [activeTab, setActiveTab] = useState("credit-card");
//    const navigate = useNavigate();

//    const hdlLink = () => {
//       // navigate("https://www.paypal.com/signin")
//       window.location.href = "https://www.paypal.com/signin"
//    }
//    const hdlconfirm = () => {
//       window.location.href = "http://localhost:5173/booking/payment-success"
//    }

//    return (
//       <div className="container py-5 bg-gray-100 min-h-screen flex justify-center items-center">
//          <div className="w-full max-w-lg">
//             <div className="text-center mb-6">
//                <h1 className="text-2xl font-bold">Payment Form</h1>
//             </div>
//             <div className="bg-white shadow-lg rounded-xl p-5">
//                <div className="flex space-x-2 justify-between bg-gray-200 p-2 rounded-lg">
//                   {[
//                      { id: "credit-card", label: "Credit Card", icon: <CreditCardIcon className="w-8 h-8" /> },
//                      { id: "paypal", label: "Paypal", icon: <PaypalIcon className="w-8 h-8" /> },
//                      { id: "net-banking", label: "Net Banking", icon: <BankingIcon className="w-8 h-8" /> }
//                   ].map((tab) => (
//                      <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`flex-1 py-2 text-center rounded-md ${activeTab === tab.id ? "bg-[#fd5773] text-white" : "bg-gray-100 text-gray-700"}`}
//                      >
//                         <div className="flex items-center justify-center gap-2">
//                            {tab.icon} {tab.label}
//                         </div>
//                         {/* {tab.icon} {tab.label} */}
//                      </button>
//                   ))}
//                </div>
//                <div className="mt-4">
//                   {activeTab === "credit-card" && (
//                      <form>
//                         <div className="mb-3">
//                            <label className="block font-semibold">Card Owner</label>
//                            <input type="text" placeholder="Card Owner Name" required className="w-full p-2 border rounded" />
//                         </div>
//                         <div className="mb-3">
//                            <label className="block font-semibold">Card Number</label>
//                            <div className=" flex gap-2 justify-center items-center">
//                               <input type="text" placeholder="Valid card number" required className="w-full p-2 border rounded" />
//                               <VisaIcon className="w-7 h-7" />
//                               <MastercardIcon className="w-7 h-7" />
//                            </div>
//                            {/* <input type="text" placeholder="Valid card number" required className="w-full p-2 border rounded" />
//                            <VisaIcon className="w-3 h-3"/>
//                            <MastercardIcon className="w-3 h-3"/> */}
//                         </div>
//                         <div className="flex gap-2">
//                            <div className="flex-1">
//                               <label className="block font-semibold">Expiration Date</label>
//                               <div className="flex gap-2">
//                                  <input type="number" placeholder="MM" required className="w-full p-2 border rounded" />
//                                  <input type="number" placeholder="YY" required className="w-full p-2 border rounded" />
//                               </div>
//                            </div>
//                            <div className="w-1/3">
//                               <label className="block font-semibold">CVV</label>
//                               <input type="text" required className="w-full p-2 border rounded" />
//                            </div>
//                         </div>
//                         <button onClick={hdlconfirm} type="submit" className="mt-4 w-full bg-[#fd5773] text-white py-2 rounded">Confirm Payment</button>
//                      </form>
//                   )}
//                   {activeTab === "paypal" && (
//                      <div>
//                         <h6 className="pb-2">Select your PayPal account type</h6>
//                         <div className="mb-3">
//                            <label className="mr-4"><input type="radio" name="paypalType" defaultChecked /> Domestic</label>
//                            <label><input type="radio" name="paypalType" className="ml-4" /> International</label>
//                         </div>
//                         <button onClick={hdlLink} className="w-full bg-[#fd5773] text-white py-2 rounded">Log into my PayPal</button>
//                         <p className="text-sm text-gray-500 mt-2">After clicking, you will be redirected to a secure gateway...</p>
//                      </div>
//                   )}
//                   {activeTab === "net-banking" && (
//                      <div>
//                         <label className="block font-semibold">Select Your Bank</label>
//                         <select className="w-full p-2 border rounded mt-2">
//                            <option>--Please select your Bank--</option>
//                            {[...Array(10)].map((_, i) => (
//                               <option key={i}>Bank {i + 1}</option>
//                            ))}
//                         </select>
//                         <button className="mt-4 w-full bg-[#fd5773] text-white py-2 rounded">Proceed Payment</button>
//                      </div>
//                   )}
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default PaymentForm;



import { CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";
import { BankingIcon, CreditCardIcon, MastercardIcon, PaypalIcon, VisaIcon } from "../../icon/Icon";
import { useNavigate } from "react-router";

const PaymentForm = () => {
   const [activeTab, setActiveTab] = useState("credit-card");
   const navigate = useNavigate();

   const hdlLink = () => {
      window.location.href = "https://www.paypal.com/signin"
   }

   const hdlconfirm = (e) => {
      e.preventDefault(); // Prevent default form submission

      // Disable the button to prevent multiple clicks
      e.target.disabled = true;
      e.target.textContent = "Processing...";

      setTimeout(() => {
         window.location.href = "http://localhost:5173/booking/payment-success"
      }, 2000);
   }

   return (
      <div className="container py-5 bg-gray-100 min-h-screen flex justify-center items-center">
         <div className="w-full max-w-lg">
            <div className="text-center mb-6">
               <h1 className="text-2xl font-bold">Payment Form</h1>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-5">
               <div className="flex space-x-2 justify-between bg-gray-200 p-2 rounded-lg">
                  {[
                     { id: "credit-card", label: "Credit Card", icon: <CreditCardIcon className="w-8 h-8" /> },
                     { id: "paypal", label: "Paypal", icon: <PaypalIcon className="w-8 h-8" /> },
                     { id: "net-banking", label: "Net Banking", icon: <BankingIcon className="w-8 h-8" /> }
                  ].map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 text-center rounded-md ${activeTab === tab.id ? "bg-[#fd5773] text-white" : "bg-gray-100 text-gray-700"}`}
                     >
                        <div className="flex items-center justify-center gap-2">
                           {tab.icon} {tab.label}
                        </div>
                     </button>
                  ))}
               </div>
               <div className="mt-4">
                  {activeTab === "credit-card" && (
                     <form>
                        <div className="mb-3">
                           <label className="block font-semibold">Card Owner</label>
                           <input type="text" placeholder="Card Owner Name" required className="w-full p-2 border rounded" />
                        </div>
                        <div className="mb-3">
                           <label className="block font-semibold">Card Number</label>
                           <div className=" flex gap-2 justify-center items-center">
                              <input type="text" placeholder="Valid card number" required className="w-full p-2 border rounded" />
                              <VisaIcon className="w-7 h-7" />
                              <MastercardIcon className="w-7 h-7" />
                           </div>
                        </div>
                        <div className="flex gap-2">
                           <div className="flex-1">
                              <label className="block font-semibold">Expiration Date</label>
                              <div className="flex gap-2">
                                 <input type="number" placeholder="MM" required className="w-full p-2 border rounded" />
                                 <input type="number" placeholder="YY" required className="w-full p-2 border rounded" />
                              </div>
                           </div>
                           <div className="w-1/3">
                              <label className="block font-semibold">CVV</label>
                              <input type="text" required className="w-full p-2 border rounded" />
                           </div>
                        </div>
                        <button onClick={hdlconfirm} type="submit" className="mt-4 w-full bg-[#fd5773] text-white py-2 rounded">Confirm Payment</button>
                     </form>
                  )}
                  {activeTab === "paypal" && (
                     <div>
                        <h6 className="pb-2">Select your PayPal account type</h6>
                        <div className="mb-3">
                           <label className="mr-4"><input type="radio" name="paypalType" defaultChecked /> Domestic</label>
                           <label><input type="radio" name="paypalType" className="ml-4" /> International</label>
                        </div>
                        <button onClick={hdlLink} className="w-full bg-[#fd5773] text-white py-2 rounded">Log into my PayPal</button>
                        <p className="text-sm text-gray-500 mt-2">After clicking, you will be redirected to a secure gateway...</p>
                     </div>
                  )}
                  {activeTab === "net-banking" && (
                     <div>
                        <label className="block font-semibold">Select Your Bank</label>
                        <select className="w-full p-2 border rounded mt-2">
                           <option>--Please select your Bank--</option>
                           {[...Array(10)].map((_, i) => (
                              <option key={i}>Bank {i + 1}</option>
                           ))}
                        </select>
                        <button className="mt-4 w-full bg-[#fd5773] text-white py-2 rounded">Proceed Payment</button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default PaymentForm;