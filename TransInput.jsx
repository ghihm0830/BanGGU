import React, { useState } from "react";

function TransInput(props) {
    const [value, setValue] = useState('');
    const [getValue, setGetValue] = useState('');

    const [isMouseOver, setMouseOver] = useState(false);
    const [isBorderChanged, setBorder] = useState(false);

    const [isMessageShow, setMessage] = useState(false);


    function mouseOver() {
        setMouseOver(true);
    }

    function mouseLeave() {
        setMouseOver(false);
    }

    // console.log(getInput)

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleClick(e) {
        setGetValue(value);
        setMessage(true);

        setTimeout(() => {
            setGetValue('');
            setMessage(false);
        },4000)

        e.preventDefault();
    }

    function changeBorder() {
        if(value.length == 0) {
            setBorder(true);
        } else if (value.length > 1) {
            setBorder(false);
        }
    }

    return <form 
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onInput={changeBorder}
    >
        <div className="input-field"
            style={{
                borderColor: isMouseOver ? "#747373" : null,
                borderColor: isBorderChanged ? "red" : null,
                color: isMouseOver ? "#747373" : null,
            }}
        >
            {props.icon}
            <input
            onChange={handleChange}
            type="text"
            placeholder={props.placeholder}
            value={value}
            >
            </input>
        </div>
        
        <h3 style={{alignSelf: "center", display: isMessageShow ? "block" : "none"}}>{props.message}{getValue}</h3>
        <button
        className="button-s"
        type="submit"
        onClick={handleClick}
        style={{alignSelf: "center"}}
        >
            {props.action}
        </button>
    </form>
}

export default TransInput;