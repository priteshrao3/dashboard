'use client'
import { useState } from "react";
import axios from "axios";

const UploadTemplate = () => {
  const [template, setTemplate] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!template.trim()) {
      setResponseMessage("Template cannot be empty.");
      setMessageClass("text-red-600 font-semibold");
      return;
    }

    setResponseMessage("Uploading...");
    setMessageClass("text-yellow-600 font-semibold");

    try {
      const response = await axios.post(
        "https://automationdg.pythonanywhere.com/apis/templates/",
        { template }
      );

      if (response.status === 201) {
        setResponseMessage("Template uploaded successfully!");
        setMessageClass("text-green-600 font-semibold");
        setTemplate(""); // Clear input after successful upload
      } else {
        setResponseMessage(`Error: ${response.data.template || "Upload failed"}`);
        setMessageClass("text-red-600 font-semibold");
      }
    } catch (error) {
      setResponseMessage("An error occurred while uploading.");
      setMessageClass("text-red-600 font-semibold");
    }
  };

  return (
    <div className="bg-transparent rounded-xl shadow-lg py-5 md:px-32">
      <h1 className="md:text-4xl text-2xl font-semibold text-black text-center mb-6">Upload Your Email Template</h1>

      <form onSubmit={handleSubmit} className="text-black p-6 rounded-lg shadow-md">
        <textarea
          name="template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          required
          className="w-full h-72 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          placeholder="Enter your email template here..."
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[20em] py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Upload Template
          </button>
        </div>
      </form>

      {responseMessage && (
        <div className={`mt-6 text-center ${messageClass}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default UploadTemplate;
