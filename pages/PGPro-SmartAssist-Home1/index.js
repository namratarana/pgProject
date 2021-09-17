import React from "react"
import Link from "next/link"
import {useEffect} from 'react';
import Header1 from "../../components/header1";
import Body1 from "../../components/body1";
import FooterComponent from "../../components/Footer";
import Index from '../index'

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
