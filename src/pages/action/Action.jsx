import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import ActionCards from "./ActionCards";
import "./takeAction.css";

export default function Action() {

    let headerProps = {
        // LeftArrow || noAction
        action: "leftArrow",
        // Active || ""
        subheader: "",
        text: "Take Action"
    }

    return (
        <div className={"takeActionPage"}>
            <Header action={headerProps.action} text={headerProps.text}
                    subheader={headerProps.subheader} />
            <Navbar/>
            <ActionCards/>
        </div>
    )
}