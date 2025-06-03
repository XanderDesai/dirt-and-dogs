import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WaiverForm from './WaiverForm';
import HomePage from './HomePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/waiver' element={<WaiverForm />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
