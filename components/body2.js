import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Body2() {

    const myLoader = ({src})=>
    {
        return `/Images/${src}`;
    }
    return (
        <div>
           
          
           <section className="position-relative">
                <div className="row g-0 row-cols-lg-2 row-cols-1" style={{}}>
                    <div className="col" style={{marginBottom:"-10px"}}>
                        <img src="https://res.cloudinary.com/mtree/image/upload/v1632299307/PGPro_US/CroppedImages/image1--1---1-.jpg" width='1280px' height='720px'/>
                    </div>
                    <div className="col d-lg-block d-none" style={{marginBottom:"-10px"}}>
                        <Image src={`Image2.jpg`} priority={true} width='1280x' height='720px'loader={myLoader}/>
                    </div>
                
                    <div className="col  d-lg-block d-none" style={{marginBottom:"-10px"}}>
                        <Image src={`Image3.jpg`} priority={true} width='1280x' height='720px'loader={myLoader}/>   
                    </div>
                    <div className="col" style={{marginBottom:"-7px"}}>
                        <Image src={`Image4.jpg`} priority={true} width='1280x' height='720px' loader={myLoader}/>
                    </div>
                </div>


                <div className="home-image-text">
                <div className="d-flex justify-content-center h-100 align-items-center ">
                    <div class="card custom-card px-4 py-3" >
                        <div class="card-body">
                            <p className="custom-card-title text-center">
                                Personalized Cleaning 
                                <br/>
                                Recommendations for Your Business
                            </p>
                          
                            <div className="d-lg-block d-none">
                                <p style={{backgroundColor:"#FED103", height:"3.5px"}}/>
                            </div>
                            
                            <div className="custom-bullets">
                                <p className="fw-bold custom-card-head">
                                    Answer a few questions to receive:
                                </p>

                           
                                <ul>
                                    <li className="custom-card-lists text-start">
                                        personalized product recommendations                                     
                                    </li>
                                    <li className=" custom-card-lists text-start">
                                        exclusive discounts
                                    </li>
                                    <li className=" custom-card-lists text-start">
                                        cleaning resources
                                    </li>
                                </ul>
                            </div>
                    
                            <div className="text-center">
                                <Link href="/PGPro-SmartAssist-Quiz" >
                                    <button type="button" class="btn rounded-pill start-button event_button_click" data-action-detail="get-started-button">Get Started</button>
                                </Link>  
                            </div>

                            <div className="d-none d-lg-block">
                                <div className="row justify-content-center">
                                    <div className="text-center disclaimer" style={{fontSize:'xx-small', width:'30rem'}}>
                                        <b>
                                         By answering this questionnaire, I agree that my data may be used for marketing purposes by P&G Professional and other trusted<a href="https://us.pg.com/brands/"><u> P&G brands and programs</u></a>. Click to read <a href="https://termsandconditions.pg.com/en-us/"><u>P&G Terms and Conditions</u></a> and <a href="https://privacypolicy.pg.com/en/"><u>Privacy Policy</u></a>.
                                        </b>
                                    </div>  
                                </div>
                            </div>

                            <div className="row justify-content-center mt-2">
                                <p className="fst-italic text-center custom-card-footer">
                                    Join <i className="fw-bold fst-italic ">2000+ Business Owners </i> who benefitted from SmartAssist!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        
            </section>

            

            <section>
                <p className="lower-body-title fw-bold">
                    Inside the SmartAssist
                </p>
                <div className="d-flex justify-content-center  d-block d-lg-none">
                    <div className="w-75 lower-body-ruler" style={{marginTop:'-10px', height:'2px',backgroundColor:'#FED103'}}>
                        
                    </div>
                </div>
                <div className="container ">
                    <div className="d-none d-lg-block">
                        <div className="row justify-content-center ">

    {/* card1 */}
                            <div className="col-md-4 col-12 d-flex justify-content-center ">
                                <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'100%',height:'13rem'}}>

                                    <div className=" pt-3 d-flex justify-content-left">
                                        <svg  className =" ms-1 me-3" width="38" height="38" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8855 19.2332C9.98489 19.662 9.36269 20.5657 9.36269 21.6089C9.36269 22.7591 10.1204 23.7391 11.1737 24.0995V25.3106C11.1737 26.7935 12.407 28 13.9228 28H17.6085C19.1256 28 20.3599 26.7935 20.3599 25.3106V24.0995C21.4132 23.7391 22.171 22.759 22.171 21.6089C22.171 20.5657 21.5488 19.6619 20.6481 19.2332C21.0124 17.9103 21.7509 16.9254 22.5276 15.8922C23.7224 14.3028 25.0767 12.5014 25.0738 9.32823C25.0738 9.04493 25.0618 8.75415 25.0381 8.46393C25.0017 8.01622 24.6018 7.68323 24.1428 7.71779C23.7466 7.74861 23.4374 8.046 23.3848 8.41557C23.3766 8.47317 23.3746 8.53253 23.3795 8.5929C23.3997 8.84034 23.4099 9.0877 23.4099 9.32888C23.4123 11.9687 22.3313 13.4067 21.1867 14.9292C20.3183 16.0844 19.4245 17.2753 18.9986 18.9678H12.5347C12.1088 17.2754 11.2148 16.0847 10.3462 14.9295C9.20129 13.407 8.11994 11.969 8.12352 9.32912C8.12718 6.51426 9.36102 4.73656 10.3955 3.74094C11.82 2.36998 13.7711 1.59944 15.7549 1.62677C15.7629 1.62685 15.7708 1.62685 15.7788 1.62677C17.3952 1.60278 19.0163 2.11774 20.3397 3.07408C20.7304 3.33081 21.2301 3.26468 21.5033 2.90365C21.7284 2.60602 21.7149 2.2078 21.4964 1.92752C21.4498 1.86773 21.3938 1.81331 21.3289 1.76638C19.7175 0.602121 17.7427 -0.0242452 15.7667 0.000718386C13.3466 -0.0281483 10.9647 0.911116 9.22825 2.58246C7.42062 4.32226 6.46331 6.65461 6.45982 9.32725C6.45549 12.5017 7.81038 14.3034 9.0057 15.8929C9.78248 16.9259 10.5212 17.9107 10.8855 19.2332ZM18.6962 25.3107C18.6962 25.8969 18.2083 26.3738 17.6086 26.3738H13.9228C13.3244 26.3738 12.8377 25.8969 12.8377 25.3107V24.2477H18.6962V25.3107ZM12.0646 20.5943H19.4691C20.0415 20.5943 20.5072 21.0495 20.5072 21.6089C20.5072 22.1671 20.0416 22.6213 19.4691 22.6213H12.0646C11.4923 22.6213 11.0266 22.1671 11.0266 21.6089C11.0266 21.0495 11.4923 20.5943 12.0646 20.5943Z" fill="white"/>
                                            <path d="M24.1428 7.71779C24.6018 7.68323 25.0017 8.01622 25.0381 8.46393C24.9919 6.19603 23.0022 3.07408 21.4964 1.92752C21.7149 2.2078 21.7284 2.60602 21.5033 2.90365C21.2301 3.26468 20.7304 3.33081 20.3397 3.07408C21.3735 4.04777 23.0022 5.55134 23.3848 8.41557C23.4374 8.046 23.7466 7.74861 24.1428 7.71779Z" fill="white"/>
                                            <path d="M31.1681 9.25879H27.789C27.3295 9.25879 26.957 9.62283 26.957 10.0719C26.957 10.521 27.3295 10.8851 27.789 10.8851H31.1681C31.6276 10.8851 32 10.521 32 10.0719C32 9.62283 31.6276 9.25879 31.1681 9.25879Z" fill="white"/>
                                            <path d="M26.3909 4.02095C26.5503 4.02095 26.7114 3.97623 26.8537 3.88288L29.6575 2.04354C30.039 1.79326 30.1407 1.28813 29.8846 0.915223C29.6286 0.542396 29.1118 0.442948 28.7302 0.693234L25.9264 2.53257C25.5449 2.78286 25.4432 3.28806 25.6993 3.66089C25.86 3.89467 26.1229 4.02095 26.3909 4.02095Z" fill="white"/>
                                            <path d="M29.6586 18.1L26.8548 16.2606C26.4733 16.0103 25.9564 16.1098 25.7004 16.4826C25.4443 16.8554 25.5461 17.3606 25.9275 17.6109L28.7313 19.4503C28.8735 19.5436 29.0347 19.5883 29.1941 19.5883C29.4621 19.5883 29.7251 19.462 29.8857 19.2283C30.1417 18.8554 30.0401 18.3502 29.6586 18.1Z" fill="white"/>
                                            <path d="M0.831934 10.8846H4.20875C4.66823 10.8846 5.04069 10.5205 5.04069 10.0714C5.04069 9.62235 4.66823 9.2583 4.20875 9.2583H0.831934C0.372457 9.2583 0 9.62235 0 10.0714C0 10.5205 0.372457 10.8846 0.831934 10.8846Z" fill="white"/>
                                            <path d="M2.34159 2.04354L5.14538 3.88288C5.28764 3.97623 5.44879 4.02095 5.60818 4.02095C5.87615 4.02095 6.13921 3.89467 6.29977 3.66089C6.55584 3.28806 6.4541 2.78286 6.07265 2.53257L3.26887 0.693234C2.88734 0.442948 2.37055 0.542396 2.11448 0.915223C1.85841 1.28805 1.96007 1.79326 2.34159 2.04354Z" fill="white"/>
                                            <path d="M5.1465 16.2606L2.34272 18.1C1.9612 18.3502 1.85954 18.8554 2.1156 19.2283C2.27617 19.462 2.53914 19.5883 2.80719 19.5883C2.96659 19.5883 3.12773 19.5436 3.27 19.4503L6.07378 17.6109C6.4553 17.3606 6.55696 16.8554 6.3009 16.4826C6.04483 16.1098 5.52795 16.0103 5.1465 16.2606Z" fill="white"/>
                                            <path d="M15.9027 16.6541C16.53 16.6541 17.0386 16.157 17.0386 15.5439C17.0386 14.9307 16.53 14.4336 15.9027 14.4336C15.2753 14.4336 14.7668 14.9307 14.7668 15.5439C14.7668 16.157 15.2753 16.6541 15.9027 16.6541Z" fill="white"/>
                                            <path d="M15.9027 4.99561C14.0237 4.99561 12.495 6.51352 12.495 8.37928C12.495 8.84648 12.8764 9.2252 13.3469 9.2252C13.8174 9.2252 14.1988 8.84648 14.1988 8.37928C14.1988 7.4464 14.9632 6.68744 15.9027 6.68744C16.8423 6.68744 17.6066 7.4464 17.6066 8.37928C17.6066 9.31216 16.8423 10.0711 15.9027 10.0711C15.4322 10.0711 15.0508 10.4498 15.0508 10.917V13.0318C15.0508 13.499 15.4322 13.8778 15.9027 13.8778C16.3733 13.8778 16.7547 13.499 16.7547 13.0318V11.6559C18.2228 11.2793 19.3105 9.95307 19.3105 8.37928C19.3105 6.51352 17.7818 4.99561 15.9027 4.99561Z" fill="white"/>
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
                                        <svg className =" ms-1 me-3 " width="45" height="45" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.13229 30.1048C4.95396 30.1048 4.78294 30.0401 4.65685 29.9249C4.53075 29.8098 4.45991 29.6536 4.45991 29.4907V24.3594H3.71558C2.7316 24.3592 1.78785 24.0027 1.09131 23.368C0.394777 22.7333 0.0023144 21.8722 0 20.9737V3.39307C0.00106787 2.49347 0.392873 1.631 1.08945 0.994885C1.78602 0.358772 2.73048 0.000975176 3.71558 0H33.4819C34.4669 0.00113766 35.4112 0.359006 36.1076 0.995101C36.8041 1.6312 37.1958 2.49358 37.1968 3.39307V20.9737C37.1945 21.8722 36.8021 22.7333 36.1055 23.368C35.409 24.0027 34.4652 24.3592 33.4813 24.3594H16.6045L5.46041 30.0268C5.36013 30.0779 5.24716 30.1048 5.13229 30.1048ZM3.71558 1.22804C3.08702 1.22869 2.48441 1.457 2.03995 1.86288C1.59549 2.26876 1.34548 2.81907 1.34476 3.39307V20.9737C1.34672 21.5466 1.59739 22.0955 2.04181 22.5C2.48623 22.9045 3.08814 23.1315 3.71558 23.1313H5.13229C5.31062 23.1313 5.48164 23.196 5.60774 23.3112C5.73383 23.4263 5.80467 23.5825 5.80467 23.7454V28.4463L16.1056 23.2087C16.2055 23.158 16.318 23.1313 16.4323 23.1313H33.4819C34.1092 23.1313 34.711 22.9042 35.1553 22.4998C35.5995 22.0953 35.8501 21.5465 35.8521 20.9737V3.39307C35.8514 2.81907 35.6013 2.26876 35.1569 1.86288C34.7124 1.457 34.1098 1.22869 33.4813 1.22804H3.71558Z" fill="#231F20"/>
                                            <path d="M31.5288 7.37706H5.51961C5.33445 7.37706 5.15688 7.30562 5.02595 7.17847C4.89503 7.05131 4.82147 6.87885 4.82147 6.69903C4.82147 6.5192 4.89503 6.34674 5.02595 6.21959C5.15688 6.09243 5.33445 6.021 5.51961 6.021H31.5288C31.7139 6.021 31.8915 6.09243 32.0224 6.21959C32.1534 6.34674 32.2269 6.5192 32.2269 6.69903C32.2269 6.87885 32.1534 7.05131 32.0224 7.17847C31.8915 7.30562 31.7139 7.37706 31.5288 7.37706Z" fill="#231F20"/>
                                            <path d="M31.6974 11.2843H5.68825C5.50309 11.2843 5.32552 11.2129 5.19459 11.0857C5.06367 10.9585 4.99011 10.7861 4.99011 10.6063C4.99011 10.4264 5.06367 10.254 5.19459 10.1268C5.32552 9.99966 5.50309 9.92822 5.68825 9.92822H31.6974C31.8826 9.92822 32.0602 9.99966 32.1911 10.1268C32.322 10.254 32.3956 10.4264 32.3956 10.6063C32.3956 10.7861 32.322 10.9585 32.1911 11.0857C32.0602 11.2129 31.8826 11.2843 31.6974 11.2843Z" fill="#231F20"/>
                                            <path d="M31.6974 15.2984H5.68825C5.50309 15.2984 5.32552 15.227 5.19459 15.0999C5.06367 14.9727 4.99011 14.8002 4.99011 14.6204C4.99011 14.4406 5.06367 14.2681 5.19459 14.141C5.32552 14.0138 5.50309 13.9424 5.68825 13.9424H31.6974C31.8826 13.9424 32.0602 14.0138 32.1911 14.141C32.322 14.2681 32.3956 14.4406 32.3956 14.6204C32.3956 14.8002 32.322 14.9727 32.1911 15.0999C32.0602 15.227 31.8826 15.2984 31.6974 15.2984Z" fill="#231F20"/>
                                            <path d="M31.5528 19.3121H16.0206C15.8355 19.3121 15.6579 19.2407 15.527 19.1135C15.3961 18.9864 15.3225 18.8139 15.3225 18.6341C15.3225 18.4543 15.3961 18.2818 15.527 18.1546C15.6579 18.0275 15.8355 17.9561 16.0206 17.9561H31.5528C31.738 17.9561 31.9156 18.0275 32.0465 18.1546C32.1774 18.2818 32.251 18.4543 32.251 18.6341C32.251 18.8139 32.1774 18.9864 32.0465 19.1135C31.9156 19.2407 31.738 19.3121 31.5528 19.3121Z" fill="#231F20"/>
                                            <path d="M44.2432 35.1037C44.1242 35.1036 44.0072 35.074 43.9032 35.0176L36.3229 30.9189H24.8301C24.0922 30.9193 23.3843 30.6353 22.8617 30.1294C22.3391 29.6235 22.0445 28.9369 22.0424 28.2203V23.908C22.0424 23.7282 22.116 23.5557 22.2469 23.4286C22.3778 23.3014 22.5554 23.23 22.7406 23.23C22.9257 23.23 23.1033 23.3014 23.2342 23.4286C23.3651 23.5557 23.4387 23.7282 23.4387 23.908V28.2203C23.4404 28.5774 23.5878 28.9193 23.8486 29.1709C24.1094 29.4226 24.4624 29.5635 24.8301 29.5628H36.5044C36.6234 29.5629 36.7404 29.5925 36.8444 29.6489L43.5465 33.2723V30.2409C43.5465 30.061 43.6201 29.8886 43.751 29.7614C43.8819 29.6343 44.0595 29.5628 44.2446 29.5628H45.222C45.5886 29.5625 45.94 29.4209 46.1993 29.1693C46.4586 28.9176 46.6045 28.5763 46.605 28.2203V15.4183C46.6058 15.0609 46.4604 14.7178 46.2008 14.4644C45.9412 14.211 45.5887 14.0681 45.2206 14.067H37.0524C36.8673 14.067 36.6897 13.9956 36.5587 13.8684C36.4278 13.7413 36.3543 13.5688 36.3543 13.389C36.3543 13.2091 36.4278 13.0367 36.5587 12.9095C36.6897 12.7824 36.8673 12.7109 37.0524 12.7109H45.2206C45.9586 12.7127 46.6657 12.9988 47.1868 13.5064C47.7079 14.014 48.0003 14.7016 47.9999 15.4183V28.2196C47.9992 28.9353 47.7061 29.6214 47.1851 30.1275C46.664 30.6336 45.9575 30.9182 45.2206 30.9189H44.9414V34.4264C44.9414 34.6062 44.8678 34.7787 44.7369 34.9058C44.606 35.033 44.4284 35.1044 44.2432 35.1044V35.1037Z" fill="#231F20"/>
                                        </svg>
                                        <h5 className="pt-2 fw-bold">How does it work?</h5>

                                    </div>
                                    <div class="card-body fw-bold">
                                        Tell us about you and your business. Get personalized products. Explore these recommendations, why they were chosen for you, & purchase products.
                                    </div>
                                    
                                </div>
                            </div>
    
    {/* card3 */}
                            < div className="col-md-4 col-12 d-flex justify-content-center ">
                                <div class="card text-white mb-3 card-style card-col1" style={{maxWidth:'100%',height:'13rem'}}>

                                    <div className=" pt-3 d-flex justify-content-left">
                                        <svg className =" ms-1 me-3" width="32" height="40" viewBox="0 0 33 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8469 19.638H5.99037C5.65202 19.6376 5.32762 19.5047 5.08837 19.2682C4.84913 19.0318 4.71457 18.7112 4.71423 18.3768V13.5771C4.71457 13.2427 4.84913 12.9221 5.08837 12.6857C5.32762 12.4492 5.65202 12.3162 5.99037 12.3159H10.8469C11.1851 12.3164 11.5094 12.4495 11.7485 12.6859C11.9876 12.9223 12.1221 13.2428 12.1224 13.5771V18.3768C12.1221 18.7111 11.9876 19.0316 11.7485 19.268C11.5094 19.5044 11.1851 19.6375 10.8469 19.638ZM5.99037 13.5696L5.98275 13.5771V18.3768L10.8469 18.3843L10.8539 13.5771L5.99037 13.5696Z" fill="white"/>
                                            <path d="M10.8469 29.6223H5.99037C5.65208 29.6222 5.32768 29.4893 5.08841 29.253C4.84915 29.0166 4.71457 28.696 4.71423 28.3617V23.561C4.71457 23.2266 4.84915 22.906 5.08841 22.6697C5.32768 22.4333 5.65208 22.3005 5.99037 22.3003H10.8469C11.1851 22.3006 11.5093 22.4336 11.7484 22.6699C11.9876 22.9063 12.1221 23.2267 12.1224 23.561V28.3617C12.1221 28.6959 11.9876 29.0164 11.7484 29.2527C11.5093 29.4891 11.1851 29.622 10.8469 29.6223ZM5.99037 23.5541L5.98275 23.561V28.3617L10.8469 28.3686L10.8539 23.561L5.99037 23.5541Z" fill="white"/>
                                            <path d="M10.8469 38.9416H5.99037C5.65202 38.9413 5.32762 38.8204 5.08837 38.6054C4.84913 38.3905 4.71457 38.099 4.71423 37.795V33.4317C4.71457 33.1277 4.84913 32.8363 5.08837 32.6213C5.32762 32.4064 5.65202 32.2855 5.99037 32.2852H10.8469C11.1851 32.2856 11.5094 32.4066 11.7485 32.6215C11.9876 32.8364 12.1221 33.1278 12.1224 33.4317V37.795C12.1221 38.0989 11.9876 38.3903 11.7485 38.6052C11.5094 38.8202 11.1851 38.9411 10.8469 38.9416ZM5.99037 33.4249L5.98275 33.4317V37.795L10.8469 37.8019L10.8539 33.4317L5.99037 33.4249Z" fill="white"/>
                                            <path d="M26.3666 34.282H16.0626C15.9107 34.282 15.7651 34.2118 15.6578 34.087C15.5504 33.9622 15.4901 33.7929 15.4901 33.6163C15.4901 33.4398 15.5504 33.2705 15.6578 33.1456C15.7651 33.0208 15.9107 32.9507 16.0626 32.9507H26.3666C26.5185 32.9507 26.6641 33.0208 26.7714 33.1456C26.8788 33.2705 26.9391 33.4398 26.9391 33.6163C26.9391 33.7929 26.8788 33.9622 26.7714 34.087C26.6641 34.2118 26.5185 34.282 26.3666 34.282Z" fill="white"/>
                                            <path d="M23.681 38.0104H16.1727C15.9917 38.0104 15.818 37.9393 15.69 37.8128C15.562 37.6863 15.4901 37.5147 15.4901 37.3358C15.4901 37.1568 15.562 36.9852 15.69 36.8587C15.818 36.7322 15.9917 36.6611 16.1727 36.6611H23.681C23.862 36.6611 24.0356 36.7322 24.1636 36.8587C24.2916 36.9852 24.3635 37.1568 24.3635 37.3358C24.3635 37.5147 24.2916 37.6863 24.1636 37.8128C24.0356 37.9393 23.862 38.0104 23.681 38.0104Z" fill="white"/>
                                            <path d="M26.3666 24.9631H16.0626C15.9107 24.9631 15.7651 24.893 15.6578 24.7682C15.5504 24.6433 15.4901 24.474 15.4901 24.2975C15.4901 24.1209 15.5504 23.9516 15.6578 23.8268C15.7651 23.702 15.9107 23.6318 16.0626 23.6318H26.3666C26.5185 23.6318 26.6641 23.702 26.7714 23.8268C26.8788 23.9516 26.9391 24.1209 26.9391 24.2975C26.9391 24.474 26.8788 24.6433 26.7714 24.7682C26.6641 24.893 26.5185 24.9631 26.3666 24.9631Z" fill="white"/>
                                            <path d="M23.681 28.6911H16.1727C15.9917 28.6911 15.818 28.62 15.69 28.4935C15.562 28.367 15.4901 28.1954 15.4901 28.0164C15.4901 27.8375 15.562 27.6659 15.69 27.5394C15.818 27.4129 15.9917 27.3418 16.1727 27.3418H23.681C23.862 27.3418 24.0356 27.4129 24.1636 27.5394C24.2916 27.6659 24.3635 27.8375 24.3635 28.0164C24.3635 28.1954 24.2916 28.367 24.1636 28.4935C24.0356 28.62 23.862 28.6911 23.681 28.6911Z" fill="white"/>
                                            <path d="M26.3666 14.9787H16.0626C15.9107 14.9787 15.7651 14.9086 15.6578 14.7838C15.5504 14.6589 15.4901 14.4896 15.4901 14.3131C15.4901 14.1366 15.5504 13.9673 15.6578 13.8424C15.7651 13.7176 15.9107 13.6475 16.0626 13.6475H26.3666C26.5185 13.6475 26.6641 13.7176 26.7714 13.8424C26.8788 13.9673 26.9391 14.1366 26.9391 14.3131C26.9391 14.4896 26.8788 14.6589 26.7714 14.7838C26.6641 14.9086 26.5185 14.9787 26.3666 14.9787Z" fill="white"/>
                                            <path d="M23.681 18.7067H16.1727C15.9917 18.7067 15.818 18.6356 15.69 18.5091C15.562 18.3826 15.4901 18.211 15.4901 18.0321C15.4901 17.8531 15.562 17.6815 15.69 17.555C15.818 17.4285 15.9917 17.3574 16.1727 17.3574H23.681C23.862 17.3574 24.0356 17.4285 24.1636 17.555C24.2916 17.6815 24.3635 17.8531 24.3635 18.0321C24.3635 18.211 24.2916 18.3826 24.1636 18.5091C24.0356 18.6356 23.862 18.7067 23.681 18.7067Z" fill="white"/>
                                            <rect x="1" y="5.32812" width="31" height="37.9385" rx="1" stroke="white" stroke-width="2"/>
                                            <path d="M16.1633 1C14.2776 1 13.3572 2.33128 13.1327 2.99692H7.4082V7.65641H24.9184V2.99692H18.8572C18.7449 2.33128 18.049 1 16.1633 1Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                        </svg>
                                        <h5 className="pt-2">Why should I use it?</h5>

                                    </div>
                                    <div class="card-body">
                                        {/* <p>The recommendations and resources in the SmartAssist have been created by the experts at P&G Professional to help support you and your business is achieving your most confident clean.</p> */}
                                        Created by the experts at P&G Professional, our recommendations 
                                        help you and your business achieve your most confident clean. 
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
                    {/* mobile devices */}
                    
                <div className="d-block d-lg-none">
                        <div className=" row justify-content-center">
                            <div class="accordion accordion-text" id="accordionExample">
                                <div class="accordion-item vw-100">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <b>What is it?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                                A virtual advisor that works with you 
                                                to provide cleaning recommendations, resources, and suggested products 
                                                for your business. 
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center d-block d-lg-none " style={{width:'100%',height:'2px',backgroundColor:'#003E7E'}}>
                                </div>
                                <div class="accordion-item  vw-100">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>How does it work?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Tell us about you and your business. Get personalized products. Explore these recommendations, why they were chosen for you, & purchase products.
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center d-block d-lg-none " style={{width:'100%',height:'2px',backgroundColor:'#003E7E'}}>
                                </div>
                                <div class="accordion-item  vw-100">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Why should I use it?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Created by the experts at P&G Professional, our recommendations 
                                            help you and your business achieve your most confident clean. 
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center d-block d-lg-none " style={{width:'100%',height:'2px',backgroundColor:'#003E7E'}}></div>
                            </div>
                        </div>
                    </div>

                <div className="container">
                    <h4 className="fw-bold text-center recommedation-text mt-5">
                        Receive Your Product Recommendations Now 
                    </h4>
                    <div className="d-flex justify-content-center mt-3 mb-3 w-100">
                        <Link href="/PGPro-SmartAssist-Quiz" >
                            <button type="button" class="btn rounded-pill fw-bold w-30 footer-start-buttton start-button event_button_click" data-action-detail="get-started-button">Get Started</button>
                        </Link>
                    </div>
                    
                </div>
            
            </section>
        </div>
    )
}

export default Body2
