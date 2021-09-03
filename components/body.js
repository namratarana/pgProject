import React from 'react'
// import Rec1 from '/static/Rectangle1.png'
import Image from 'next/image';

function Body() {
    return (
        <div>
            <section className="upper-body position-relative "> 
                <div className="row">
                    <div className="col-md-6 back-img1"/>
                    <div className="col-md-6 back-img2"/>
                </div>

                <div className="row">
                    <div className="col-md-6 back-img3"/>
                    <div className="col-md-6 back-img4"/>
                </div>

                <div className="position-absolute image-text d-flex flex-column align-items-center justify-content-center">
                    <h3>
                        Personalized Cleaning 
                    </h3>
                    <h3>
                        Recommendations for your Business
                    </h3>
                    <div style={{width:'40vw',height:'4px',backgroundColor:'yellow'}}>
                        
                        <hr/>
                    </div>
                
                </div>
            </section>

            <section className="lower-body">
                <h3 className="lower-body-title">
                    Inside the SmartAssist
                </h3>
                <div className="container ">
                    <div className="row justify-content-center">

{/* card1 */}
                        <div className="col-md-4 col-12 d-flex justify-content-center ">
                        <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'90%',height:'15rem'}}>
                            <div class="text-center fs-4 fw-bold pt-2">What is it?</div>
                            <div class="card-body">
                                <p>The SmartAssist is a virtual advisor that works with you and your business to provide cleaning recommendations, resources, and suggested products for your business. </p>
                            </div>
                            <div className="card-button d-flex justify-content-between">
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill w-50 ">Learn More</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightbulb-fill me-4" viewBox="0 0 16 16">
                                     <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                            </div>
                        </div>

{/* card2 */}
                        <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div class="card mb-3 card-style card-col2" style={{maxWidth:'90%',height:'15rem'}}>
                            <div class="text-center fs-4 fw-bold pt-2">How does it work?</div>
                            <div class="card-body">
                                <p><b>Tell the SmartAssist about you and your business. Just a couple questions to understand your cleaning jobs.</b> </p>
                            </div>
                            <div className="card-button d-flex justify-content-between">
                                <button type="button" class="btn btn-outline-dark btn-sm rounded-pill w-50 ">Find Out How</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-dots-fill me-4" viewBox="0 0 16 16">
                                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </div>
                            </div>
                        </div>
                        
{/* card3 */}
                        <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div class="card text-white mb-3 card-style card-col3" style={{maxWidth:'90%', height:'15rem'}}>
                        <div class="text-center fs-4 fw-bold pt-2 ">Why should I use it?</div>
                            <div class="card-body">
                                <p>The recommendations and resources in the SmartAssist have been created by the experts at P&G Professional to help support you and your business is achieving your most confident clean. </p>
                            </div>
                            
                            <div className="card-button d-flex justify-content-between">
                                <button type="button " class="btn btn-outline-light btn-sm rounded-pill w-50">Our Goals</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard me-4" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex align-content-center mt-5">
                        <button type="button" class="btn rounded-pill start-button">Get Started</button>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Body
