import React from "react";
import Link from 'next/link'

function Footer1() {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">

        {/* 3 circles */}
        <div className="text-center mb-2 d-lg-block d-none">
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
      
        {/* 2 business images */}
        <div className="text-center mb-2 d-lg-block d-none">
          <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/5lghEdWm63oI9O5oFSX88E/81f00aaa973994c1230734017fd999e2/bbb.png"
            alt="BBB Accredited Business"
            className="pe-4" height="30"
            />
            <img
            src="https://res.cloudinary.com/mtree/q_auto:eco,f_auto,dpr_auto/PGPro_US/4O9ROWeYkTATgHQxtuIeUl/2fe2e6b248f776268b13b76f2f0d727a/istodio.png"
            alt="iStudio logo" height="33"
            />
        </div>

        {/* 7 items*/}
        <div className="text-center">
          <div class="row text-center">
              <div className="col-lg-auto col-12 seven-items">
                About Us
              </div>
              <div className="col-lg-auto col-12 seven-items">
                Contact Us
              </div>
              <div className="col-lg-auto col-12 seven-items">
                Privacy
              </div>
              <div className="col-lg-auto col-12 seven-items">
                CA Privacy
              </div>
              <div className="col-lg-auto col-12 seven-items">
                Terms & Conditions
              </div>
              <div className="col-lg-auto col-12 seven-items">
                Do Not Sell My Personal Information
              </div>
              <div className="col-lg-auto col-12 seven-items">
                Sitemap
              </div>
          </div>
        </div>

        <div className="custom-center-text" style={{marginTop:"0.5rem"}}>
            <p className="footer-text">Your digital warehouse for images, documents, videos, training and other PGPro resources. 
            <Link href="/PGPro-SmartAssist-Quiz" >
                <a className="start-link"><span className="d-block d-lg-none start-link"><br/></span><b> Get Started</b></a>
            </Link> 
            </p>
        </div>

        <div className="custom-center-text mb-4" style={{marginTop:"-0.9rem"}}>
            <div className="row justify-content-between">
                <div className="col-lg-auto footer-text">
                  For additional information call 1-800-332-7787 Call center hours 24/7,
                  365 days a year.  
                </div>
                <div className="col-lg-auto footer-text fw-bold">
                  ©2020 P&G. All Rights Reserved
                </div>
            </div>
        </div>

        {/* mobile  footer */}

        {/* 3 circles */}
        <div className="text-center mb-2 d-block d-lg-none mt-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-circle me-2"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-circle me-2"
            viewBox="0 0 16 16"
            style={{ color: " #BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
            style={{ color: "#BABABA" }}
            >
            <circle cx="8" cy="8" r="8" />
            </svg>
        </div>

        {/* Horizontal Line */}
        <div className="d-block d-lg-none px-3">
          <p style={{backgroundColor:"black", height:"1px"}}/>
        </div>
       
        {/* 2 business images */}
        <div className="text-center mb-2 d-block d-lg-none">
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
