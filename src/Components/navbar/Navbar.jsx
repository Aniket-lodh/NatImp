import {
    faCheckCircle,
    faPaperPlane,
    faUser
} from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleActivePage = function (route) {
        navigate(route)
    }
    return (
        <div className = "navContainer">
            <nav>
                <div className = "iContainers active" onClick = {() => handleActivePage("/")}>
                    <FontAwesomeIcon icon = {faHouse} className = "icons" />
                    <small>Home</small>
                </div>
                <div className = "iContainers" onClick = {() => handleActivePage("/actions")}>
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