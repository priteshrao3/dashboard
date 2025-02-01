'use client'
import { useState } from 'react';
import axios from 'axios';

const UploadSubject = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a CSV file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const csvText = e.target.result;
      const lines = csvText.split('\n').slice(1); // Remove header row
      const subjects = lines.map((line) => line.trim()).filter((line) => line !== '');

      if (subjects.length === 0) {
        alert('No valid subject lines found in the file.');
        return;
      }

      const payload = subjects.map((subject) => ({ subject }));

      setMessage('Uploading...');
      setMessageClass('text-yellow-600 font-semibold');

      try {
        const response = await axios.post(
          'https://automationdg.pythonanywhere.com/apis/subject-line/',
          payload,
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.status === 200 || response.status === 201) {
          setMessage('CSV uploaded successfully!');
          setMessageClass('text-green-600 font-semibold');
        } else {
          setMessage(`Error: ${response.data?.message || 'Failed to upload'}`);
          setMessageClass('text-red-600 font-semibold');
        }
      } catch (error) {
        setMessage(`Error: ${error.response?.data?.message || 'Failed to upload'}`);
        setMessageClass('text-red-600 font-semibold');
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="rounded-xl shadow-lg py-5 md:px-60">
      <h1 className="md:text-4xl text-2xl font-semibold text-black text-center mb-6">Upload Subject Line CSV</h1>
      
      <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-md">
        <input
          type="file"
          accept=".csv"
          required
          className="w-full p-4 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
        >
          Upload CSV
        </button>
      </form>

      {message && (
        <div className={`mt-6 text-center ${messageClass}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default UploadSubject;
