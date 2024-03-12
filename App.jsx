import React from "react";
import {Route, Routes} from 'react-router-dom'; //routes is a warpper, route is individual path
import Hero from "./Hero";
import Transaction from "./Transaction";
import Modal from "./Modal";

function App() {
    return <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/ask" element={<Modal />} />
    </Routes>
}

export default App;