import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <section className="welcome bg1-pattern">
      <div className="container d-flex flex-wrap  ">
        <div className="col-md-6 col-sm-12 py-5 justify-content-center align-items-center  d-flex flex-column    ">
          <span class="tit2 t-center">Italian Restaurant</span>
          <h3 class="tit3 ">Welcome</h3>
          <p class="t-center mb-3 size3 mx-auto">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 ">
          <div class="wrap-pic-welcome">
            <img
              src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
              alt="IMG-OUR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
