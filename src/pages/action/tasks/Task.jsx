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
            header: "Water saving habits",
            subHeader: "Water is the most important element for the preservation of life." +
                " Water is a finite commodity which, if not managed properly,will result in shortages in the near future." +
                " Water conservation can go long way to help alleviate these impending shortages.",
            title: "Your Actions",
            subTitle: "Finish at least 8 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Check your toilet for leaks",
                    subheader: "Put a few drops of food coloring in your toilet tank." +
                        "If,without flushing,the coloring begins to appear in the bowl," +
                        "you have a leak that may be wasting more than 100 gallons of water a day."
                },
                {
                    header: "Take shorter showers",
                    subheader: "A typical shower uses five to ten gallons of water a minute." +
                        " Limit your showers to the time it takes to soap up, wash down and rise off."

                },
                {
                    header: "Turn off water while brush",
                    subheader: "Before brushing, wet your brush and fill a glass for rinsing your mouth."

                },
                {
                    header: "Turn off your faucet",
                    subheader: "Rinse your vegetables instead in bowl or sink full of clean water." +
                        "Don't let the faucet constantly run while rinsing the vegetables."

                },
                {
                    header: "Check for leaks in pipes",
                    subheader: "Leaks outside the house are easier to ignore since they don't mess up the floor or keep you awake at night." +
                        "However,they can be even more wasteful than inside water leaks especially when they occur on your main water line."

                },
                {
                    header: "Install water saving heads",
                    subheader: "Your hardware or plumbing supply store stocks inexpensive shower heads or flow restrictors that will cut your shower flow to about three galons a minute instead of five to ten." +
                        "They are easy to install, and your showers will still be cleansing and refreshing."

                },
                {
                    header: "Take baths",
                    subheader: "A partially filled tub uses less water than all but the shortest showers."
                },
                {
                    header: "Use dishwasher only when needed",
                    subheader: "Running your dishwasher less & using it only for full loads often saves water and money."
                },
                {
                    header: "Don't keep the faucet running",
                    subheader: "If you wash dishes by hand, dont leave the water running for rinsing." +
                        "If you have two sinks, fill one with rinse water.If you have only one than first gather all your washed dishes in a dish rack, then rinse them quickly with a spray device or a pan of water."
                }
            ]
        },
        {
            id: 2,
            header: "Support Clean water initiatives",
            subHeader: "There are organizations located all over the world that are looking to bring clean water to areas that don't have it." +
                " Consider donating to them, either with your time,your skills, or your finances (whichever you can afford to give to them)",
            title: "Your Actions",
            subTitle: "Complete at least 3 sub-actions to finish this action of Support clean water initiatives.",
            card: [
                {
                    header: "Don't use toilet as ashtray",
                    subheader: "Every time you flush a cigarette butt, facial tissue or other small bit of trash, you're wasting gallons of water." +
                        " Put them in the garbage, or better yet, recycle."
                },
                {
                    header: "Recycle water",
                    subheader: "Recycle your water where you can. Collect the cold water you run before it's hot enough to shower and use it to water plants or flush the toilet." +
                        " Rinse water from dishes and food preparation can be collected and used to soak other dishes."
                },
                {
                    header: "Use Broom, Not a Hose",
                    subheader: "Blasting leaves or stains off your walkways with water is one way to remove them," +
                        " but brushing with a broom to first loosen the dirt and grime all decrease your water use and save you time in the long run."
                },
                {
                    header: "Cover swimming pool to reduce evaporation",
                    subheader: "Swimming pools can lose an inch or more of water each week to evaporation. Temperature, humidity, wind, and the way pool is situated can all affect how quickly water evaporates." +
                        " To save thousands of gallons of pools water each season, get a cover for your pool."
                }
            ]
        },
        {
            id: 3,
            header: "Reuse and Recycle Water",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 4 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                },
                {
                    header: "Collect shower water",
                    subheader: " Water from the shower can be reused after a bath by plugging the drain and letting the bath fill up." +
                        "The collected water can be reused again for watering outdoor flowers and lawns."
                },
                {
                    header: "Trap rainwater",
                    subheader: "Collecting rainwater is equally part of water reuse that many people do not recognize." +
                        " Collection of rainwater can be used in the garden to water plants, for laundry and many other purposes."
                },
                {
                    header: "Install sink-to-toilet system",
                    subheader: "The system works by filtering sink drainage after which it stores it in a reservoir, which is used to flush the toilet. " +
                        "Particularly,it redirects water from the pipe to a valve which then drains the water into toilet bowl."
                }
            ]

        },
        {
            id: 4,
            header: "Rain water harvesting",
            subHeader: "It is simple to collect rainwater from building roofs and other sources. " +
                "As long as you are ready all that it takes to begin rainwater harvesting and enjoy naturally clean and useful water.",
            title: "Your Actions",
            subTitle: "Finish at least 6 sub-actions to complete this action of Rain water harvesting",
            card: [
                {
                    header: "Trap rainwater",
                    subheader: "Collecting rainwater is equally part of water reuse that many people do not recognize." +
                        " Collection of rainwater can be used in the garden to water plants, for laundry and many other purposes."
                },
                {
                    header: "Rainwater barrels",
                    subheader: "Barrel installation is the cheapest and easiest way to start harvesting rainwater in your home." +
                        " A barrel is simply installed underneath the downspout of the guttering so that rain falling on roof is funneled into the barrel."
                },
                {
                    header: "Direct rainwater runoff to plants",
                    subheader: "You can direct the rainwater runoff from your home structure to the base of plants." +
                        " It can be used for plants that need regular watering and happen to be in the shade."
                },
                {
                    header: "Make a roof garden",
                    subheader: "Build a roof garden by planting seeds and saplings that need a lot of water." +
                        " Pick plants that have dense roots and can hold plenty of water."
                },
                {
                    header: "Make a rain saucer",
                    subheader: "A rain saucer looks like two upturned umbrellas balanced over a rainwater barrel." +
                        " The saucer forms a funnel through which the falling rain can be channeled into a drum."
                },
                {
                    header: "Place outside items that need a rinse",
                    subheader: " If your car, bike, toys, or anything else needs a quick wash, put it out in the rain." +
                        " Wipe them with soapy water beforehand, and let it get washed by the rains."
                }

            ]
        },
        {
            id: 5,
            header: "Reduce food waste",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 18 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 6,
            header: "Look after the soil",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 7 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 7,
            header: "Preserve food",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 21 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 8,
            header: "Control lavishing of food",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 23 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 9,
            header: "Lighting Controls",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 15 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 10,
            header: "Buy Energy-Efficient Products",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 4 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        },
        {
            id: 11,
            header: "Perform Energy Audit",
            subHeader: "Grey water is the water draining from your house's sinks, " +
                "bathrooms, and laundry machines,which can be used to water plants " +
                "(as opposed to \"black water\" from toilets, which needs to be treated)",
            title: "Your Actions",
            subTitle: "Finish at least 2 sub-actions to complete this action of Reuse and Recycle water",
            card: [
                {
                    header: "Recycle kitchen water",
                    subheader: "Water that is used to clean dishes can reused by dumping it in the toilet bowl for flushing." +
                        " The kitchen water can also be used to flower plants."
                }
            ]
        }
    ]


    // Function to handle the clicks on the accordions
    const handletCards = (item) => {
        // Setting the parentNode of the header
        const accordionHeader = item.target.parentNode.parentNode;
        // Check to see if another accordion is opened or not?
        const openItem = document.querySelector('.accordion-open');
        toggletCards(accordionHeader);

        // Condition to close the 2nd opened accordion
        if (openItem && openItem !== accordionHeader) {
            toggletCards(openItem);
        }
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

    const handleSubmit = function (item) {
        document.body.classList.add("dialog-open")
        const CardParent = item.target.parentNode;
        let dialogModal = CardParent.getElementsByClassName("dialogModalWrapper")[0];
        dialogModal.classList.add("active-Dialog")
    }

    const handleClose = function () {
        document.body.classList.remove("dialog-open")
        let dialogModal = document.getElementsByClassName("active-Dialog")[0];
        dialogModal.classList.remove("active-Dialog")
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
                            {
                                // TODO:improve the card dropdown height once adding the file
                                item.card.map((cardItem, i) => (
                                    <div key={i} className="taskCards">
                                        <div className="tcHeader-wrapper" onClick={(item) => handletCards(item)}>
                                            <h4 className="tcHeader">{cardItem.header}</h4>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                        <div className="tcdropdownContainer">
                                            <p className="tcSubheader">{cardItem.subheader}</p>
                                            <Dropzone/>
                                            <button type="submit" id="submitButton"
                                                    onClick={(item) => handleSubmit(item)}>Done
                                            </button>


                                            <section className="dialogModalWrapper">
                                                <div className="dialog">
                                                    <div className="dialog-header">
                                                        <h3>Share Action</h3>
                                                        <i className="ri-close-fill" onClick={() => handleClose()}></i>
                                                    </div>
                                                    <hr/>
                                                    <div className="contentsWrapper">
                                                        <p className="contents">
                                                            Let the world know about your action and influence people
                                                            to do the same thing as you do to save the world. Do you want to
                                                            share
                                                            this to Community?
                                                        </p>
                                                        <div className="action-buttons">
                                                            <button className="confShare">Yes,Share it to Community</button>
                                                            <button className="skipShare">Skip,I'll do it next time</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    )
                )
            }
            <Navbar/>
        </div>
    )
}