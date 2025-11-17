import { Routes } from 'react-router';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'

import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';



import './App.css';

function App() {
  return (
    <body>
      <Header />
      <Banner />
      <Slider />
      <Footer />
    </body>
  );
}

export default App;
