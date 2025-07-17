// src/components/ModelsSection.js
import ModelCard from "./ModelCard";
import modelData from "./data/models";



export default function ModelsSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">THE MODELS</h2>
      {modelData.map((model, index) => (
        <ModelCard key={index} model={model} />
      ))}
    </section>
  );
}
