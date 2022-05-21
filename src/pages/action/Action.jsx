import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import "./takeAction.css";

export default function Action() {
    const [opened, setOpened] = useState(false);

    let headerProps = {
        // LeftArrow || noAction
        action: "leftArrow",
        // Active || ""
        subheader: "",
        text: "Take Action"
    }
    const handleOpen = () => {
        if (opened) {
            setOpened(false)
        }
        else {
            setOpened(true)
        }
    }
    return (
        <div className = {"takeActionPage"}>
            <Header action = {headerProps.action} text = {headerProps.text}
                    subheader = {headerProps.subheader} />

            <div className = "actionCardsContainer">
                <p>
                    Take action to planning ahead for the scarcity resources and be a part of the fight against global
                    warming.
                </p>
                <div className = "cardsWrapper">
                    <div className = "cards">
                        <div className = "cardsTitle" onClick = {handleOpen}>
                            <h5>Water Scarcity</h5>
                            <FontAwesomeIcon icon = {faArrowUp} className = {opened ? "rotateArrow" : "notOpened"} />
                        </div>
                        <div className = {opened ? "cardOpened" : "cardHidden"}>
                            <div className = "cardActivities">
                                <div className = "activity">
                                    <div>
                                        <input type = "checkbox" id = "Activity1" checked = {true} />
                                        <label htmlFor = "Activity1">Water-saving habits</label>
                                    </div>
                                    <p>View</p>
                                </div>
                            </div>
                            <div className = "cardActivities">
                                <div className = "activity">
                                    <div>
                                        <input type = "checkbox" id = "Activity2" checked = {true} />
                                        <label htmlFor = "Activity2">Rainwater harvesting</label>
                                    </div>
                                    <p>View</p>
                                </div>
                            </div>
                            <div className = "cardActivities">
                                <div className = "activity">
                                    <div>
                                        <input type = "checkbox" id = "Activity3" />
                                        <label htmlFor = "Activity3">Recycling water</label>
                                    </div>
                                    <p>Take Action</p>
                                </div>
                            </div>
                            <div className = "cardActivities">
                                <div className = "activity">
                                    <div>
                                        <input type = "checkbox" id = "Activity4" />
                                        <label htmlFor = "Activity4">Install water-saving tech</label>
                                    </div>
                                    <p>Take Action</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "cards">
                        <div className = "cardsTitle">
                            <h5>Water Scarcity</h5>
                            <FontAwesomeIcon icon = {faArrowUp} className = {opened ? "rotateArrow" : "notOpened"} />
                        </div>
                        <div className = "cardActivities">
                            <div className = "activity">
                                <div>
                                    <input type = "checkbox" id = "Activity1" checked = {true} />
                                    <label htmlFor = "Activity1">Water-saving habits</label>
                                </div>
                                <p>View</p>
                            </div>
                        </div>
                        <div className = "cardActivities">
                            <div className = "activity">
                                <div>
                                    <input type = "checkbox" id = "Activity2" checked = {true} />
                                    <label htmlFor = "Activity2">Rainwater harvesting</label>
                                </div>
                                <p>View</p>
                            </div>
                        </div>
                        <div className = "cardActivities">
                            <div className = "activity">
                                <div>
                                    <input type = "checkbox" id = "Activity3" />
                                    <label htmlFor = "Activity3">Recycling water</label>
                                </div>
                                <p>Take Action</p>
                            </div>
                        </div>
                        <div className = "cardActivities">
                            <div className = "activity">
                                <div>
                                    <input type = "checkbox" id = "Activity4" />
                                    <label htmlFor = "Activity4">Install water-saving tech</label>
                                </div>
                                <p>Take Action</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Navbar />
        </div>
    )
}