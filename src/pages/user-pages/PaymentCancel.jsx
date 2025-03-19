import React from 'react'

function PaymentCancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 text-center">
    <div className="bg-white shadow-2xl rounded-2xl border border-gray-200 p-8 max-w-sm">
      <div className="flex items-center justify-center w-24 h-24  mx-auto mb-6 ">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill="#e56c6c"></path> <path d="M8.39747 17.4466C8.64413 17.7794 9.11385 17.8492 9.44661 17.6025C10.175 17.0627 11.0541 16.75 12 16.75C12.9459 16.75 13.825 17.0627 14.5534 17.6025C14.8862 17.8492 15.3559 17.7794 15.6025 17.4466C15.8492 17.1138 15.7794 16.6441 15.4466 16.3975C14.4742 15.6767 13.285 15.25 12 15.25C10.715 15.25 9.5258 15.6767 8.55339 16.3975C8.22062 16.6441 8.15082 17.1138 8.39747 17.4466Z" fill="#e56c6c"></path> <path d="M15 12C15.5523 12 16 11.3284 16 10.5C16 9.67157 15.5523 9 15 9C14.4477 9 14 9.67157 14 10.5C14 11.3284 14.4477 12 15 12Z" fill="#e56c6c"></path> <path d="M9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z" fill="#e56c6c"></path> </g></svg>
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
