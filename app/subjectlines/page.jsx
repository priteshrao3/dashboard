'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaSave, FaSearch } from 'react-icons/fa';
import { Button } from 'antd'; 
import UploadSubject from '../home/uploadsubjects';

const SubjectLinePage = () => {
  const [searchKey, setSearchKey] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [editingSubject, setEditingSubject] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const storedKey = localStorage.getItem('searchKey');
    if (storedKey) {
      setSearchKey(storedKey);
    }
  }, []);

  const fetchSubjects = async () => {
    if (!searchKey.trim()) {
      setMessage('Enter a Key Protect to search.');
      return;
    }
    setMessage('Searching...');
    localStorage.setItem('searchKey', searchKey);
    try {
      const response = await axios.get(
        `https://automationdg.pythonanywhere.com/apis/subject-line/?key_protect=${searchKey}`
      );
      setSubjects(response.data);
      setMessage(response.data.length ? '' : 'No subject lines found.');
      setCurrentPage(1);
    } catch (error) {
      setMessage('Error fetching subjects.');
    }
  };

  const handleEdit = (subject) => {
    setEditingSubject(subject.id);
    setUpdatedText(subject.subject);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://automationdg.pythonanywhere.com/apis/subject-line/${id}/`, {
        subject: updatedText,
        key_protect: searchKey,
      });
      setEditingSubject(null);
      fetchSubjects();
    } catch (error) {
      setMessage('Failed to update subject.');
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subjects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg md:p-8 p-2 md:mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Manage Subject Lines</h1>

      <UploadSubject />

      <div className="flex gap-4 mb-6 mt-5">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Enter Key Protect"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          onClick={fetchSubjects}
          type="primary"
          icon={<FaSearch />}
          className="flex items-center gap-2"
        >
          Search
        </Button>
      </div>
      {message && <div className="text-center text-red-600 font-semibold mb-4">{message}</div>}
      <ul className="mt-6 space-y-4">
        {currentItems.map((subject) => (
          <li key={subject.id} className="p-4 border rounded-lg shadow-md flex justify-between items-center bg-gray-50">
            {editingSubject === subject.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="border p-2 text-black rounded-md w-full mr-2"
              />
            ) : (
              <span className="text-black font-medium">{subject.subject}</span>
            )}
            {editingSubject === subject.id ? (
              <Button
                onClick={() => handleUpdate(subject.id)}
                type="primary"
                icon={<FaSave />}
                className="ml-4"
              >
                Save
              </Button>
            ) : (
              <Button
                onClick={() => handleEdit(subject)}
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
          onClick={() => setCurrentPage((prev) => (indexOfLastItem < subjects.length ? prev + 1 : prev))}
          disabled={indexOfLastItem >= subjects.length}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SubjectLinePage;
