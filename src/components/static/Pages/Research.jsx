import React from "react";
import { motion } from "framer-motion";

const models = [
  {
    name: "ResNet50V2",
    accuracy: "97%",
    description:
      "ResNet50V2 is a deep residual network architecture designed to handle vanishing gradients in deep networks. It utilizes skip connections to learn identity mappings, ensuring better convergence during training. In our Monkeypox detection system, it achieves a remarkable 97% accuracy, making it the most reliable among our models.",
    image: "/images/resnet.png",
  },
  {
    name: "MobileNetV2",
    accuracy: "89%",
    description:
      "MobileNetV2 is a lightweight and efficient model designed for mobile and embedded vision applications. Using depthwise separable convolutions and inverted residuals, it balances accuracy and efficiency, making it ideal for on-device inference.",
    image: "/images/mobilenet.png",
  },
  {
    name: "EfficientNetB3",
    accuracy: "78%",
    description:
      "EfficientNetB3 scales depth, width, and resolution using a compound scaling method. It offers a good trade-off between performance and computational cost, making it well-suited for real-time detection tasks.",
    image: "/images/efficientnet.jpg",
  },
  {
    name: "DenseNet201",
    accuracy: "81%",
    description:
      "DenseNet201 connects each layer to every other layer in a feed-forward fashion. This promotes feature reuse and alleviates the vanishing-gradient problem, leading to improved performance with fewer parameters.",
    image: "/images/densenet.jpg",
  },
  {
    name: "ConvNeXt",
    accuracy: "75%",
    description:
      "ConvNeXt is a modern convolutional architecture inspired by transformer design principles. It blends traditional CNN strengths with newer innovations, offering competitive performance for visual tasks.",
    image: "/images/convnext.png",
  },
];

const Research = () => {
  return (
    <div className="bg-black text-white px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
        Deep Learning Research
      </h1>
      <div className="space-y-24">
        {models.map((model, index) => (
        <motion.div
         key={model.name}
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
          duration: 0.7,
          delay: index * 0.3,
          ease: [0.2, 0.8, 0.2, 1], // smooth in-out cubic
        }}
        viewport={{ amount: 0.4 }} // triggers slower
        >

          
            <img
              src={model.image}
              alt={model.name}
              className="rounded-2xl w-full shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
                {model.name}
              </h2>
              <p className="text-gray-300 mb-2 text-sm">
                <span className="text-green-400 font-medium">Accuracy:</span>{" "}
                {model.accuracy}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {model.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Research;
