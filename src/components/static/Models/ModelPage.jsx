import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ModelPage = ({ modelName, endpoint }) => {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState("No Output");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setImagePreview(selected ? URL.createObjectURL(selected) : null);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("modelName", modelName || "ResNet50V2");
    formData.append("file", file);

    try {
      const res = await axios.post(
        'https://poxnetbackend.onrender.com/predict',
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setOutput(`Prediction: ${res.data.prediction}\nConfidence: ${res.data.confidence}%`);
    } catch (err) {
      console.error(err);
      setOutput("Prediction failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f0f3f] to-black text-white font-sans p-4">
      {/* Title */}
      <div className="text-center mt-8 text-3xl md:text-4xl font-extrabold tracking-wide text-teal-300 drop-shadow">
        {modelName}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 mt-10">
        {/* Card */}
        <div className="bg-[#101025] p-6 rounded-2xl shadow-xl w-full max-w-4xl border border-white/20 flex flex-col md:flex-row gap-6">

          {/* Upload Section */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-purple-200">
              Upload an Image (JPEG/PNG)
            </h2>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="file:bg-purple-700 file:text-white file:rounded-lg file:px-4 file:py-1 hover:file:bg-purple-900 text-sm text-gray-300 mb-4 w-full"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-900 hover:to-indigo-900 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Predict
            </button>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4 rounded overflow-hidden border border-white/10 shadow-inner max-h-[250px] overflow-y-auto">
                <img src={imagePreview} alt="Preview" className="w-full object-cover" />
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-green-200">
              Output Tensor Information / Results
            </h2>
            <div className="bg-black bg-opacity-40 p-4 min-h-[150px] rounded-xl border border-white/10 whitespace-pre-wrap break-words text-sm text-gray-200">
              {output}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 mb-6">
        <button
          onClick={() => navigate("/try")}
          className="text-purple-400 hover:text-purple-200 hover:underline text-sm md:text-base"
        >
          &lt; Back to Model Page
        </button>
        <p className="text-xs text-gray-400 mt-2 max-w-md mx-auto">
          Note: If loading is taking too long, check your bandwidth or try refreshing the image.
        </p>
      </div>
    </div>
  );
};

export default ModelPage;
