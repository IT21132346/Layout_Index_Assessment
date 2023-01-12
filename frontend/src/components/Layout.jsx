import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';

//nested all the routes as children inside a Layout route
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
        {/*props components are read-only components. props are called arbitary inputs  */}
      </div>
    </div>
  )
}

export default Layout