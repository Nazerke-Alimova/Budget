import React from "react";

export default function ViewBudget (props){
    return(
        <>
        <span>Budget: {props.budget}tg</span>
        <button type="button" className="btn btn-primary" onClick={props.handleEditClick}>
            Edit
        </button>
        </>
    )
}