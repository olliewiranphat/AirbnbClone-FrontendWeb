import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function PaymentCancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 text-center">
    <div className="bg-white shadow-2xl rounded-2xl border border-gray-200 p-8 max-w-sm">
      <div className="flex items-center justify-center w-24 h-24  mx-auto mb-6 ">
      <DotLottieReact
      src="https://lottie.host/13d9f657-6ce9-4496-a1e9-98a0e9d538b5/GqwHOu4QYk.lottie"
      loop
      autoplay
    />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Canceled</h1>
      <p className="text-gray-700 mt-3 leading-relaxed">
        Your booking has been <span className="font-medium text-red-600">successfully canceled.</span>
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Thank you for using our service! <br />
        We hope to welcome you again in the future.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-[#FF385C] hover:bg-[#dd1062] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        Back to Home
      </a>
    </div>
  </div>
  

  )
}

export default PaymentCancel
