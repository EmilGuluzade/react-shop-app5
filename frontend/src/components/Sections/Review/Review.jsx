import React from "react";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container review p-5 ">
      <div className="row justify-content-center">
        <div className="section-heading d-flex flex-column align-items-center   ">
          <span className="tit2 m-auto ">Customer Say</span>
          <h2 className="tit5 m-auto "> Review</h2>
        </div>
      </div>
      <div className="row mt-5 m-auto">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-03.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src="https://preview.colorlib.com/theme/pato/images/avatar-04.jpg" alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;