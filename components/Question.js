import React from "react";

export default function Question(props) {
  return (
    <div className="col-md-7 col-md-offset-3">
      <p className="question" >{props.questionText}</p>
    </div>
  );
}
