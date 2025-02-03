'use client'
import React, { useState } from 'react';

function IndexPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !name || !mobileNumber) {
            setErrorMessage('Please fill in all the fields.');
            return;
        }

        // Simulate an API request to subscribe the user
        setIsSubscribed(true);
        setErrorMessage('');
        setEmail('');
        setName('');
        setMobileNumber('');
    };

    return (
        <div className="flex flex-col items-center justify-center md:p-4 bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="w-full max-w-7xl px-4 md:px-10 md:py-12 py-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Box (Content Section) */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                            Powerful Email Marketing Software
                        </h1>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700">
                                Create stunning email campaigns effortlessly with Email Blaster.
                                Access professionally designed templates, automation, campaign tracking, sign-up forms, list cleansing, and more.
                                Elevate your marketing efforts today.
                            </p>
                            <p className="text-lg text-gray-700">
                                With our UK-based software, rest assured that your data remains secure within the UK,
                                supported by our responsive and friendly support team.
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-blue-600">
                            Try Email Blaster for free. Instant setup. No credit card required.
                        </p>
                    </div>

                    {/* Right Box (Video Section) */}
                    <div className="md:w-1/2 relative">
                        <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/DNuRLGAfyAE?autoplay=1&si=uPpqt3Sg4_idnmWL"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explanation Section */}
            <div className="w-full max-w-7xl px-4 md:px-10 py-12 bg-white rounded-lg shadow-lg mt-8">
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 text-center">How Our Software Works</h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
                    MailBlaster makes email marketing easy by automating bulk email sending, managing contact lists,
                    and tracking campaign performance. Set up your email template, upload your contact list, and let our system handle the rest.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Adding Templates */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">Add Templates</h3>
                        <p className="mt-4 text-gray-600">Choose from professionally designed email templates or create your own with our easy-to-use editor.</p>
                    </div>

                    {/* Card 2: Adding Subject Line */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">Add Subject Line</h3>
                        <p className="mt-4 text-gray-600">Craft the perfect subject line to grab your audience's attention and boost open rates.</p>
                    </div>

                    {/* Card 3: Arrange Email Credentials in CSV */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">Arrange Email Credentials in CSV</h3>
                        <p className="mt-4 text-gray-600">Upload your email credentials in a CSV file format for quick and seamless importing of contact lists.</p>
                    </div>

                    {/* Card 4: Arrange Client Email IDs in CSV */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">Arrange Client Email IDs in CSV</h3>
                        <p className="mt-4 text-gray-600">Organize your clients' email IDs in a CSV file for efficient segmentation and campaign targeting.</p>
                    </div>

                    {/* Card 5: Install and Use Software */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">Install and Use</h3>
                        <p className="mt-4 text-gray-600">Easily install MailBlaster on your system and follow simple steps to start creating your campaigns.</p>
                    </div>

                    {/* Card 6: How to Get Subscription */}
                    <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-600">How to Get Subscription</h3>
                        <p className="mt-4 text-gray-600">Subscribe to our service to unlock premium features and boost your email marketing performance.</p>
                    </div>
                </div>
            </div>

            {/* Subscription Section */}
            <div className="w-full bg-blue-100 py-12 mt-8">
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
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="p-3 rounded-lg border border-gray-300 w-full md:w-96 mx-auto"
                                />

                                {/* Mobile Number Input */}
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className="p-3 rounded-lg border border-gray-300 w-full md:w-96 mx-auto"
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-3 rounded-lg border border-gray-300 w-full md:w-96 mx-auto"
                                />

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
            </div>
        </div>
    );
}

export default IndexPage;