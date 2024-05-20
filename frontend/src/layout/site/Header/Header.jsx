import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container  ">
        <div className="header_wrapper justify-content-between align-items-center  ">
          <div className="header__logo">
            <img
              src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png"
              alt=""
            />
          </div>
          <nav class="header_menu">
            <ul class="main_menu d-flex ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basket" >Basket</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
             
            </ul>
          </nav>
          <div className="header__right d-flex ">
<Link><i class="fa-brands fa-github"></i></Link>
<Link><i class="fa-brands fa-facebook"></i></Link>
<Link><i class="fa-brands fa-instagram"></i></Link>
<Link><i class="fa-solid fa-bars"></i></Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
