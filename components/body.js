import React from 'react'


function Body() {
    return (
        <div>
            <section className="upper-body vh-100"> 
                
            </section>

            <section className="lower-body">
                <h3 className="text-center">
                    Inside the Smart Assist
                </h3>
                <div className="container ">
                    <div className="row justify-content-center">

                        <div className="col-md-4 col-12 d-flex justify-content-center ">
                        <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'90%',height:'15rem'}}>
                            <div class="card-header text-center fs-4">What is it?</div>
                            <div class="card-body">
                                <p>The SmartAssist is a virtual advisor that works with you and your business to provide cleaning recommendations, resources, and suggested products for your business. </p>
                            </div>
                            <div className="card-button">
                                <button type="button" class="btn btn-outline-light btn-sm rounded-pill w-50">Learn More</button>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div class="card mb-3 card-style card-col2" style={{maxWidth:'90%',height:'15rem'}}>
                            <div class="card-header text-center fs-4 fw-bold">How does it work?</div>
                            <div class="card-body">
                                <p><b>Tell the SmartAssist about you and your business. Just a couple questions to understand your cleaning jobs.</b> </p>
                            </div>
                            <div className="card-button">
                                <button type="button" class="btn btn-outline-dark btn-sm rounded-pill w-50">Find Out How</button>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 col-12 d-flex justify-content-center">
                        <div class="card text-white mb-3 card-style card-col3" style={{maxWidth:'90%', height:'15rem'}}>
                        <div class="card-header text-center fs-4 ">Why should I use it?</div>
                            <div class="card-body">
                                <p>The recommendations and resources in the SmartAssist have been created by the experts at P&G Professional to help support you and your business is achieving your most confident clean. </p>
                            </div>
                            
                            <div className="card-button d-flex justify-content-between">
                                <button type="button " class="btn btn-outline-light btn-sm rounded-pill w-50">Our Goals</button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Body
