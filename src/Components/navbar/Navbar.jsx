import "./navbar.css"
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();


    const handleActivePage = function (route, item) {
        navigate(route);
        // TODO:NEED to fix the active anv section
        let activeNav = window.location.href.split("/");
        activeNav = activeNav[activeNav.length - 1];
        let curIndex = item.target.parentNode;
        if ((activeNav === " " || activeNav === null || activeNav === "actions" || activeNav === "community") && curIndex.className === "iContainers") {
            curIndex.classList.add("activeNav")
            // console.log(curIndex)
        }
    }
    return (
        <div className="navContainer">
            <nav>
                <div className="iContainers activeNav" onClick={(item) => handleActivePage("/", item)}>
                    <i className="icons ri-home-4-line"></i>
                    <small>Home</small>
                </div>
                <div className="iContainers" onClick={(item) => handleActivePage("/actions", item)}>
                    <i className="icons ri-checkbox-circle-line"></i>
                    <small>My Action</small>
                </div>
                <div className="iContainers" onClick={(item) => handleActivePage("/community", item)}>
                    <i className="icons ri-send-plane-line"></i>
                    <small>Community</small>
                </div>
                <div className="iContainers" onClick={(item) => handleActivePage("/user", item)}>
                    <i className="icons ri-user-line"></i>

                    <small>Profile</small>
                </div>
            </nav>
        </div>
    )
}