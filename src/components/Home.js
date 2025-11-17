import { Routes } from 'react-router';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'

import './App.css';

function Home() {
  return (
    <body>
      <Header />
      <Banner />
      <Slider />
      <Footer />
    </body>
  );
}

export default Home;
