import React from 'react'

function Subscription() {
    return (
        < div className="w-full bg-white py-12" >
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Start your subscription today and unlock all premium features of MailBlaster.
                </h2>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {/* Subscription Form */}
                    {isSubscribed ? (
                        <p className="text-xl text-green-600 font-semibold">
                            Thank you for subscribing! Check your inbox for updates.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Input Fields Row */}
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="p-3 rounded-lg border border-gray-300 w-full md:w-1/2"
                                />

                                {/* Mobile Number Input */}
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className="p-3 rounded-lg border border-gray-300 w-full md:w-1/2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full md:w-96 mx-auto"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    )}

                    {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
                </div>
            </div>
        </div >
    )
}

export default Subscription
