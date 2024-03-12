import React, { useState } from "react";

function ButtonS(props) {
    // const message = document.getElementById('message');
    const [messages, setMessage] = useState(false);
    const [errors, setError] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    // var errorMessage = setError('You have already claimed')

    function handleClick(e) {
        const btn = document.querySelector('.button-s')
        e.preventDefault(); //must use to prevent setTimeout from being refreshed
        setMessage(true);
        setDisabled(true);
        setTimeout(() => {
            setMessage(false);
        }, 3000)
    }

    function doubleClick() {
        if(messages == false && isDisabled == true) {
            // setDisabled(true);
            // setMessage(false);
            setError(true);
        }

        // setTimeout(() => {
        //     setError(false);
        // }, 3000)
    }


    return  <div className="field-text">
        <h3 id="message" style={{alignSelf: "center", display: messages ? "block" : null}}>
            {props.message}{props.value}
        </h3>

        <h3 id="error" style={{alignSelf: "center", color: "red", display: errors ? "block" : null}}>
            {props.error}{props.value}
        </h3>
        
        <button
            className="button-s"
            type="submit"
            onClick={handleClick}
            onMouseUpCapture={doubleClick}
            disabled={isDisabled}
            >
            <a href="">{props.action}</a>
        </button>
    </div>
}

export default ButtonS;