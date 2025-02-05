'use client'
import React, { useState } from 'react';
import { FaWallet } from "react-icons/fa";
import axios from "axios";

function IndexPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const steps = [
        {
            icon: <FaWallet />,
            title: "Choose Package",
            description: "First, choose a package that suits your needs.",
        },
        {
            icon: <FaWallet />,
            title: "Enter Details",
            description: "Review the details and proceed with your purchase.",
        },
        {
            icon: <FaWallet />,
            title: "Wait for Results",
            description: "After purchase, we start working—just wait for the best results.",
        },
    ];


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
                throw new Error("Subscription failed. Please try again.");
            }

        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50">
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 py-20 text-white">
                <div className="container mx-auto px-14">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left Content */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h6 className="text-lg font-semibold tracking-wider uppercase">Revolutionary Marketing Platform</h6>
                            <h1 className="text-5xl font-extrabold leading-tight mt-3">
                                MailBlaster – The Ultimate Email Automation Solution
                            </h1>
                            <p className="text-lg mt-4 opacity-90">
                                Streamline your email marketing with MailBlaster, the powerful automation tool designed to simplify bulk emailing, contact management, and campaign tracking. Effortlessly send thousands of emails, personalize content, and boost engagement with ease. Whether you’re a business, marketer, or freelancer, our platform ensures higher deliverability, better conversions, and seamless automation.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="https://prwebtechno.vercel.app/contact"
                                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                    <span className="ml-3 text-xl">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                            <img
                                src="/banner.png"
                                alt="banner"
                                className="w-3/4 md:w-2/3 h-auto drop-shadow-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full md:px-20 py-10 flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Box (Video Section) */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full h-[25em] bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
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

                    {/* Right Box (Content Section) */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Supercharge Your Email Marketing 🚀
                        </h1>
                        <p className="text-lg text-gray-700">
                            Craft **stunning email campaigns** effortlessly with
                            <span className="font-semibold text-blue-600"> Email Blaster</span>.
                            Access **beautifully designed templates, automation, real-time tracking, sign-up forms,** and **list management**.
                        </p>
                        <p className="text-lg font-semibold text-blue-600">
                            🚀 Get started for **free** today. **No credit card required!**
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button onClick={() => window.location.href = "https://prwebtechno.vercel.app/contact"} className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                                Start Free Trial
                            </button>
                        </div>


                        <div className="w-full max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">

                                {/* Counter Item 1 */}
                                <div className="flex flex-col items-center">
                                    <img src="https://product.geniusocean.com/smm-pro/assets/images/10129844041655877830.png"
                                        alt="Active Users"
                                        className="w-10 h-10 mb-4"
                                    />
                                    <h4 className="text-4xl font-bold text-gray-900">58k</h4>
                                    <p className="text-lg text-gray-600">Active Users</p>
                                </div>

                                {/* Counter Item 2 */}
                                <div className="flex flex-col items-center">
                                    <img src="https://product.geniusocean.com/smm-pro/assets/images/6406956591655877886.png"
                                        alt="Total Companies"
                                        className="w-10 h-10 mb-4"
                                    />
                                    <h4 className="text-4xl font-bold text-gray-900">50k</h4>
                                    <p className="text-lg text-gray-600">Total Companies</p>
                                </div>

                                {/* Counter Item 3 */}
                                <div className="flex flex-col items-center">
                                    <img src="https://product.geniusocean.com/smm-pro/assets/images/4492214691655877905.png"
                                        alt="Campaign Posted"
                                        className="w-10 h-10 mb-4"
                                    />
                                    <h4 className="text-4xl font-bold text-gray-900">238m</h4>
                                    <p className="text-lg text-gray-600">Campaign Posted</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Explanation Section */}
            <div className="w-full flex justify-center">
                <div className="md:px-20 py-16 bg-white rounded-2xl shadow-2xl text-center">
                    <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900">How Our Software Works</h2>
                    <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        MailBlaster simplifies email marketing by automating bulk email sending, managing contact lists,
                        and tracking campaign performance. Set up your email template, upload your contact list, and let our system handle the rest.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Get a Subscription</h3>
                            <p className="mt-4 text-gray-700">Subscribe to unlock premium features and supercharge your marketing.</p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Install & Get Started</h3>
                            <p className="mt-4 text-gray-700">Easily install MailBlaster and follow a simple setup process.</p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Add Templates</h3>
                            <p className="mt-4 text-gray-700">Choose from professionally designed templates or create your own with our intuitive editor.</p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Add Subject Line</h3>
                            <p className="mt-4 text-gray-700">Craft the perfect subject line to capture attention and increase open rates.</p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Arrange Email Credentials</h3>
                            <p className="mt-4 text-gray-700">Upload your email credentials via CSV for seamless integration.</p>
                        </div>

                        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border">
                            <h3 className="text-2xl font-semibold text-gray-900">Upload Client Emails</h3>
                            <p className="mt-4 text-gray-700">Organize client email IDs in CSV format for effective segmentation.</p>
                        </div>

                    </div>
                </div>
            </div>


            <section className="relative py-24 bg-white text-gray-900">
                <div className="px-20">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                        {/* Left Content */}
                        <div className="lg:w-7/12 xl:w-2/3 animate-fade-in">
                            <div className="mb-6">
                                <h6 className="text-lg font-semibold uppercase tracking-wider text-blue-600">
                                    Why Choose MailBlaster?
                                </h6>
                                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
                                    Elevate Your Email Marketing Game 🚀
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Email marketing is one of the most powerful tools to grow your business, but managing large-scale
                                campaigns can be overwhelming. **MailBlaster** is designed to simplify your email marketing with
                                automation, high deliverability, and effortless contact management.
                                <br /><br />
                                With our platform, you can handle **unlimited users**, manage **secure payments**, integrate with multiple
                                payment gateways, and support **multiple languages & currencies** effortlessly. Our system ensures
                                your emails land in inboxes, not spam folders, helping you **increase open rates and conversions**.
                                <br /><br />
                                Whether you’re a **business, freelancer, or agency**, MailBlaster provides a streamlined solution
                                to send bulk emails, personalize content, track engagement, and improve marketing efficiency—all
                                without any coding skills!
                            </p>
                            <a href="https://prwebtechno.vercel.app/contact"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg 
                               hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                Get Started
                                <span className="ml-3 text-xl">
                                    <i className="fas fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>

                        {/* Right Image (Hidden on Mobile, Optimized for Speed) */}
                        <div className="lg:w-4/12 xl:w-1/3 hidden lg:block">
                            <img src="https://product.geniusocean.com/smm-pro/assets/images/8526973391655879301.png"
                                alt="about"
                                className="w-2/3 mx-auto transition-transform duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="relative bg-blue-600 text-white rounded-lg p-10 shadow-lg">
                        {/* Background Vector Layers (Can be added using SVG or background images) */}
                        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-500 to-blue-700"></div>

                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {/* Counter Items */}
                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="text-3xl font-bold">560+</div>
                                <h5 className="text-lg">Satisfied Customers</h5>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">
                                    <i className="fab fa-r-project"></i>
                                </div>
                                <div className="text-3xl font-bold">240+</div>
                                <h5 className="text-lg">Completed Projects</h5>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">
                                    <i className="fas fa-user-friends"></i>
                                </div>
                                <div className="text-3xl font-bold">60</div>
                                <h5 className="text-lg">Team Member</h5>
                            </div>

                            <div className="flex flex-col items-center space-y-3">
                                <div className="text-4xl">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <div className="text-3xl font-bold">12+</div>
                                <h5 className="text-lg">Years Experience</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <div className="px-20 text-center">
                    {/* Section Header */}
                    <h6 className="text-blue-500 font-semibold text-lg uppercase">Strategy</h6>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">How To Get Started</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        If you want to master Social Media Marketing, let's start and build your brand with us.
                    </p>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                {/* Icon */}
                                <div className="flex items-center justify-center bg-blue-500 text-white text-3xl w-16 h-16 rounded-full mx-auto mb-4">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h5 className="text-xl font-semibold text-gray-800">{step.title}</h5>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Subscription Section */}
            <div className="w-full bg-white py-12">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Start your subscription today and unlock all premium features of MailBlaster.
                    </h2>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {isSubscribed ? (
                            <p className="text-xl text-green-600 font-semibold">
                                Thank you for subscribing! Check your inbox for updates.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4 justify-center">
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="p-2 rounded-lg text-black border border-gray-300 w-full md:w-1/3"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="p-2 text-black rounded-lg border border-gray-300 w-full md:w-1/3"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter your mobile number"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        className="p-2 text-black rounded-lg border border-gray-300 w-full md:w-1/3"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full md:w-96 mx-auto disabled:bg-gray-400"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Subscribe Now"}
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