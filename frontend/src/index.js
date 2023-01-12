import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { CategoriesContextProvider } from './context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoriesContextProvider>
      <App />
      </CategoriesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
