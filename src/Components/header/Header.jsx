import "./header.css";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

export default function Header(props) {
    //Handles which page it will redirect
    const navigate = useNavigate()
    const handleAction = (route) => {
        navigate(route)
    }
     return (
        <section className="headerWrapper">
            <div  onClick={() => props.navigate ? handleAction(props.navigate) : handleAction("/")}
                className={props.action === "leftArrow" ? "leftArrow" : "noAction"}>
                <FontAwesomeIcon icon={faArrowLeft} className="icon"/>
            </div>
            <header>
                <h4 className="headerTitle">{props.text}</h4>
                <p className={props.subheader === "active" ? "headerSubtitle" : "noAction"}>See more</p>
            </header>
        </section>
    );
}