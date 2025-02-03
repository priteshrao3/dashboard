'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gradient-to-t to-green-50 from-white'>
      <nav className="text-blue-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Mobile Menu Button on Left */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div>
            <a href="/" className="md:text-3xl text-xl font-bold hover:text-gray-500 transition-all duration-300">
              Email Blaster
            </a>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex md:space-x-8 space-x-2">
            <li><a href="/" className="text-lg hover:text-gray-500 transition-colors duration-300">Home</a></li>
            <li><a href="subjectlines" className="text-lg hover:text-gray-500 transition-colors duration-300">Subjects</a></li>
            <li><a href="templatesall" className="text-lg hover:text-gray-500 transition-colors duration-300">Templates</a></li>
            <li><a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">About</a></li>
            <li><a href="#" className="text-lg hover:text-gray-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        {/* Mobile Drawer */}
        <div className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-5 flex justify-between">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>
          <ul className="p-5 space-y-4">
            <li><a href="/" className="block text-lg hover:text-gray-500">Home</a></li>
            <li><a href="subjectlines" className="block text-lg hover:text-gray-500">Subjects</a></li>
            <li><a href="templatesall" className="block text-lg hover:text-gray-500">Templates</a></li>
            <li><a href="#" className="block text-lg hover:text-gray-500">About</a></li>
            <li><a href="#" className="block text-lg hover:text-gray-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
