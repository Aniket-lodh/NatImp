import "./header.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
    return (
        <section className = "headerWrapper">
            <div className = {props.action === "leftArrow" ? "leftArrow" : "noAction"}>
                <FontAwesomeIcon icon = {faArrowLeft} className = "icon" />
            </div>
            <header>
                <h4 className = "headerTitle">{props.text}</h4>
                <p className = {props.subheader === "active" ? "headerSubtitle" : "noAction"}>See more</p>
            </header>
        </section>
    );
}