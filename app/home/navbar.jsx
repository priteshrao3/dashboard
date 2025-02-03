import React from 'react';

function NavigationBar() {
  return (
    <div className='bg-gradient-to-t to-green-50 from-white'>
      <nav className=" text-blue-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="md:text-3xl text-xl font-bold hover:text-gray-200 transition-all duration-300">
                Email Blaster
              </a>
            </div>
            <div>
              <ul className="flex md:space-x-8 space-x-2">
                <li>
                  <a href="/" className="text-lg hover:text-gray-200 transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="subjectlines" className="text-lg hover:text-gray-200 transition-colors duration-300">Subjects</a>
                </li>

                <li>
                  <a href="templatesall" className="text-lg hover:text-gray-200 transition-colors duration-300">Templates</a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-gray-200 transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-gray-200 transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
