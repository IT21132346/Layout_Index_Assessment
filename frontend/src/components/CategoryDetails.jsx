import React from "react";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../hooks/useCategoryContext";

const CategoryDetails = ({ category }) => {
  const {dispatch} = useCategoryContext()

  const handleClick = async ()=>{
    const response = await fetch('/api/categories/' + category._id,{
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type:'DELETE_CATEGORY', payload: json})
    }
  }
  return (
    <div>
      {/* <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category.mainMenue}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    {category.subMenue}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div> */}
      <ul>
        <li><Link>{category.mainMenu}</Link>
          
          <ul>
            <li><Link>{category.subMenu}</Link></li>
          </ul>
        </li>
        <button type="submit" onClick={handleClick}>delete</button>
      </ul>
    </div>
  );
};

export default CategoryDetails;
