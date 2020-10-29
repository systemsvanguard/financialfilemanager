// src/App.js
import React from 'react';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SiteBanner from './components/SiteBanner';
import SiteFooter from './components/SiteFooter';
import SiteNavBar from './components/SiteNavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <SiteNavBar />
      <SiteBanner />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          <Route component={NotFound} />
        </Switch>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;