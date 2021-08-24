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
                <div className="container moreRecommText mt-3">
                    Claims
                </div>
                <div className="yellowAccent mb2"></div>

                <div className="claimsCard container mt-2 mb-2">
                    <div className="claimsContainer">
                        { Claims.ClaimsList.map((q, i) => {
                            return <div key={i} className="claimsLi">
                                <div className="mr-2">{ i + 1 }</div>
                                <div className="mr-2">{ q } </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
