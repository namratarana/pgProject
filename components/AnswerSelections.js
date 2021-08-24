export default function AnswerSelection(props) {
  return (
    // (props.primaryArea==="qPrimaryAreas"&&
    // props.multiSelect&&props.answersChosen.length===0)||(props.primaryArea==='qImportant'&&
    // props.multiSelect&&props.answersChosen.length===0)||(props.primaryArea==="qTensions"&&props.multiSelect&&props.answersChosen.length===0)?props.primaryArea==="qPrimaryAreas"&&
    // props.multiSelect&&props.filteredPrimaryAreasList.length===0?<div className="friendlyMessage col-md-7 py-3">Currently no product recommendations available.</div>:
    // '':
    <div className="friendlyMessage col-md-7 py-3">{props.message}</div>
  );
}
