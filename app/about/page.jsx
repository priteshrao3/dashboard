'use client'
import React from 'react';
import { FaLightbulb, FaUsers, FaRegCompass } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

function Aboutpage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-16">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h2 className="text-4xl font-extrabold text-gray-900 mb-4" variants={fadeInUp}>
          About Us
        </motion.h2>
        <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
          Learn more about our journey, values, and commitment to providing the best email marketing automation solutions.
        </motion.p>
      </motion.div>

      {/* Our Story Section */}
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

      {/* Our Values Section */}
      <motion.div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 py-12" initial="hidden" animate="visible" variants={stagger}>
        <div className="text-center">
          <motion.h3 className="text-3xl font-semibold text-gray-900 mb-6" variants={fadeInUp}>
            Our Core Values
          </motion.h3>
          <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8" variants={fadeInUp}>
            We are committed to creating an easy-to-use platform that provides powerful features, amazing support, and constant innovation.
          </motion.p>
        </div>

        <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center" variants={stagger}>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div className="flex justify-center">
              <FaLightbulb className="text-5xl text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Innovation</h4>
            <p className="text-gray-600">We continuously improve our platform with new features to meet the evolving needs of email marketing.</p>
          </motion.div>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div className="flex justify-center">
              <FaUsers className="text-5xl text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Customer Success</h4>
            <p className="text-gray-600">We prioritize our users' success, providing dedicated support and resources to help them grow.</p>
          </motion.div>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <div className="flex justify-center">
              <FaRegCompass className="text-5xl text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Simplicity</h4>
            <p className="text-gray-600">Our platform is designed to be intuitive, allowing you to focus on your marketing, not the technology.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Aboutpage;