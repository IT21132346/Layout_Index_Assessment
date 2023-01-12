import React from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  //Closing the dropdown when its item is clicked
  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  //use mouse hover for dropdown menue
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  //pass an id along with the click event
  const handleClick = (id) => {
    console.log(id);
    setDropdown((prev) => !prev);
    };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            //onClick={() => setDropdown((prev) => !prev)}
            onClick={items.id ? () => handleClick(items.id) : null}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;

//menu categories
export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Categories",
    url: "/categories",
    submenu: [
      {
        title: "Gents Section",
        url: "gents-section",
        submenu: [
          {
            title:"Clothing",
            submenu:[
              {
                title:"Hoodies",
                url:"/hoodies"
              },
              {
                title:"Casual Shirts",
                url:"/casual-shirts"
              },
              {
                title:"Shorts",
                url:"/shorts"
              },
            ]
          },
          {
            title: "Blazers",
            url: "/blazers",
          },
          {
            title: "Sunglasses",
            url: "/sunglasses",
          },
          {
            title: "Shoes",
            submenu: [
              {
                title: "Office Shoes",
                url: "/office-shoes",
              },
              {
                title: "Sport shoes",
                url: "/sport-shoes",
              },
            ],
          },
        ],
      },
      {
        title: "Ladies Section",
        url: "ladies-section",
        submenu: [
          {
            title: "Watches",
            url: "/watches",
          },
          {
            title: "Clothing",
            submenu: [
              {
                title: "Jeans",
                url: "/jeans",
              },
              {
                title: "Blouses",
                url: "/blouses",
              },
              {
                title: "Skirts",
                url: "/skirts",
              },
            ],
          },
        ],
      },
      {
        title: "Kids",
        submenu:[
          {
            title:"Toys",
            url:"/toys"
          },
          {
            title:"Foot Ware",
            url:"/foot-ware"
          }
        ]
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title:"Admin",
    url:"/admin"
  }
];
