import React from "react";

function Tooltip(props) {
    return <div className="tip-box">
        {props.title}
        {props.description}
    </div>
}

export default Tooltip;