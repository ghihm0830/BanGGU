import React, {useState} from "react";
import Field from "./Field";
import instructions from "../instructions";

function Input(props) {
    const [value, setValue] = useState("");
    const [getValue, setGetValue] = useState('');

    const [value2, setValue2] = useState("");
    const [getValue2, setGetValue2] = useState('');

    // const [isMouseOver, setMouseOver] = useState(false);
    const [isBorderChanged, setBorder] = useState(false);
    const [isBorderChanged2, setBorder2] = useState(false);

    const [isMessageShow, setMessage] = useState(false);

    function createInstruction(instruction) {
        return <Field 
            key= {instruction.id}
            instruction= {instruction.instruction}
        />
    }

    // function mouseOver() {
    //     setMouseOver(true);
    // }

    // function mouseLeave() {
    //     setMouseOver(false);
    // }

    function handleChange(event) {
        setValue(event.target.value);
        // const inputValue = event.target.value;
        // setValue(inputValue);
    }

    function handleChange2(event) {
         setValue2(event.target.value);
    }

    function handleClick(e) {
        setGetValue(value);
        setGetValue2(value2);
        setMessage(true);

        setTimeout(() => {
            setGetValue('');
            setGetValue2('');
            setMessage(false);
        },4000)

        e.preventDefault();
    }

    // console.log(getInput)


    function changeBorder() {
        if(value.length == 0) {
            setBorder(true)
        } else if (value.length > 1) {
            setBorder(false)
        }
    }

    function changeBorder2() {
        if(value2.length == 0) {
            setBorder2(true)
        } else if (value2.length > 1) {
            setBorder2(false)
        }
    }

    
    return <form
    style={{alignItems: "center"}}
    >
        <div 
        className="input-content"
        >
            <Field
                instruction= {instructions.map(createInstruction)[2]}
            />
            <div 
            className="input-field"
            onInput={changeBorder}

                style={{
                    borderColor: isBorderChanged ? "red" : null,
                    // color: isMouseOver ? "#747373" : null,
                }}>
                {props.icon1}
                <input
                onChange={handleChange}
                type="text"
                placeholder={props.placeholder1}
                required
                />
            </div>
        </div>

        
        <div 
        className="input-content"
        >
            <Field
                instruction= {instructions.map(createInstruction)[3]}
            />
            <div
            className="input-field"
            onInput={changeBorder2}
            style={{
                borderColor: isBorderChanged2 ? "red" : null,
                // color: isMouseOver ? "#747373" : null,
            }}>
            {props.icon2}
                <input
                onChange={handleChange2}
                type="text"
                placeholder={props.placeholder2}
                required
                />
            </div>
        </div>

        <h3 style={{alignSelf: "center", display: isMessageShow ? "block" : "none"}}>{getValue2}{props.message}{getValue}</h3>

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

export default Input;