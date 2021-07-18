import React from "react";
import './Quora.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function Quora() {
    return (
        <div className="quora">
            <Navbar />
            <div className="quora_sidebar">
                <Sidebar />
            </div>
        </div>
    )
};

export default Quora;