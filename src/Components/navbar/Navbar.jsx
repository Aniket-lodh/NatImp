import "./navbar.css"
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleActivePage = function (route) {
        navigate(route);
    }
    return (
        <div className="navContainer">
            <nav>
                <div className="iContainers " onClick={() => handleActivePage("/")}>
                    <i className="icons ri-home-4-line"></i>
                    <small>Home</small>
                </div>
                <div className="iContainers " onClick={() => handleActivePage("/actions")}>
                    <i className="icons ri-checkbox-circle-line"></i>
                    <small>My Action</small>
                </div>
                <div className="iContainers " onClick={() => handleActivePage("/community")}>
                    <i className="icons ri-send-plane-line"></i>
                    <small>Community</small>
                </div>
                <div className="iContainers " onClick={() => handleActivePage("/user")}>
                    <i className="icons ri-user-line"></i>

                    <small>Profile</small>
                </div>
            </nav>
        </div>
    )
}