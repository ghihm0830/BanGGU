import React, { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import TransPopup from "./TransPopup";

function TransInfo() {

    const [isMouseOver, setMouseOver] = useState(false);

    function mouseOver() {
        setMouseOver(true)
        // console.log("yeh!")
    }

    function mouseOut() {
        setMouseOver(false)
    }

    // function popup() {
    //     if(isMouseOver == true) {
    //         document.getElementsByClassName('trans-tooltip').style.display = "block";
    //     } else if(isMouseOver == false) {
    //         document.getElementsByClassName('trans-tooltip').style.display = "none";
    //     }
    // }

    return <div className="Trans-info">
        <InfoIcon
        className="trans-icon"
        style={{fontSize: "16px", color: isMouseOver ? "#8E8E8E" : null}}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        />

        <div className="popup"  style={{scale: isMouseOver ? "1" : "0"}}>
            <TransPopup
            title = "What is Principal ID?"
            description= "XXXX-XXXX-XXXX-XXXX-YY"
            />
        </div>
    </div>
}

export default TransInfo;