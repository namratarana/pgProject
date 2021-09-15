import React from "react"
import Link from "next/link"

import Footer from "../../components/Footer"
import {useEffect} from 'react';
import Header1 from "../../components/header1";
import Body1 from "../../components/body1";
// import Footer1 from "../../components/footer1";
import FooterComponent from "../../components/Footer";


function LandingPage()
{
        useEffect(() => 
        {
            localStorage.removeItem('recommendedResults') 
            localStorage.removeItem('answerChosen');   
        }, [])
        return (
            <div className="main">
                <Header1/>
                <Body1/>
                <FooterComponent/>
            </div>
        )
       
    }

export default LandingPage;
