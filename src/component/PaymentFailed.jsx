import React from 'react';


const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
     <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/11/Red-incorrect-icon-in-circle-on-transparent-background-PNG.png" alt=""  style={{height:"160px" , width:"160px"}}/>
      <h1 className="text-3xl font-bold text-red-700 mb-2">Payment Failed</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! Something went wrong. Please try again or use a different payment method.</p>
      <button
        onClick={() => window.location.href = '/checkout'}
        className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
      >
        Retry Payment
      </button>
      <button
        onClick={() => window.location.href = '/checkout'}
        className=" mt-3
        bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
      >
       Go To Home Page
      </button>
    </div>
  );
};

export default PaymentFailed;
