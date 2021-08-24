import React from "react"
import Questions from "../data/Questions.json"

export async function getStaticProps(context) {
    return {
    props: {currentQuestionIndex:0, SubAnswers:"", SubSubAnswers:"", buttonIndex:0}
    }
   }

const maxValue = (props, totalQuestions) => {
    if (props.SubSubAnswers !== "" && props.SubAnswers !== "") {
       
        return totalQuestions + 2;
    }
    else {
        if (props.SubSubAnswers === "" && props.SubAnswers !== "") {   
                
            return totalQuestions + 1;
        } else {
           
            return totalQuestions;
        }
    }
}

const Progress = (props) => {

    let totalQuestions = Questions.Data.Questions.length
    
    return(
        <div>
            <progress value={props.buttonIndex} max={maxValue(props, totalQuestions)}></progress>

        </div>
    )
}

export default Progress;