import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './Search';
import Result from './Result';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SearchProvider} from "./SearchContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/search" element={<Search />} />
              <Route path="/result" element={<Result />} />

          </Routes>
      </Router>
    </SearchProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
