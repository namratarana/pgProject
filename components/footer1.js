import React from "react";
import Link from 'next/link'

function Footer1() {
  return (
    <div className="container mb-5">
      <div className="d-none d-sm-block">
        {/* 3 circles */}
        <div className="mt-4 d-flex justify-content-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-circle me-2"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-circle me-2"
            viewBox="0 0 16 16"
            style={{ color: " #BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
        </div>
        {/* 2 logos */}
        <div className="mt-2">
            <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/5lghEdWm63oI9O5oFSX88E/81f00aaa973994c1230734017fd999e2/bbb.png"
            alt="BBB Accredited Business"
            className="pe-4"
            />
            <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/4O9ROWeYkTATgHQxtuIeUl/2fe2e6b248f776268b13b76f2f0d727a/istodio.png"
            alt="iStudio logo"
            />
        </div>

      </div>

      <div class="row my-2">
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          About Us
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          Contact Us
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          Privacy
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          CA Privacy
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          Terms & Conditions
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          Do Not Sell My Personal Information
        </div>
        <div className="col-md-auto col-12 d-flex justify-content-evenly fw-bold sm-items">
          Sitemap
        </div>
      </div>

      <div className="row text-center text-style">
        <p className="fw-bold">Your digital warehouse for images, documents, videos, training and other
            PGPro resources.
        <Link href="/PGPro-SmartAssist-Quiz" >
            <a className="start-link"><span className="d-block d-sm-none"><br/></span><b>Get Started</b></a>
        </Link> 
        </p>
      </div>

      <div className="row text-style text-center px-3">
        <div className="col-md-auto fw-bold">
          For additional information call 1-800-332-7787 Call center hours 24/7,
          365 days a year.
        </div>
        <div className="col-md-auto fw-bold">©2020 P&G. All Rights Reserved</div>
      </div>

      <div className="d-block d-sm-none ">
        {/* 3 circles */}
        <div className="mt-5 d-flex align-content-center justify-content-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-circle me-3"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-circle me-3"
            viewBox="0 0 16 16"
            style={{ color: " #BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
        </div>
        <div  style={{backgroundColor:"#231F20", fontWeight:500}}>
            <hr/>
        </div>
        {/* 2 logos */}
        <div className="mt-3">
            <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/5lghEdWm63oI9O5oFSX88E/81f00aaa973994c1230734017fd999e2/bbb.png"
            alt="BBB Accredited Business"
            className="pe-4"
            />
            <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/4O9ROWeYkTATgHQxtuIeUl/2fe2e6b248f776268b13b76f2f0d727a/istodio.png"
            alt="iStudio logo"
            />
        </div>

      </div>
    </div>
  );
}

export default Footer1;
