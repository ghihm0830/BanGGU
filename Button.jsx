import React from "react";

function Button(props) {
    return <button className="btn">
        <a href={props.url}>
            {props.icon}
            {props.title}
        </a>
    </button>
}

export default Button;