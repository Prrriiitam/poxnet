// pages/ModelSelection.jsx
import models from './data/models';
import ModelBox from './ModelBox';

const ModelBoxSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-10">
      <h1 className="text-white text-4xl font-bold text-center mb-10">Click Below To Test</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {models.map((model, index) => (
          <ModelBox key={index} model = {model} />
        ))}
      </div>
    </div>
  );
};

export default ModelBoxSelection;
