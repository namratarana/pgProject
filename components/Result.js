import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Frame from 'react-frame-component';
import parse from 'html-react-parser';
import { connect } from 'react-redux';

import {setAnswersChosen, setProductResult, setSubAnswerChosen} from '../action/nextPageAction'

import Header2 from "./header2";

export default function Result(props) {
    // let uniqValues = [...new Set(props.productResult)]
    // console.log("uniqValues:---", uniqValues)
    // console.log(props)

    const tens = (val) => {

        if(val.length > 1){
        let end = val.length - 1;
        let start = 0;
        val.splice(end, start, 'and');
        }
        
        let data = []
        for (var i = 0; i < val.length; i++) {
            let x = val[i].toLowerCase()
            data.push(" " + x)
            
        }
        return data
    }
    const [validEmailMessage, setValidEmailMessage] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [validEmail, setValidEmail] = useState(false);

   

    const formRef = useCallback(node => {
        // console.log({ node });
        if (node !== null) {
          node.addEventListener('submit', () => setEmailSubmitted(true));
        }
      }, []);

    return (

        <><div>
           <div class="row px-3 py-5">
  <div class="col-lg-5 col-12 offset-lg-1 order-2 order-lg-1">
    <div class="card">
      <div class="card-body">
      <h3><b>Where should we send your results?</b>
                            </h3>
                            

                            <div  className='emailContent' >
                            <p> Your email address</p>

              {validEmailMessage && (
                <div className='email-error'>{validEmailMessage}</div>
              )}
              <input
                name='email'
                type='text'
                className='emailInput mb-3'
                value={emailAddress}
                onChange={e => setEmailAddress(e.target.value)}
                placeholder=''
                aria-label='Email Address'
                aria-describedby='basic-addon2'
                // disabled={emailSubmitted}
              />
              
                </div>
                
                <a href="#" class="btn btn-primary but">Get My Results</a>
                <p className="justify-content-center"> By proceeding, I agree to emails from SmartAssist and other trusted P&G brands and programs. Click to read P&G Terms and Conditions and P&G Privacy Policy  
                    </p>

        
        
                           <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="text-center">
                            <p className="custom-card-title1 d-lg-none d-block fw-bold">
                               Your Business Needs
                            </p>
                            <div className="d-block d-lg-none px-5 pt-2">
                                <p style={{backgroundColor:"#FED103", height:"3.5px"}}/>
                            </div>
                        </div>

                       
                    </div>

      </div>
    </div>
  </div>
  <div class="col ">
  <div class="col-lg- col-12 offset-lg-1 order-2 order-lg-1">
    <div class="card">
      <div class="card-body">

      <p className="custom-card-title1 d-lg-block d-none">
                               Your Business Profile
                            </p>
                            {/* yellow horizontal line */}
                            <div className="d-lg-block d-none">
                                <p className="yellow-line1" style={{backgroundColor:"#FED103",width:"37%", height:"3px"}}/>
                            </div>

                             {/* Card list points */}
                             <div className="custom-bullets1">
                               
                               <div>
                                   <ul>
                                   <li className="custom-card-lists1 text-start">
                                           You are a {props.BS!==undefined?props.BS:''} {" "} sized business in the {props.BT!==undefined?props.BT:''} industry.  </li> </ul>
                                   
                                           <ul>  <li className="custom-card-lists1 text-start">
                                           There are several important needs when buying products.                                    
                                       </li> </ul>
                                       <ul>  <li className=" custom-card-lists1 text-start">
                                           You want cleaning to be done as easy as possible and to clean multiple areas.
                                       </li> </ul>
                                     <ul>  <li className=" custom-card-lists1 text-start">
                                           A key challenge you encounter is {" "}
                    {props.Tens === undefined
                        ? " "
                        : tens(props.Tens).toString().replace('and,', 'and')}.
                                       </li>
                                   </ul>
                               </div>
                           </div>
</div>
     
      </div>
    </div>
  </div>
</div>


        </div><div className="container">
                <div className="row mt-3">
                    <h2 className="resultHeadPage">Your Custom Kit</h2>

                </div>
                <div className="row mt-3"> <p className="resultPara"> <i> (7)Products to Meet your Business Needs</i></p> </div>
              


                <div className="row mt-3">
                    <div>
                        {/*{uniqValues.map((x) => (
<div className="row mt-2">{x}</div>
))}*/}
                       
                    </div>
                </div>
            </div></>
    )
}


