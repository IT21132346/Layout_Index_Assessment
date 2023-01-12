import React from 'react'
//import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from './Layout';
import Admin from './Admin';

const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='admin' element={<Admin/>}/>
          {/* ...*/}
        </Route>
      </Routes></div>
  )
}

export default App