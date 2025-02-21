'use client'
import React, { useState, useEffect } from 'react';
import { FaWallet } from "react-icons/fa";
import axios from "axios";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function IndexPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

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
                setName("");
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


    const tutorialVideos = [
        { title: "Step 1: How to Download software to Install and Open the software to use email automation", url: "https://www.youtube.com/embed/lGQOsgSyFj0?si=4f51eU0HiNW8aAN2" },
        { title: "Step 2: Dashboard Overview & Uploading Subject Lines using CSV file", url: "https://www.youtube.com/embed/uM-hKCOTY50?si=yUM6FM0YvJS3Ue_2" },
        { title: "Step 3:How to Upload and Editing Templates from dashboard", url: "https://www.youtube.com/embed/TRa5vWkVhak?si=fjR37q4e15FiwEoP" },
        { title: "Step 4: Creating Credentials, Client Email List, and Automating Email Sending", url: "https://www.youtube.com/embed/ofFLmVKTf54?si=pv6W59Ow-RidIcYU" },
        { title: "🚀 Ultimate Guide to Email Automation: Send Emails Like a Human with Software! 📧", url: "https://www.youtube.com/embed/LCU38mzvCxo?si=T-57bRVVndD4e1FT" },
    ];



    return (
        <div className="bg-gray-50">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 md:py-2 py-2  text-white">
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
                                <Link href="/subscription">
                                    <button
                                        className="inline-flex items-center md:px-20 px-28 py-2 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Get Started
                                        <span className="ml-3 text-lg sm:text-xl">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </Link>
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
                            src="https://www.youtube.com/embed/LCU38mzvCxo?si=-BSziVvHpOE8vtAB"
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
                            <Link href="/subscription">
                                <button
                                    onClick={() => document.getElementById('Subscription')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-blue-600 text-white font-semibold md:px-20 px-28 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                                    Get Start Now
                                </button>
                            </Link>
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
                        MailBlaster automates email marketing by managing bulk email sending, handling email credentials, and tracking performance. Just upload your CSV files, configure your email campaign, and let the system take care of everything.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {[
                            { title: "Add Subject Line via CSV", desc: "Easily import subject lines in bulk using a CSV file for personalization.", icon: "✉️" },
                            { title: "Choose Email Templates", desc: "Select or customize email templates directly from our website.", icon: "🎨" },
                            { title: "Upload Email Credentials", desc: "Securely upload sender email credentials from a CSV file.", icon: "🔐" },
                            { title: "Import Client Email List", desc: "Manage and segment customer emails by uploading a CSV file.", icon: "📂" },
                            { title: "Auto Login & Send Emails", desc: "The system fetches credentials and automates the email-sending process.", icon: "⚡" },
                            { title: "Generate CSV for Failed Emails", desc: "Easily track failed email deliveries with an auto-generated CSV report.", icon: "📊" }
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



            <div className="py-10 flex flex-col items-center bg-white md:px-20 px-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    Mail Blaster Step-by-Step Guide
                </h1>
                <Swiper
                    modules={[Pagination, Navigation, A11y]}
                    pagination={{ clickable: true }}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    grabCursor={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="w-full px-4 md:px-20"
                >
                    {tutorialVideos.map((video, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center cursor-grab">
                            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                {video.title}
                            </h2>
                            <iframe
                                className="w-full h-56 sm:h-64 md:h-72 rounded-lg"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            <section className="bg-gray-100 py-16">
                <div className="px-6 sm:px-10 md:px-20 text-center">
                    {/* Section Header */}
                    <h6 className="text-blue-500 font-semibold text-lg uppercase">Strategy</h6>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">How To Get Started</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Follow these simple steps to subscribe, set up your account, and start using MailBlaster for seamless email marketing.
                    </p>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                        {[
                            { icon: "🛒", title: "Step 1: Choose a Plan", description: "Go to the subscription page and select a plan that suits your needs." },
                            { icon: "📝", title: "Step 2: Fill Your Details", description: "Provide your necessary details to create your account." },
                            { icon: "💳", title: "Step 3: Make Payment", description: "Complete the payment for your subscription plan securely." },
                            { icon: "⬇️", title: "Step 4: Download Software", description: "Once payment is successful, download the software to start using it." },
                            { icon: "⚙️", title: "Step 5: Set Up & Configure", description: "Follow the setup instructions to configure MailBlaster." },
                            { icon: "🚀", title: "Step 6: Start Email Marketing", description: "You're all set! Begin sending automated email campaigns effortlessly." }
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



            <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 md:py-20">
                <div className="md:px-20 px-6 text-center">
                    {/* Section Heading */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">Our Journey & Vision</h2>
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        At <span className="font-semibold text-blue-600">Email Blaster</span>, we believe in **empowering businesses** with seamless, automated, and high-converting email marketing solutions.
                        Our story began with a vision: **to simplify email marketing** and **maximize outreach with minimal effort**. Today, we help startups, enterprises, and marketers **connect, engage, and grow effortlessly**.
                    </p>

                    {/* Two-Column Info Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        {/* Why Choose Us? */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                                <span className="mr-2 text-blue-600 text-3xl">🚀</span> Why Choose Us?
                            </h3>
                            <p className="text-gray-600 text-lg">
                                Our platform offers **stunning email templates**, **advanced automation**, **real-time analytics**, and **powerful list management tools** – all designed to make your email marketing hassle-free.
                            </p>
                        </div>

                        {/* Our Commitment */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                                <span className="mr-2 text-blue-600 text-3xl">💡</span> Our Commitment
                            </h3>
                            <p className="text-gray-600 text-lg">
                                We are dedicated to **your success**. With **24/7 support**, in-depth tutorials, and personalized guidance, we ensure you get the best results from your email campaigns.
                            </p>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                        **Email marketing is the backbone of successful business communication.**
                        With <span className="font-semibold text-blue-600">Email Blaster</span>, you can **boost conversions, nurture leads, and strengthen relationships** with minimal effort.
                        Whether you're running **targeted campaigns** or setting up **automated workflows**, we provide the **flexibility, scalability, and ease** to make every email count.
                    </p>

                    {/* Call to Action */}
                    <div className="mt-8">
                        <a href="/subscription" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                            Get Started Today <span className="ml-3 text-xl">➡️</span>
                        </a>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default IndexPage;