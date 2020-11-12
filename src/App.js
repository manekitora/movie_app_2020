import React from 'react';
import './App.css';
import { func } from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import HomeUsingHook from './routes/HomeUsingHook';
import DetailUsingHook from './routes/DetailUsingHook';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={HomeUsingHook} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={DetailUsingHook} />
    </HashRouter>
  );
}

export default App; 