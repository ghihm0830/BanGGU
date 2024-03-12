import React from "react";

function TransPopup(props) {
    return <div className="trans-popup">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}

export default TransPopup;