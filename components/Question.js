import React from "react";
import Image from 'next/image';

export default function Question(props) {
  const myLoader = ({src})=>
    {
        return `/Images/${src}`;
    }

  return (
    <div className="col-md-7 col-md-offset-3">
      <p className="question" >{props.questionText}
      {console.log(props)}
      {props.index==1?
                      <span className="ps-3">
                        
                        <Image data-bs-toggle="modal" data-bs-target="#exampleModal" src={`i-icon.png`} priority={true} width='20px' height='20px' loader={myLoader} onClick={e=> props.popUp}/>
                        
                      </span>
                      :
                      null}
      </p>
    </div>
  );
}
