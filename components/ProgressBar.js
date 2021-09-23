import zIndex from "@material-ui/core/styles/zIndex";
import React, {useState} from "react"
import Questions from "../data/Questions.json"


export async function getStaticProps(context) {
    return {
    props: {currentQuestionIndex:0, SubAnswers:"", SubSubAnswers:"", buttonIndex:0}
    }
   }



const Progress = (props) => {

    // const [totalQues, settotalQues] = useState(Questions.Data.Questions.length);
        // let totalQues = Questions.Data.Questions.length;
        let percent;
        switch(props.data)
        {
            case 0:
                console.log("progress check*****:",props.data);

                percent=11;
                if (props.SubSubAnswers !== "" && props.SubAnswers !== "") 
                {
                    percent=33;   
                }
                else 
                {
                    if (props.SubSubAnswers === "" && props.SubAnswers !== "") 
                    {   
                            
                        percent=22;
                    }
                    
                }
                break;
            case 1:
                percent=44;
                break;
            case 2:
                percent=56;
                break;
            case 3:
                percent=67;
                break;
            case 4:
                percent=78;
                break;
            case 5:
                percent=89;
                break;
                    
        }
        
        // let percent = Math.ceil((props.buttonIndex/totalQues)*100);
        console.log("props.buttonIndex%%%%%",percent);
        // console.log("totalQ",totalQues, props.buttonIndex);


    return(
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
            <div class="progress  prog1" style={{height:"20px",marginBottom:"-7px", marginLeft:"-3.5px" }}>
                
                <div class="progress-bar prog1" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax={"100"}></div>
                {/* 20 */}
                <div>{percent}%</div>
            </div>
            <div class="progress prog1" style={{height:"20px", marginBottom:"-7px", marginLeft:"-3.5px"}}>
                
                <div class="progress-bar prog1" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax={"100"}></div>
                {/* 20 */}
                <div>|</div>
            </div>
            <div class="progress ">
                
                <div class="progress-bar" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax={"100"}></div>
            </div>
        </div>
    )
}

export default Progress;