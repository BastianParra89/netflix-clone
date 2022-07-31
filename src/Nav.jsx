import React from 'react'
import "./Nav.css";
import { useState, useEffect } from 'react';


function Nav() {


/*
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  */



  return (
    <div className="nav" /*{`nav ${show && "nav__black"}`} */>
      <img 
      className='nav__logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" 
      alt="Netflix Logo" 
      />
      <img 
      className='nav__avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png" 
      alt="Netflix Avatar" 
      />
    </div>
  );
}

export default Nav