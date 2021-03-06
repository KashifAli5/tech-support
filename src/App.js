import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';

// Components
import Header from './components/header/Header';
import MainAppBody from './components/body/MainBody';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />

      <MainAppBody />

      <Footer />
    </div>
  );
}

export default App;
