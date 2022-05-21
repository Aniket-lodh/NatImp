import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import Slider from "../../Components/slider/Slider";
import "./home.css"

export default function Home() {
    let headerProps = {
        // LeftArrow || noAction
        action: "noAction",
        subheader: "active",
        text: "World's News"
    }
    let sprops = {
        trendingCards: {
            cards: [
                {
                    img: {
                        src: "https://images.unsplash.com/photo-1612815867823-85cf0957890b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    },
                    highlightState: true,
                    highLightText: 'climateChange',
                    caption: "Scientists identify the most extreme heatwa..",
                    subtitleIconState: false,
                    subtitle: "2 hours ago"
                },
                {
                    img: {
                        src: "https://images.unsplash.com/photo-1612815867823-85cf0957890b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    },
                    highlightState: true,
                    highLightText: 'climateChange',
                    caption: "Scientists identify the most extreme heatwa..",
                    subtitleIconState: false,
                    subtitle: "2 hours ago"
                },
                {
                    img: {
                        src: "https://images.unsplash.com/photo-1612815867823-85cf0957890b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    },
                    highlightState: true,
                    highLightText: 'climateChange',
                    caption: "Scientists identify the most extreme heatwa..",
                    subtitleIconState: false,
                    subtitle: "2 hours ago"
                },
                {
                    img: {
                        src: "https://images.unsplash.com/photo-1612815867823-85cf0957890b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    },
                    highlightState: true,
                    highLightText: 'climateChange',
                    caption: "Scientists identify the most extreme heatwa..",
                    subtitleIconState: false,
                    subtitle: "2 hours ago"
                },
                {
                    img: {
                        src: "https://images.unsplash.com/photo-1612815867823-85cf0957890b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    },
                    highlightState: true,
                    highLightText: 'climateChange',
                    caption: "Scientists identify the most extreme heatwa..",
                    subtitleIconState: false,
                    subtitle: "2 hours ago"
                }
            ]
        },
        impactCards: {
            cards: [
                {
                    img: {
                        src: null
                    },
                    highlightState: false,
                    header: "Water Scarcity",
                    caption: "The LIV estimates that 40% of countries are in “water stress zones.",
                    subtitleIconState: true,
                },
                {
                    img: {
                        src: null
                    },
                    highlightState: false,
                    header: "Food Crises",
                    caption: "By 2020 demand for food will be up 25%",
                    subtitleIconState: true,
                },
                {
                    img: {
                        src: null
                    },
                    highlightState: false,
                    header: "Energy Consumption",
                    caption: "By 2032 consumption of electricity will be up 35%",
                    subtitleIconState: true,
                },
                {
                    img: {
                        src: null
                    },
                    highlightState: false,
                    header: "Water Scarcity",
                    caption: "The LIV estimates that 40% of countries are in “water stress zones.",
                    subtitleIconState: true,
                },
                {
                    img: {
                        src: null
                    },
                    highlightState: false,
                    header: "Energy Consumption",
                    caption: "By 2032 consumption of electricity will be up 35%",
                    subtitleIconState: true,
                },

            ]
        }
    }
    //Handles which page it will redirect
    const navigate = useNavigate()
    const handleAction = () => {
        navigate("/actions")
    }

    return (
        <div className = "home">
            <Header action = {headerProps.action} text = {headerProps.text}
                    subheader = {headerProps.subheader} />
            <Slider {...sprops.trendingCards} />

            <Header action = {headerProps.action} text = {headerProps.text = "What's the Impact?"}
                    subheader = {headerProps.subheader = "hidden"} />
            <Slider {...sprops.impactCards} />

            <Header action = {headerProps.action} text = {headerProps.text = "What Should we Do?"}
                    subheader = {headerProps.subheader = "hidden"} />
            <div className = "takeActionContainer">
                <p>Take action and planning ahead for the scarcity resource</p>
                <div className = "takeActionButton" onClick = {handleAction}>
                    <button>
                        Take Action
                    </button>
                </div>
            </div>
            <Navbar />
        </div>
    )
}