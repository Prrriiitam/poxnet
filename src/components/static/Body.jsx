import React from 'react'
import { useNavigate } from 'react-router-dom';

function Body() {
    const navigate = useNavigate();

  return (
    <section
  className="h-screen w-full bg-black bg-cover bg-center flex flex-col justify-center items-start px-10"
>
  <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
    HIGHLY ACCURATE,<br />
    <span className="text-white font-extrabold">STATE OF THE ART</span><br />
    MONKEYPOX DETECTION MODELS
  </h1>

    <div className="mt-6 flex gap-4">
      <button 
        onClick={() => navigate('/research')}
        className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
      >
        View research
      </button>
      <button 
        onClick={() => navigate('/try')}
        className="text-white underline underline-offset-4 hover:text-gray-300"
      >
        Models Playground
      </button>
    </div>
</section>

  )
}

export default Body