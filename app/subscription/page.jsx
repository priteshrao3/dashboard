'use client';

import React, { useState } from 'react';
import axios from 'axios';

function SubscriptionPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const plans = [
    { duration: '1 Month', emails: 30, price: 999, file: '/tools/mailblaster30.zip', paymentLink: 'https://razorpay.com/payment-link/plink_1Month' },
    { duration: '6 Months', emails: 50, price: 4999, file: '/tools/mailblaster50.zip', paymentLink: 'https://razorpay.com/payment-link/plink_6Months' },
    { duration: '1 Year', emails: '30 to 100 Customizable', price: 9999, file: '/tools/mailblaster80.zip', paymentLink: 'https://razorpay.com/payment-link/plink_1Year' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post(
        'https://automationdg.pythonanywhere.com/apis/register/',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert(`Registration Successful! Downloading ${selectedPlan?.duration} plan file...`);
      
      // Auto-download the file based on the selected subscription
      const link = document.createElement('a');
      link.href = selectedPlan?.file;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Redirect to the corresponding payment page
      window.location.href = selectedPlan?.paymentLink;
    } catch (error) {
      console.error('Error Response:', error.response?.data || error.message);
      if (error.response?.data?.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Registration Failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      {!showForm ? (
        <section className="bg-gray-100 py-10">
          <div className="px-6 md:px-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Plan</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Pick the perfect plan that suits your needs. Start with a plan and supercharge your email marketing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {plans.map((plan, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.duration}</h3>
                  <p className="text-lg text-gray-600 mt-2">Best for {plan.duration.toLowerCase()} campaigns.</p>
                  <div className="text-4xl font-semibold text-blue-600 mt-4">₹{plan.price}</div>
                  <ul className="mt-6 space-y-3 text-black">
                    <li>{plan.emails} Emails per ID</li>
                    <li>Full Email Automation</li>
                    <li>{plan.price > 1000 ? 'Priority Support' : 'Basic Support'}</li>
                  </ul>
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowForm(true);
                    }}
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6 py-14">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Register for {selectedPlan?.duration} Plan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="w-full p-2 border text-black rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-2 text-black border rounded-md"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-2 text-black border rounded-md"
              onChange={handleChange}
              required
            />
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
              Register & Pay ₹{selectedPlan?.price}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SubscriptionPage;
