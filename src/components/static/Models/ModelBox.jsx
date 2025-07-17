// components/ModelCard.jsx
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ModelBox = ({model}) => {
  const navigate = useNavigate();

  return (
    // <Link to={model.link} className="w-full md:w-1/3 p-4">
  <div
    className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300 w-[300px] h-[400px]"
    onClick={() => navigate(`/try/${model.redlink}`)}
    >
        <img src={model.image} alt={model.name} className="w-full h-64 object-contain p-6" />
        <div className="text-center p-4">
          <h2 className="text-xl text-gray-300 font-bold">{model.name}</h2>
          <p className="text-sm text-gray-300 mt-2">{model.card}</p>
        </div>
      </div>
    // </Link>
  );
};

export default ModelBox;
