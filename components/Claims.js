import React, { useState } from "react";
import Claims from '../data/Claims.json';

export async function getStaticProps(context) {
    return {
        props: {
        }, // will be passed to the page component as props
    }
}


export default function ClaimsTable(props) {
    
    return (
        <div>
            <div className="mobileFlex">
                <div className="container moreRecommText">
                    Claims
                </div>
                <div className="yellowAccent mb2"></div>

                <div className="claimsCard container mb-2">
                    <div className="claimsContainer">
                        { Claims.ClaimsList.map((q, i) => {
                            return <div key={i} className="claimsLi">
                                <div className="me-2">{ i + 1 }.</div>
                                <div className="me-2 ">{ q } </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
