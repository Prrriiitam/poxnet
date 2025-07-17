const models = [
    {
      name: "ResNet50V2",
      image: "images/resnet.png",
      description:
      `ResNet50 V2 is a variant of the ResNet (Residual Network) model, which is a popular convolutional neural network (CNN) architecture for image classification. It was introduced as an improvement over the original ResNet model to further enhance its performance.`,
      extraText: "The ResNet architecture is known for using residual blocks, which address the vanishing gradient problem that can occur in deep neural networks. The vanishing gradient problem refers to the issue of gradients becoming too small during backpropagation, which can hinder the learning process. Residual blocks introduce skip connections, also known as shortcut connections, that allow for the direct flow of information from earlier layers to later layers. This allows the network to bypass unnecessary layers and enables training of deeper networks with improved gradient flow and reduced degradation in performance as the network gets deeper. \nResNet50V2 specifically consists of 50 layers, including convolutional layers, batch normalization layers, activation functions (such as Rectified Linear Units or ReLUs), global average pooling layers, and fully connected layers. It follows the 'pre-activation' design, where batch normalization and activation functions are applied before the convolutional layers, allowing for better convergence during training. The deployed model is large and may take a while to load. Read more about it in",
      linkText: " the research.",
      linkHref: "/research",
      cta: "Try ResNet50V2 >>",
      ctaLink: "/try/resnet",
      card: "Our MOST accurate model\nSlow to load and predict but highly accurate only for monkeypox",
      redlink: "resnet"

    },
    // {
    //   name: "VGG16",
    //   image: "images/xception.png",
    //   description: "This is VGG16 model from it you can predict 6 different diseases",
    //   extraText:"this is a popular model used to train these skin leision dataset its highly accurate for 6 diseases like chickenpox, monkeypox, measels, cowpox, HFMD and healthy skin",
    //   linkText: " the research.",
    //   linkHref: "#research",
    //   cta: "Try VGG16 >>",
    //   ctaLink: "/try/vgg16",
    //   card: "A mid sized graph based model that trades accuracy for faster predictions suitable for monkeypox, Chickenpox, Cowpox, HMFD, Measels",
    //   redlink: "vgg16"

    // },
    {
      name: "MobileNetV2",
      image: "images/mobilenet.png",
      description:
        "MobileNet V2 is a convolutional neural network (CNN) model that is designed for efficient image classification on mobile devices. It uses depthwise separable convolutions to reduce computation and model size. The model consists of a series of convolutional layers followed by depthwise separable convolutional layers, which separate spatial and channel-wise operations.",
      extraText:
        "To customize MobileNet, additional layers can be added on top, such as fully connected layers for classification, or additional convolutional layers for feature extraction. These added layers can provide further customization and adaptation to specific tasks or datasets, making MobileNet a versatile option for mobile image recognition applications. The implementation used here is a custom version. Read more about it in ",
      linkText: " the research.",
      linkHref: "/research",
      cta: "Try MobileNet >>",
      ctaLink: "/try/mobilenet",
      card: "The portable and faster but less accurate model only for monkeypox",
      redlink: "mobilenet"
    },
    {
      name: "EfficientNetB3",
      image: "images/efficientnet.jpg",
      description: "This is EffiencientNetB3 model with 89% accuracy",
      extraText:"this is a popular model used to train these skin leision dataset its highly accurate",
      linkText: " the research.",
      linkHref: "/research",
      cta: "Try EfficientNetB3 >>",
      ctaLink: "/try/efficientnetb3",
      card: "A mid sized graph based model that trades accuracy for faster predictions only for monkeypox",
      redlink: "efficientnetb3"

    },
    {
      name: "DesnseNet201",
      image: "images/densenet.jpg",
      description: "This is DenseNet201 model with 96% accuracy",
      extraText:"this is a popular model used to train these skin leision dataset its highly accurate",
      linkText: " the research.",
      linkHref: "/research",
      cta: "Try DesnseNet201 >>",
      ctaLink: "/try/desnsenet201",
      card: "A mid sized graph based model that trades accuracy for faster predictions only for monkeypox",
      redlink: "desnsenet201"

    },
    {
      name: "ConvNext",
      image: "images/convnext.png",
      description: "This is ConvNext Tiny model with 92% accuracy",
      extraText:"this is a popular model used to train these skin leision dataset its highly accurate",
      linkText: " the research.",
      linkHref: "/research",
      cta: "Try ConvNext >>",
      ctaLink: "/try/convnext",
      card: "A mid sized graph based model that trades accuracy for faster predictions only for monkeypox",
      redlink: "convnext"

    }
    
  ];
  
  export default models;
  