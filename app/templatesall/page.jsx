'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaSave, FaSearch } from 'react-icons/fa';
import { Button } from 'antd'; // Import Ant Design Button

const TemplatesPage = () => {
  const [searchKey, setSearchKey] = useState('');
  const [templates, setTemplates] = useState([]);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [updatedTemplate, setUpdatedTemplate] = useState('');
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const storedKey = localStorage.getItem('searchKey');
    if (storedKey) {
      setSearchKey(storedKey);
    }
  }, []);

  const fetchTemplates = async () => {
    if (!searchKey.trim()) {
      setMessage('Enter a Key Protect to search.');
      return;
    }
    setMessage('Searching...');
    localStorage.setItem('searchKey', searchKey);
    try {
      const response = await axios.get(
        `https://automationdg.pythonanywhere.com/apis/templates/?key_protect=${searchKey}`
      );
      setTemplates(response.data);
      setMessage(response.data.length ? '' : 'No templates found.');
      setCurrentPage(1);
    } catch (error) {
      setMessage('Error fetching templates.');
    }
  };

  const handleEdit = (template) => {
    setEditingTemplate(template.id);
    setUpdatedTemplate(template.template);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://automationdg.pythonanywhere.com/apis/templates/${id}/`, {
        template: updatedTemplate,
        key_protect: searchKey,
      });
      setEditingTemplate(null);
      fetchTemplates();
    } catch (error) {
      setMessage('Failed to update template.');
    }
  };

  // Function to dynamically resize the textarea
  const handleTextareaResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = templates.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Email Templates</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Enter Key Protect"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          onClick={fetchTemplates}
          type="primary"
          icon={<FaSearch />}
          className="flex items-center gap-2"
        >
          Search
        </Button>
      </div>
      {message && <div className="text-center text-red-600 font-semibold mb-4">{message}</div>}
      <ul className="mt-6 space-y-4">
        {currentItems.map((template) => (
          <li key={template.id} className="p-4 border rounded-lg shadow-md flex justify-between items-center bg-gray-50">
            {editingTemplate === template.id ? (
              <textarea
                value={updatedTemplate}
                onChange={(e) => setUpdatedTemplate(e.target.value)}
                onInput={handleTextareaResize}
                className="border p-5 h-[25em] text-black rounded-md w-full mr-2 resize-none"
                rows={1} // Starts with a single row but expands as needed
              />
            ) : (
              <span className="text-black font-medium">{template.template}</span>
            )}
            {editingTemplate === template.id ? (
              <Button
                onClick={() => handleUpdate(template.id)}
                type="primary"
                icon={<FaSave />}
                className="ml-4"
              >
                Save
              </Button>
            ) : (
              <Button
                onClick={() => handleEdit(template)}
                type="default"
                icon={<FaEdit />}
                className="ml-4"
              >
                Edit
              </Button>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg disabled:opacity-50"
        >
          Previous
        </Button>
        <span className="text-black font-semibold">Page {currentPage}</span>
        <Button
          onClick={() => setCurrentPage((prev) => (indexOfLastItem < templates.length ? prev + 1 : prev))}
          disabled={indexOfLastItem >= templates.length}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TemplatesPage;
