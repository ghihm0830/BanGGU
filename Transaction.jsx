import React, {useState} from "react";
import Navi from "../components/Navi";
import Field from "./Field";
import instructions from "../instructions";
import ButtonS from "./ButtonS";
import Input from "./Input";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import TransInfo from "./TransInfo";
import TransInput from "./TransInput";
import TollIcon from '@mui/icons-material/Toll';
import MoodIcon from '@mui/icons-material/Mood';


function Transaction() {

    // const [isSmallSize, setSmallSize] = useState(false)

    // function smallWindow() {
    //     if(window.innerWidth < 600) {
    //     return setSmallSize(true);
    //     } else if (window.innerWidth > 600){
    //         return setSmallSize(false)
    //     }
    // }

    var isSmallWindow = window.innerWidth < 600;
    // const [isButtonClicked, setMessage] = useState(false);

    function createInstruction(instruction) {
        return <Field 
            key= {instruction.id}
            instruction= {instruction.instruction}
        />
    }

    // function submit() {
    //     setMessage(true)
    // }

    return <div className="transaction">
        <Navi />

        <div className="field-boxes">
            <div className="field-box">
                <Field
                    instruction= {instructions.map(createInstruction)[0]}
                />

                <ButtonS
                message= "Successfully added!"
                error= "You have already claimed!"
                action= "Claim free tokens"
                />
            </div>

            <div className="field-box">
                <div className="input-content">
                        <Field
                        instruction= {instructions.map(createInstruction)[1]}
                        />

                    <div className="input-w-info">
                        <TransInput
                        icon= {<PersonSearchIcon />}
                        placeholder= {isSmallWindow ? "Principal ID" : "What is your Principal ID?"}
                        action= "Check token balance"
                        message= "Your balance is "
                        />
                        
                        <TransInfo />
                    </div>
                </div>
            </div>
            <div className="field-box">
                <Input
                icon1= {<MoodIcon />}
                icon2= {<TollIcon />}
                placeholder1= {isSmallWindow ? "Transfer to" : "To whom would you transfer?"}
                placeholder2= {isSmallWindow? "Amount to transfer" : "How much would you transfer?"}
                message= " GGU transfer to "
                action= "Proceed to transfer"
                />
            </div>
        </div>
    </div>
}

export default Transaction;

console.log(window.innerWidth)