import React from 'react'
// import Rec1 from '/static/Rectangle1.png'
import Image from 'next/image';

function Body() {
    return (
        <div>
            <section className="upper-body position-relative"> 
                <div className="row">
                    <div className="col-md-6 back-img1"/>
                    <div className="col-md-6 back-img2 d-none d-sm-block"/>
                </div>

                <div className="row ">
                    <div className="col-md-6 back-img3 d-none d-sm-block"/>
                    <div className="col-md-6 back-img4"/>
                </div>

                
                <div className="position-absolute image-text d-flex  align-items-center justify-content-center">
                    <div class="card main-card" style={{width: "30rem" ,height:"25rem"}}>
                        <div class="card-body">
                            <p className="body-card-title text-whites">
                                Personalized Cleaning 
                                <br/>
                                Recommendations for your Business
                            </p>
                            <div className="justify-content-center d-none d-sm-block" style={{width:'35 vw',height:'2px',backgroundColor:'#FED103'}}>
                                <hr/>
                            </div>      

                            <p className="body-card-text d-flex justify-content-center text-whites pt-4">
                                Answer a few questions to receive:
                            </p>

                           <div className="d-flex justify-content-center">
                            <ul className="body-card-text text-whites ">
                                    <li className="text-start fw-bold">
                                        personalized product recommendations                                     
                                    </li>
                                    <li className="text-start fw-bold">
                                        exclusive discounts
                                    </li>
                                    <li className="text-start fw-bold">
                                        cleaning resources
                                    </li>
                                </ul>
                            </div>
                    
                            
                            
                            <button type="button" class="btn btn-outline-dark btn-sm rounded-pill w-60 start-button">Get Started</button>
                        
                            <div className="body-card-text2 d-flex justify-content-center ">
                                <div className="w-60">
                                    <p className="text-whites d-none d-sm-block">
                                        By answering this questionnaire, I confirm that I have read and agree to the P&G Terms and Conditions and P&G Privacy.
                                    </p>
                                </div>
                            </div>
                            <h5 className="body-card-footer text-whites">
                                Join <i className="fw-bold fst-italic ">2000+ Business Owners </i> who benefitted from SmartAssist!
                            </h5>
                        </div>
                    </div>
                </div>
                
            </section>

            

            <section className="lower-body">
                <h3 className="lower-body-title">
                    Inside the SmartAssist
                </h3>
                <div className="container ">
                    <div className="d-none d-sm-block">
                        <div className="row justify-content-center ">

    {/* card1 */}
                            <div className="col-md-4 col-12 d-flex justify-content-center ">
                                <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'100%',height:'13rem'}}>

                                    <div className=" pt-3 d-flex justify-content-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-lightbulb-fill ms-2 me-3" viewBox="0 0 16 16">
                                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        <h5 className="pt-2">What is it?</h5>

                                    </div>
                                    <div class="card-body">
                                        <p>The SmartAssist is a virtual advisor that works with you and your business to provide cleaning recommendations, resources, and suggested products for your business. </p>
                                    </div>
                                    
                                </div>
                            </div>

    {/* card2 */}

                            <div className="col-md-4 col-12 d-flex justify-content-center ">
                                <div class="card card-text-black mb-3 card-style card-col2 " style={{maxWidth:'100%',height:'13rem'}}>

                                    <div className=" pt-3 d-flex justify-content-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-dots-fill ms-2 me-3" viewBox="0 0 16 16">
                                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                        <h5 className="pt-2 fw-bold">How does it work?</h5>

                                    </div>
                                    <div class="card-body fw-bold">
                                        Tell the SmartAssist about you and your business. Just a couple questions to understand your cleaning jobs.
                                    </div>
                                    
                                </div>
                            </div>
    
    {/* card3 */}
                            < div className="col-md-4 col-12 d-flex justify-content-center ">
                                <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'100%',height:'13rem'}}>

                                    <div className=" pt-3 d-flex justify-content-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard ms-2 me-3" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                        </svg>
                                        <h5 className="pt-2">Why should I use it?</h5>

                                    </div>
                                    <div class="card-body">
                                        <p>The recommendations and resources in the SmartAssist have been created by the experts at P&G Professional to help support you and your business is achieving your most confident clean.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
                    {/* mobile devices */}
                    
                <div className="d-block d-sm-none">
                        <div className=" row justify-content-center">
                            <div class="accordion " id="accordionExample">
                                <div class="accordion-item vw-100">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is it?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                                A virtual advisor that works with you 
                                                to provide cleaning recommendations, resources, and suggested products 
                                                for your business. 
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item  vw-100">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does it work?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            In a few questions, we learn about the cleaning jobs of you and your business.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item  vw-100">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Why should I use it?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Created by the experts at P&G Professional, our recommendations 
                                            help you and your business achieve your most confident clean. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="container">
                    <p className="fw-bold mt-3">
                        Receive Your Product Recommendations Now 
                    </p>
                    <div className="d-flex justify-content-center mt-3 w-40">
                        <button type="button" class="btn rounded-pill start-button">Get Started</button>
                    </div>
                </div>
            
            </section>
        </div>
    )
}

export default Body
