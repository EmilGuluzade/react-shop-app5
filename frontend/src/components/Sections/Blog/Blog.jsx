import React from "react";
import "./Blog.css";

import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mt-5 blog">
      <div className="row justify-content-center">
        <div className="section-heading d-flex flex-column align-items-center ">
          <span className="tit2 m-auto ">Latest News</span>
          <h2 className="tit5 m-auto mb-5  "> The Blog</h2>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src="	https://preview.colorlib.com/theme/pato/images/blog-01.jpg
" alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src="	https://preview.colorlib.com/theme/pato/images/blog-02.jpg
" alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src="	https://preview.colorlib.com/theme/pato/images/blog-03.jpg
" alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;