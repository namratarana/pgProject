import React from "react"
import Link from "next/link"
import Head from "next/head"

import Footer from "../../components/Footer"
import {useEffect} from 'react';
import Header2 from "../../components/header2";
import Body2 from "../../components/body2";
import FooterComponent from "../../components/footer.js";


function LandingPage()
{
        useEffect(() => 
        {
            localStorage.removeItem('recommendedResults') 
            localStorage.removeItem('answerChosen');   
        }, [])
        return (
            
            <div className="main">
                <Header2/>
                <Body2/>
                <FooterComponent/>
            </div>
            
        )
    }

export default LandingPage;