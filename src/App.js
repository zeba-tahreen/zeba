import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import WrapperParallax from './components/layout/WrapperParallax';

const App = () => {
  return (
      <Route>
        <Navbar />
        <WrapperParallax />
      </Route>
  );
};

export default App;
