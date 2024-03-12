import React, { useState, useRef } from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Button from "./Button";
import Card from "./Card";
import cards from "../../src/cards";
import Info from "./Info";
import Navi from "./Navi";
import Modal from "./Modal";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CancelIcon from '@mui/icons-material/Cancel';

function Hero() {
    const dialogRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [isMouseOver,  setMouseOver] = useState(false);

    function mouseOver() {
        setMouseOver(true);
    }

    function mouseLeave() {
        setMouseOver(false);
    }

    const handleClickOpen = () => {
        setOpen(true)
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        setOpen(false)
        dialogRef.current.close();
    };

    // function toggleDialog() {
    //     if(!dialogRef.current) {
    //         return;
    //     }
    //     dialogRef.current.hasAttribute("open")
    //         ? dialogRef.current.close()
    //         : dialogRef.current.showModal();
    // }

    function createCard(card) {
        return (
            <Card
                key= {card.id}
                value= {card.value}
                detail= {card.detail}
            />
        )
    }

    return <header>
        <Navi />
        <main>
            <h1 className="hero-title">
                crypto <br />
                transaction <br />
                as cloud
            </h1>
            <div className="btns">
                <div className="dialog" onClick={handleClickOpen}>
                    <Button
                    icon= {<SmartToyIcon />}
                    title = "Ask AI"
                    />

                    <dialog 
                        ref={dialogRef}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <div className="modal-title">
                            <SmartToyIcon />
                            <h2>Internet Computer AI</h2>
                            <button>
                                <CancelIcon 
                                onClick={handleClose}
                                onMouseOver={mouseOver}
                                onMouseLeave={mouseLeave}
                                style={{margin: "0", 
                                    padding: "0",
                                    color: isMouseOver ? "black" : "A4A4A4"
                                }}/>
                            </button> 
                        </div>
                        <Modal />
                    </dialog>
                </div>
                
                <Button
                icon= {<CurrencyExchangeIcon />}
                title = "Make Transaction"
                url= "http://localhost:3000/transaction"
                />
            </div>

            <div className="cards">
                <div className="card-box">
                    {cards.map(createCard)[0]}
                    <Info
                    key={1}
                    title= {"ETH-EQUIVALENT TRANSACTIONS"}
                    description={"Not all Transactions are equal. ICP performs ~80x the amount of computational work of Ethereum per transaction."}
                    />
                </div>
                <div className="card-box">
                    {cards.map(createCard)[1]}
                    <Info
                        key={2}
                        title= {"THROUGHPUT"}
                        description={"Capacity horizontally scales as subnet blockchains are seamlessly combined into one unified blockchain. Blocks and transactions per second are unbounded."}
                    />
                </div>
                <div className="card-box">
                    {cards.map(createCard)[2]}
                    <Info
                        key={3}
                        title= {"MEMORY IS $5/GB/YEAR"}
                        description={"Each canister smart contract running on ICP can make 400 GiB of persistent memory pages available to its bytecode (orthogonal persistence allows data structures to be used like databases)."}
                    />
                </div>
            </div>
        </main>
    </header>
}

export default Hero;