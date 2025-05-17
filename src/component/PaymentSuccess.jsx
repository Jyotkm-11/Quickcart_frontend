import React from 'react';


const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <img src="https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon.png" alt="" style={{height:"160px" , width:"160px"}} />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your payment has been processed successfully.</p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default PaymentSuccess;
