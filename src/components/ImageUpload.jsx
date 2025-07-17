// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload({ setPrediction }) {
  const [selectedModel, setSelectedModel] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // for preview

  const modelOptions = [
    { label: 'ResNet50V2 (Recommended)', value: 'ResNet50V2-01.keras' },
    { label: 'MobileNet (Recommended)', value: 'mdl_wts.keras' },
    { label: 'DenseNet201', value: 'densenet201_mpox_best.keras' },
    { label: 'EfficientNetB3', value: 'EfficientnetB3weights.keras' },
    { label: 'ConvNeXt', value: 'ConvNeXtmodel.keras' },
    { label: 'Xception', value: 'Xceptionweights.keras' },
    { label: 'VGG16', value: 'VGG16_weights.keras' },
  ];

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!selectedModel || !image) {
      alert('Please select a model and upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('model_name', selectedModel);
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error('Prediction failed:', err);
      setPrediction('Error occurred while predicting.');
    }
  };

  return (
    <div style={{ display: 'flex', padding: '30px', justifyContent: 'space-between' }}>
      {/* Left side: Form */}
      <div style={{ flex: 1, paddingRight: '20px', textAlign: 'center' }}>
        <h2>Monkeypox Detection</h2>

        <select
          onChange={handleModelChange}
          value={selectedModel}
          style={{ padding: '10px', marginBottom: '20px', width: '80%' }}
        >
          <option value="">Select a Model</option>
          {modelOptions.map((model) => (
            <option key={model.value} value={model.value}>
              {model.label}
            </option>
          ))}
        </select>

        <br />

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br /><br />

        <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>Predict</button>
      </div>

      {/* Right side: Image Preview */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        {imagePreview && (
          <>
            <h3>Image Preview</h3>
            <img
              src={imagePreview}
              alt="Uploaded preview"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
