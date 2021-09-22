import React, { useState } from 'react'

export default function Button({ answer, isSelected, type, questionId }) {

    const [clicked, setClicked] = useState(false);
    const feelQuestionIds = ["qFamiliarity", "qImportant","qTypeCleaner"]
    return (
        <div className={questionId==="qTypeCleaner"?"containerTypeCleaner":"container"}>
            {/* {type == "multiSelect" ? */}
                {/* <button className={clicked ? "button_clicked" : "button"} onClick={() => setClicked(!clicked)}>{answer}</button> */}
                {/* :  */}
                <button 
                className={isSelected ?
                questionId==="qTypeCleaner"?"button_clicked button_Feel_clicked":feelQuestionIds.includes(questionId)?"button_clicked":"button_clicked" : questionId==="qTypeCleaner"?"button buttonFeel1":feelQuestionIds.includes(questionId)?"button":"button"} 
                onClick={() => setClicked(!clicked)}
                >
                {answer}
                </button>
            {/* } */}
        </div>
    )
}