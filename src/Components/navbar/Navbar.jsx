import {
    faCheckCircle,
    faPaperPlane,
    faUser
} from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className = "navContainer">
            <nav>
                <div className = "iContainers active">
                    <FontAwesomeIcon icon = {faHouse} className = "icons" />
                    <small>Home</small>
                </div>
                <div className = "iContainers">
                    <FontAwesomeIcon icon = {faCheckCircle} className = "icons" />
                    <small>My Action</small>
                </div>
                <div className = "iContainers">
                    <FontAwesomeIcon icon = {faPaperPlane} className = "icons" />
                    <small>Community</small>
                </div>
                <div className = "iContainers">
                    <FontAwesomeIcon icon = {faUser} className = "icons" />
                    <small>Profile</small>
                </div>
            </nav>
        </div>
    )
}