import React from "react";
// import Info from "./Info";

function Card(props) {

    return <div className="card">
        <h2>{props.value}</h2>
        <h3 style={{color: "white"}}>{props.detail}</h3>
    </div>
}

export default Card;
