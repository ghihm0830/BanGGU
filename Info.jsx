import React, {useState} from "react";
import Tooltip from "./Tooltip";
import InfoIcon from '@mui/icons-material/Info';


function Info(props) {

    const [isMouseOver, setMouseOver] = useState(false);


    function mouseOver() {
        setMouseOver(true)
    }

    function mouseOut() {
        setMouseOver(false)
    }

    return <div className="info">

        <InfoIcon
            className="info-icon"
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            style={{color: isMouseOver ? "#8E8E8E" : null, fontSize: "18px"}}
        />
        <div className="tooltips" style={{scale: isMouseOver ? "1" : "0"}}>
            <Tooltip
            key={props.id}
            title= {props.title}
            description={props.description}
            />
        </div>

    </div>
    }

export default Info;

