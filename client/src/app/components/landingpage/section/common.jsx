import React from "react";
import { NavLink } from "react-router-dom";

function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex mt-4 ">
        <div className="container-fluid nav_bg">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> Mandala </strong>
                  </h1>

                  <h2 className="my-3">
                    We created Mandala for anyone who has a hard time to selling
                    their old antique products. We are a team of undergrowing
                    young developers keen to producing peer-to-peer satisfactory
                    market.
                  </h2>

                  <div className="mt-2">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img1">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Common;
