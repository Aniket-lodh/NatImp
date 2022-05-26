import Navbar from "../../../Components/navbar/Navbar";
import Header from "../../../Components/header/Header";
import Dropzone from "../../../Components/dropzone/Dropzone";
import {useParams} from "react-router-dom";
import "./task.css";

export default function Task() {
    // Hook to get the id from the url
    // This method only works for :id urls
    let {id: cardId} = useParams()

    let headerProps = {
        // LeftArrow || noAction
        action: "leftArrow",
        // Active || ""
        subheader: "",
        text: "Action",
        navigate: "/actions"
    }


    let cardObject = [
        {
            id: 1,
            header: "Reuse waste Water",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 8 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 2,
            header: "Water-saving habits",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 13 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 3,
            header: "Reuse and Recycle Water",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 5 sub-actions to complete this action of Reuse and Recycle water",
            card: {
                header: "Recycle kitchen water",
                subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                    " The kitchen water can also be used to flower plants."
            }

        },
        {
            id: 4,
            header: "Rain water harvesting",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 12 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 5,
            header: "Reduce food waste",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 18 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 6,
            header: "Look after the soil",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 7 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 7,
            header: "Preserve food",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 21 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 8,
            header: "Control lavishing of food",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 23 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 9,
            header: "Lighting Controls",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 15 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 10,
            header: "Buy Energy-Efficient Products",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 4 sub-actions to complete this action of Reuse and Recycle water",

        },
        {
            id: 11,
            header: "Perform Energy Audit",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 2 sub-actions to complete this action of Reuse and Recycle water",

        }
    ]


    // Function to handle the clicks on the accordions
    const handletCards = (item) => {
        // Setting the parentNode of the header
        const accordionHeader = item.target.parentNode.parentNode;
        // Check to see if another accordion is opened or not?
        const openItem = document.querySelector('.accordion-open');
        toggletCards(accordionHeader);
        // // Condition to close the 2nd opened accordion
        // if (openItem && openItem !== accordionHeader) {
        //     toggletCards(openItem);
        // }
    }
    const toggletCards = function (item) {

        const accordionContent = item.querySelector('.tcdropdownContainer');

        if (item.classList.contains("accordion-open")) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open');
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open')
        }
    }

    return (
        <div>
            <Header {...headerProps}/>
            {
                cardObject.map((item, i) => (
                        parseInt(cardId) === item.id &&
                        <div key={i} className="taskContainer">
                            <div className="Header-wrapper">
                                <h3 className="taskHeader">{item.header}</h3>
                                <p className="taskSubheader">{item.subHeader}</p>
                                <span>Read more</span>
                            </div>
                            <div className="Title-wrapper">
                                <h4 className="taskTitle">{item.title}</h4>
                                <p className="taskSubtitle">{item.subTitle}</p>
                            </div>

                            <div className="taskCards">
                                <div className="tcHeader-wrapper" onClick={(item) => handletCards(item)}>
                                    <h4 className="tcHeader">{item.card.header}</h4>
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                                <div className="tcdropdownContainer">
                                    <Dropzone/>
                                </div>

                            </div>
                        </div>
                    )
                )
            }
            <Navbar/>
        </div>
    )
}