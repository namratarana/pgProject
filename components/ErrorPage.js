import React from 'react'
import Header from "../components/Header"
import Link from "next/link"
import Footer from "../components/Footer"
import images from "../data/ImageReference.json"

const ErrorPage = (props) => {

    console.log("are u there?")
    if(props.showError === true)
    {
        console.log(true);
        return (
            <div>
                <Header />
                <div className="text-center">
                    <div className="mb-5">
                        <img className="errorImage" src={images['404Image'] }/>
                    </div>
                    <div className="p-1 mt-n3">
                    <p className="text">Oops, there has been an error. Looks like we have some cleaning to do. </p>
                    </div>

                    <div className="mt-5 p-2">
                        <p className="text">
                            Click here to restart the 
                        <Link href="/">
                            <a className="linkText text ml-1" rel="noopener">
                                PGP SmartAssist
                            </a>
                        </Link>
                        </p>
                        <p className="text">
                            Click here to go to 
                        <a className="linkText text ml-1" href="https://pgpro.com/" target="_blank" rel="noopener">
                            PGPro.com
                        </a>
    
                        </p>
                        </div>
                </div>
            <Footer/>
            </div>
        )
    }
    else
    {
        console.log(false);
       return(
           <div></div>
       )
    }
}

export default ErrorPage;