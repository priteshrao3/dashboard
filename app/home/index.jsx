'use client'
import React, { useState, useEffect } from 'react';
import { FaWallet } from "react-icons/fa";
import axios from "axios";

function IndexPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Extract token from URL and store it in localStorage
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

        if (token) {
            localStorage.setItem("authToken", token);
            console.log("Token saved:", token);
        }
    }, []);

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
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 md:py-16 py-5 text-white">
                <div className="px-2 md:px-20">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">

                        {/* Left Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h6 className="text-sm sm:text-lg font-semibold tracking-wider uppercase">
                                Revolutionary Marketing Platform
                            </h6>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-3">
                                MailBlaster – The Ultimate Email Automation Solution
                            </h1>
                            <p className="text-base sm:text-lg mt-4 opacity-90">
                                Streamline your email marketing with MailBlaster, the powerful automation tool designed to simplify bulk emailing, contact management, and campaign tracking. Effortlessly send thousands of emails, personalize content, and boost engagement with ease.
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center md:px-20 px-32 py-2 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                    <span className="ml-3 text-lg sm:text-xl">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src="/banner.png"
                                alt="banner"
                                className="w-4/5 sm:w-3/4 md:w-2/3 h-auto drop-shadow-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                    </div>
                </div>
            </div>


            <div className="md:py-10 py-5 flex flex-col items-center bg-white">
                <div className="px-2 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Left Box (Video Section) */}
                    <div className="w-full md:w-1/2">
                        <iframe
                            className="w-full h-56 sm:h-64 md:h-[27em] rounded-lg"
                            src="https://www.youtube.com/embed/YbtZVOZaiKM?si=BG9ocCkRLtB_saEz"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Right Box (Content Section) */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                            Supercharge Your Email Marketing 🚀
                        </h1>
                        <p className="text-base sm:text-lg text-gray-700">
                            Craft <strong>stunning email campaigns</strong> effortlessly with
                            <span className="font-semibold text-blue-600"> Email Blaster</span>.
                            Access <strong>beautifully designed templates, automation, real-time tracking, sign-up forms,</strong> and <strong>list management</strong>.
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-blue-600">
                            🚀 Get started for <strong>free</strong> today. <strong>No credit card required!</strong>
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button
                                onClick={() => document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-600 text-white font-semibold md:px-20 px-32 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Counters Section - Now Below on Mobile */}
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center items-center mt-8">
                            {[
                                { img: "https://product.geniusocean.com/smm-pro/assets/images/10129844041655877830.png", count: "100 +", text: "Active Users" },
                                { img: "https://product.geniusocean.com/smm-pro/assets/images/6406956591655877886.png", count: "50k", text: "Total Companies" },
                                { img: "https://product.geniusocean.com/smm-pro/assets/images/4492214691655877905.png", count: "238m", text: "Campaign Posted" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img src={item.img} alt={item.text} className="w-12 h-12 mb-3" />
                                    <h4 className="text-2xl sm:text-4xl font-bold text-gray-900">{item.count}</h4>
                                    <p className="text-sm sm:text-lg text-gray-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Explanation Section */}
            <div className="justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="md:px-20 px-4 py-8 md:py-16 bg-white shadow-2xl text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                        How Our Software <span className="text-blue-600">Works</span>
                    </h2>
                    <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0 text-lg">
                        MailBlaster simplifies email marketing by automating bulk email sending, managing contact lists,
                        and tracking campaign performance. Set up your email template, upload your contact list, and let our system handle the rest.
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {[
                            { title: "Get a Subscription", desc: "Subscribe to unlock premium features and supercharge your marketing.", icon: "📦" },
                            { title: "Install & Get Started", desc: "Easily install MailBlaster and follow a simple setup process.", icon: "🚀" },
                            { title: "Add Templates", desc: "Choose from professionally designed templates or create your own with our intuitive editor.", icon: "🎨" },
                            { title: "Add Subject Line", desc: "Craft the perfect subject line to capture attention and increase open rates.", icon: "✉️" },
                            { title: "Arrange Email Credentials", desc: "Upload your email credentials via CSV for seamless integration.", icon: "📂" },
                            { title: "Upload Client Emails", desc: "Organize client email IDs in CSV format for effective segmentation.", icon: "📊" }
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-6">{step.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-700 text-lg">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <section className="bg-gray-100 py-16">
                <div className="px-6 md:px-20 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Plan</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Pick the perfect plan that suits your needs. Start with a plan and supercharge your email marketing.
                    </p>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {/* Plan 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-gray-900">30 Emails/ID</h3>
                            <p className="text-lg text-gray-600 mt-2">Perfect for small campaigns.</p>
                            <div className="text-4xl font-semibold text-blue-600 mt-4">₹999/month</div>
                            <ul className="mt-6 space-y-3 text-black">
                                <li>30 Emails per ID</li>
                                <li>Full Email Automation</li>
                                <li>Basic Support</li>
                            </ul>
                            <button
                                onClick={() => document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6">
                                Get Started
                            </button>
                        </div>

                        {/* Plan 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-gray-900">50 Emails/ID</h3>
                            <p className="text-lg text-gray-600 mt-2">For medium-sized businesses.</p>
                            <div className="text-4xl font-semibold text-blue-600 mt-4">₹1499/month</div>
                            <ul className="mt-6 space-y-3 text-black">
                                <li>50 Emails per ID</li>
                                <li>Full Email Automation</li>
                                <li>Priority Support</li>
                            </ul>
                            <button
                                onClick={() => document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6">
                                Get Started
                            </button>
                        </div>

                        {/* Plan 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-gray-900">100 Emails/ID</h3>
                            <p className="text-lg text-gray-600 mt-2">For larger campaigns & teams.</p>
                            <div className="text-4xl font-semibold text-blue-600 mt-4">₹1999/month</div>
                            <ul className="mt-6 space-y-3 text-black">
                                <li>100 Emails per ID</li>
                                <li>Full Email Automation</li>
                                <li>Premium Support</li>
                            </ul>
                            <button
                                onClick={() => document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 mt-6">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative py-10 bg-white text-gray-900 overflow-hidden">
                <div className="md:px-28 px-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                        {/* Left Content */}
                        <div className="lg:w-7/12 xl:w-2/3 animate-fade-in">
                            <div className="mb-8">
                                <h6 className="text-lg font-semibold uppercase tracking-wider text-blue-600">
                                    Why Choose MailBlaster?
                                </h6>
                                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Elevate Your Email Marketing Game 🚀
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Email marketing is one of the most powerful tools to grow your business, but managing large-scale
                                campaigns can be overwhelming. <strong>MailBlaster</strong> is designed to simplify your email marketing with
                                automation, high deliverability, and effortless contact management.
                                <br /><br />
                                With our platform, you can handle <strong>unlimited users</strong>, manage <strong>secure payments</strong>, integrate with multiple
                                payment gateways, and support <strong>multiple languages & currencies</strong> effortlessly. Our system ensures
                                your emails land in inboxes, not spam folders, helping you <strong>increase open rates and conversions</strong>.
                                <br /><br />
                                Whether you’re a <strong>business, freelancer, or agency</strong>, MailBlaster provides a streamlined solution
                                to send bulk emails, personalize content, track engagement, and improve marketing efficiency—all
                                without any coding skills!
                            </p>
                            <div className="mt-8">
                                <button
                                    onClick={() => {
                                        document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Started
                                    <span className="ml-3 text-xl animate-bounce-right">
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Image (Hidden on Mobile, Optimized for Speed) */}
                        <div className="lg:w-4/12 xl:w-1/4 hidden lg:block relative">
                            <img
                                src="https://product.geniusocean.com/smm-pro/assets/images/8526973391655879301.png"
                                alt="about"
                                className="w-full mx-auto transform transition-transform duration-500 hover:scale-105"
                            />
                            {/* Decorative Blob */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl"></div>
                        </div>
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-float"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-20 animate-float-delay"></div>
                </div>
            </section>


            <section className="bg-gray-100 py-16">
                <div className="px-6 sm:px-10 md:px-20 text-center">
                    {/* Section Header */}
                    <h6 className="text-blue-500 font-semibold text-lg uppercase">Strategy</h6>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">How To Get Started</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        If you want to master Social Media Marketing, let's start and build your brand with us.
                    </p>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                        {[
                            { icon: "📌", title: "Step 1", description: "Sign up and set up your profile." },
                            { icon: "🚀", title: "Step 2", description: "Select your marketing strategy." },
                            { icon: "📊", title: "Step 3", description: "Analyze and optimize performance." },
                        ].map((step, index) => (
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
            <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 md:py-10 py-12" id="Subscription">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                        Start Your Subscription Today and Unlock All <span className="text-blue-600">Premium Features</span> of MailBlaster
                    </h2>

                    <div className="bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
                        {isSubscribed ? (
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="text-6xl text-green-600 animate-bounce">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <p className="text-xl text-green-600 font-semibold">
                                    Thank you for subscribing! Check your inbox for updates.
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

            <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
                <div className="px-14 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        At <span className="font-semibold text-blue-600">Email Blaster</span>, we are passionate about providing businesses with the tools they need to supercharge their email marketing campaigns. Our journey started with a simple idea: to make email marketing accessible, effective, and automated for everyone. Whether you're a small startup or a large enterprise, our platform is designed to streamline your communication process, increase engagement, and drive conversions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                            <p className="text-gray-600">
                                We offer a suite of powerful features, including beautifully designed email templates, robust automation workflows, real-time analytics, and detailed list management tools. Our platform is designed to simplify email marketing so you can focus on creating compelling content.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                            <p className="text-gray-600">
                                We are dedicated to your success. From personalized support to comprehensive resources and tutorials, our team is here to help you every step of the way. We’re constantly evolving to meet your needs and keep your campaigns fresh and engaging.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Email marketing remains one of the most effective channels for driving engagement and building lasting relationships with your customers. With <span className="font-semibold text-blue-600">Email Blaster</span>, you can take your email marketing to the next level by leveraging our advanced features and intuitive interface. Whether you’re looking to run one-off campaigns or set up automated workflows, our platform offers the flexibility and scalability to meet your needs.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default IndexPage;