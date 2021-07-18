import React from "react";
import './Navbar.css';
import  { Home,AssignmentIndOutlined, BorderAllRounded, NotificationsOutlined, PeopleAltOutlined, Search, Language } from "@material-ui/icons";
import { Avatar,Button } from "@material-ui/core";

function Navbar() {
    return(
        <div className="navbar">
            <div className="qHeader_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1920px-Quora_logo_2015.svg.png" alt="" />
            </div>
            <div className="qHeader_icons">
                <div className="qHeader_icon"><Home/></div>
                <div className="qHeader_icon"><BorderAllRounded/></div>
                <div className="qHeader_icon"><AssignmentIndOutlined/></div>
                <div className="qHeader_icon"><PeopleAltOutlined/></div>
                <div className="qHeader_icon"><NotificationsOutlined/></div>
            </div>

            <div className="qHeader_input">
                <input type="text" placeholder="검색하기" /><Search/>
            </div>

            <div className="qHeader_REM">
                <div className="qHeader_avatar">
                    <Avatar />
                </div>
                <Language />
                <Button>질문하기</Button>
            </div>
        </div>
    );
}

export default Navbar;