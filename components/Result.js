import React from "react"

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

    return (
        <div className="container">
            <div className="row mt-3">
                <h1 className="resultHeadPage">Your Custom Clean Kit</h1>
            </div>
            <div className="row mt-3">
                <div className="resultsPage">

                    You have chosen: {props.BT!==undefined?props.BT:''}({props.BS!==undefined?props.BS:''}). {" "}
                     The challenges you face include{" "}
                    {props.Tens === undefined
                        ? " "
                        : tens(props.Tens).toString().replace('and,', 'and')}
                    .
                </div>
            </div>
            <div className="row mt-4">
                <div className="resultPageText">
                    Based on your selections listed, here are the products we recommend for your business:
                </div>
            </div>
            <div className="row mt-3">
                <div>
                    {/*{uniqValues.map((x) => (
            <div className="row mt-2">{x}</div>
          ))}*/}
                </div>
            </div>
        </div>
    )
}
