// src/App.js
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import Result from './components/Result';
import Header from "./components/static/Header"
import './index.css';
import Footer from './components/static/Footer';

import Home from './components/static/Pages/Home';
import Research from './components/static/Pages/Research';
import Reachus from './components/static/Pages/Reachus';
import TryModels from './components/static/Pages/TryModels';
import ModelPage from './components/static/Models/ModelPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  // const [prediction, setPrediction] = useState('');

  // return (
  //   <div>
  //     <Header />
  //     <Body />
  //     <ModelsSection />
  //     {/* <ImageUpload setPrediction={setPrediction} />
  //     <Result prediction={prediction} /> */}
  //     <Footer />
  //   </div>
  // );

    return (
  <>
     <BrowserRouter>
       <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/research" element={<Research />}></Route>
      <Route path="/reachus" element={<Reachus /> }></Route>
      <Route path="/try" element={<TryModels /> }></Route>
      <Route path="/try/mobilenet" element={<ModelPage modelName="MobileNetV2" />} />
      <Route path="/try/resnet" element={<ModelPage modelName="ResNet50V2"  />} />
      <Route path="/try/efficientnetb3" element={<ModelPage modelName="EfficientnetB3"  />} />
      <Route path="/try/desnsenet201" element={<ModelPage modelName="densenet201"  />} />
      <Route path="/try/convnext" element={<ModelPage modelName="ConvNeXtmodel"  />} />
     
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
  )

}

export default App;
