import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div class="container p-t-40 p-b-70">
          <div class="row">
            <div class="col-sm-6 col-md-4 p-t-50">
              <h4 class="txt13 m-b-33">Contact Us</h4>
              <ul class="m-b-70">
                <li class="txt14 m-b-14">
                  <i
                    class="fa fa-map-marker fs-16 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  8th floor, 379 Hudson St, New York, NY 10018
                </li>
                <li class="txt14 m-b-14">
                  <i
                    class="fa fa-phone fs-16 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  (+1) 96 716 6879
                </li>
                <li class="txt14 m-b-14">
                  <i
                    class="fa fa-envelope fs-13 dis-inline-block size19"
                    aria-hidden="true"
                  ></i>
                  contact@site.com
                </li>
              </ul>

              <h4 class="txt13 m-b-32">Opening Times</h4>
              <ul>
                <li class="txt14">09:30 AM – 11:00 PM</li>
                <li class="txt14">Every Day</li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-4 p-t-50">
              <h4 class="txt13 m-b-33">Latest twitter</h4>
              <div class="m-b-25">
                <span class="fs-13 color2 m-r-5">
                <i class="fa-brands fa-twitter"></i>

                </span>
                <a href="#" class="txt15">
                  @colorlib
                </a>
                <p class="txt14 m-b-18">
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                  <a href="#" class="txt15">
                    https://buff.ly/2zaSfAQ
                  </a>
                </p>
                <span class="txt16">21 Dec 2017</span>
              </div>
              <div>
                <span class="fs-13 color2 m-r-5">
                <i class="fa-brands fa-twitter"></i>
                </span>
                <a href="#" class="txt15">
                  @colorlib
                </a>
                <p class="txt14 m-b-18">
                  Activello is a good option. It has a slider built into that
                  displays
                  <a href="#" class="txt15">
                    https://buff.ly/2zaSfAQ
                  </a>
                </p>
                <span class="txt16">21 Dec 2017</span>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 p-t-50">
              <h4 class="txt13 m-b-38">Gallery</h4>

              <div class="wrap-gallery-footer flex-w">
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-01.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-02.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-03.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-04.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-05.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-06.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-07.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-08.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-09.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-10.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-11.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
                <a
                  class="item-gallery-footer wrap-pic-w"
                  href="images/photo-gallery-12.jpg"
                  data-lightbox="gallery-footer"
                >
                  <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom  ">
        <div className="container py-4   d-flex justify-content-between">
          <div className="header__right d-flex   ">
            <Link>
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="footer_bottom_right d-flex">
            <Link>@ 2017 Colorlib. Get The Theme</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
