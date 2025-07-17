// src/components/ModelCard.js
export default function ModelCard({ model }) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-8 py-8 border-b border-gray-700">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={model.image}
            alt={`${model.name} Illustration`}
            className="max-w-sm w-full"
          />
        </div>
  
        {/* Text */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-semibold border-b border-gray-500 pb-2 mb-4">
            {model.name}
          </h3>
          <p className="text-gray-200 mb-4">{model.description}</p>
          <p className="text-gray-200">
            {model.extraText}{" "}
            {model.linkText && (
              <a href={model.linkHref} className="underline font-bold hover:text-blue-300">
                {model.linkText}
              </a>
            )}
          </p>
  
          {model.cta && (
            <a
              href={model.ctaLink}
              className="inline-block mt-6 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
            >
              {model.cta}
            </a>
          )}
        </div>
      </div>
    );
  }
  