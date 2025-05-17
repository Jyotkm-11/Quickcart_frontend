import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import Head from './Head';
import { useRazorpay } from 'react-razorpay';

const Shippingform = () => {
  const Razorpay = useRazorpay();
  const [p, setP] = useState(0);
  const navigate = useNavigate();

  const {
    shippingAddress,
    cart,
    user,
    savePaymentDetails,
    clearCart,
    userAddress
  } = useContext(AppContext);
  const [showOldAddress, setShowOldAddress] = useState(false);

  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [price, setPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    if (cart?.items) {
      cart.items.forEach((item) => {
        total += item.price * item.qty;
      });
    }
    setPrice(total);
    setP(total + 150); // total + delivery
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await shippingAddress(fullName, address, city, state, pincode, country, phoneNumber);
      setFullName("");
      setAddress("");
      setCity("");
      setCountry("");
      setPhoneNumber("");
      setPincode("");
      setState("");
    } catch (error) {
      console.error("Address error", error);
    }
  };

  const paymentHandler = async (response) => {
    const { razorpay_payment_id } = response;

    if (!razorpay_payment_id) {
      alert("Payment failed");
      navigate('/fail');
      return;
    }

    const generateDummyOrderId = () => {
      const timestamp = Date.now();
      const randomNum = Math.floor(Math.random() * 100000);
      return `order_${timestamp}_${randomNum}`;
    };

    const paymentData = {
      paymentId: razorpay_payment_id,
      orderId: generateDummyOrderId(),
      amount: p,
      cartItems: cart.items,
      userAddress:user,
      payStatus: "Success",
    };

    const result = await savePaymentDetails(paymentData);

    if (result?.success) {
      console.log("Payment successful!");
      clearCart();
      navigate('/paymentSuccess');
    } else {
      alert("Failed to save payment details. Please contact support.");
      navigate('/paymentfail');
    }
  };

  const handlePayment = () => {
    if (!Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_A3RM3Asww6uWvF",
      amount: p * 100, // converting to paise
      currency: "INR",
      name: "Quick Cart",
      description: "Testing Payment Gateway",
      handler: paymentHandler,
      prefill: {
        name: user?.fullName || "Guest",
        email: "quickcart@gmail.com",
        contact: user?.phoneNumber || "8437571131",
      },
      theme: {
        color: "#F46432",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <>
      <Head />
      <h1 className='text-center text-sky-800 bg-gray-100 mb-0' style={{ fontSize: "3rem" }}>Shipping Form</h1>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
  <div className="bg-white gap-4 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden">

    {/* Left Section */}
    {showOldAddress && userAddress ? (
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-6">Saved Address</h2>
        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <p><strong>Full Name:</strong> {userAddress.fullName}</p>
          <p><strong>Phone Number:</strong> {userAddress.phoneNumber}</p>
          <p><strong>Address:</strong> {userAddress.address}, {userAddress.city}, {userAddress.state}, {userAddress.pincode}, {userAddress.country}</p>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="bg-green-600 hover:bg-green-400 text-white w-full py-2 rounded-md"
        >
          Deliver to This Address
        </button>
        <button
          onClick={() => setShowOldAddress(false)}
          className="bg-gray-400 hover:bg-gray-300 text-white w-full py-2 rounded-md"
        >
          Back to New Address Form
        </button>
      </div>
    ) : (
      <form className="p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6">Add Shipping Address</h2>

        <div className="space-y-4">
          <input className="w-full border rounded-md p-2"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input className="w-full border rounded-md p-2"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <input className="w-full border rounded-md p-2"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>

          <input className="w-full border rounded-md p-2"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <input className="w-full border rounded-md p-2"
            placeholder="Address (Area and Street)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input className="w-full border rounded-md p-2"
              placeholder="City/District/Town"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input className="w-full border rounded-md p-2"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-green-600 hover:bg-green-400 text-white w-full py-2 rounded-md">
            Save and Deliver here
          </button>

          <button
            type="button"
            onClick={() => setShowOldAddress(true)}
            className="bg-sky-600 hover:bg-sky-400 text-white w-full py-2 rounded-md"
          >
            Use Old Address
          </button>
        </div>
      </form>
    )}

    {/* Right Section - Order Summary */}
    <div className="bg-gray-50 p-8 border-l border-gray-200">
      <div className="text-sm text-gray-500 mb-2">Cart &nbsp; -------- &nbsp;
        <span className="text-green-600 font-semibold">Delivery</span> &nbsp; -------- &nbsp; Payment</div>

      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Order Total</span>
        <span>Rs {price} </span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Delivery Charges</span>
        <span>Rs. 150</span>
      </div>

      <h3 className="text-xl font-semibold mb-4">Delivery Summary</h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div>Standard Delivery</div>
          <div className="text-sm text-gray-500"> Expected date : 1 May , 2025 </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">Rs 150</div>
        </div>
      </div>

      <div className="flex justify-between text-lg font-semibold mt-6">
        <span>Total Payable</span>
        <span>Rs {price + 150} </span>
      </div>

      <button onClick={handlePayment} 
      className="bg-red-500 hover:bg-red-600 text-white w-full py-2 mt-6 rounded-md">
        Place Order
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Shippingform;
