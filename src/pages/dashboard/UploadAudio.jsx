import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export function UploadAudio() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    audio_file: null,
    image: null, 
    user_id: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "audio_file") {
      setFormData({ ...formData, audio_file: file });
    } else if (e.target.name === "image") {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("audio_file", formData.audio_file);
    formDataToSend.append("user_id", formData.user_id); 
    formDataToSend.append("image", formData.image); 
    
   
    try {
      const response = await axios.post(
        "https://audio.globillmedicalresources.com/public/api/add/audio",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        
      );
      toast.success("Audio Successfully uploaded !");
      setTimeout(()=>{
         navigate("/dashboard/AudioLibrary")
      },2000)
      console.log("Audio uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading audio:", error);
    
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Audio</h1>
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Audio Description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="audioFile">
            Select Upload Audio
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="audio_file"
            name="audio_file"
            onChange={handleFileChange}
            placeholder="Audio Upload"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_id">
            User Id
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            placeholder="Enter User Id"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Upload Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            placeholder="Image Upload"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadAudio;
