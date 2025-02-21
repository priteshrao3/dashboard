'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Contactpage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post("https://automationdg.pythonanywhere.com/apis/subscriptions/", {
                name: name,
                email: email,
                phone: mobileNumber,
            });

            if (response.status === 201) {
                setIsSubscribed(true);
                setName(""); // Reset form
                setEmail("");
                setMobileNumber("");
            } else {
                throw new Error("inquiry failed. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 md:py-10 py-12" id="Subscription">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h3 className="text-4xl font-bold text-gray-800 mb-4">Contact & Support</h3>
                <p className="text-gray-600 text-lg mb-8">
                    If you have any queries or need assistance, feel free to reach out to us. We're here to help!
                </p>

                <div className="bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
                    {isSubscribed ? (
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="text-6xl text-green-600 animate-bounce">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <p className="text-xl text-green-600 font-semibold">
                                Thank you for inquiry! Check your inbox for updates.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="p-3 rounded-lg text-black border border-gray-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-3 text-black rounded-lg border border-gray-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className="p-3 text-black rounded-lg border border-gray-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full md:w-96 mx-auto disabled:bg-gray-400 disabled:hover:scale-100 disabled:hover:shadow-lg"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Submitting...</span>
                                        <i className="fas fa-spinner fa-spin"></i>
                                    </div>
                                ) : (
                                    "Subscribe Now"
                                )}
                            </button>
                        </form>
                    )}

                    {errorMessage && (
                        <p className="text-red-600 mt-4 animate-shake">
                            {errorMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contactpage;
