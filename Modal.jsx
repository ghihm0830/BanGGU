import React, { useState, useRef } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Modal() {
    const [isKeyEntered, setKeyEntered]= useState(false);

    function keyEnter() {
        setKeyEntered(true);
    }

    function keyDown() {
        setKeyEntered(false);
    }


    return  <div className="modal-input"
    // onMouseOver={mouseOver}
    // onMouseLeave={mouseLeave}
    // style={{borderColor: isMouseOver? "black" : null}}
    >
        <input
        onChange={keyEnter}
        onKeyDownCapture={keyDown}
        placeholder="Ask me a question about crypto currency"
        className="modal-input"
        >
            
        </input>
        <button style={{backgroundColor: isKeyEntered ? "black" : null }}>
            <ArrowForwardIcon style={{fontSize: isKeyEntered ? "16px" : "14px", padding: "0", margin: "0"}}/>
        </button>
    </div>
}

export default Modal;