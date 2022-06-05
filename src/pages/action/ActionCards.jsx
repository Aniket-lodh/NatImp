import "./actionCard.css";
import {useNavigate} from "react-router-dom";

export default function ActionCards() {
    const navigate = useNavigate();
    // Function to decide which specific route has to open for each tasks by using useNavigate hook
    const handleCardsRoute = (cardId) => {
        navigate(`/actions/${cardId}`)
    }

    // Function to handle the clicks on the accordions
    const handleCards = (item) => {
        // Setting the parentNode of the header
        const accordionHeader = item.target.parentNode.parentNode;
        // Check to see if another accordion is opened or not?
        const openItem = document.querySelector('.accordion-open');
        toggleItem(accordionHeader);

        // Condition to close the 2nd opened accordion
        if (openItem && openItem !== accordionHeader) {
            toggleItem(openItem);
        }
    }
    const toggleItem = function (item) {
        const accordionContent = item.querySelector('.tasksContainer');

        if (item.classList.contains("accordion-open")) {
            accordionContent.removeAttribute('style');
            item.classList.remove('accordion-open');
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            item.classList.add('accordion-open')
        }
    }


    return (
        <div className="acContainer">
            <p>
                Take action to planning for the scarcity resources and be a part of the fight against global warming.
            </p>
            <section className="acWrapper">
                <div className="cards">
                    <div className="header" onClick={(item) => handleCards(item)}>
                        <h4>Water Scarcity</h4>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks done" onClick={() => handleCardsRoute(1)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Water-saving habits</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks done" onClick={() => handleCardsRoute(2)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Support Clean water</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks pending" onClick={() => handleCardsRoute(3)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-blank-line"></i>
                                 </span>
                                <h5>Reuse and Recycle Water</h5>
                            </div>
                            <p>Take Action</p>
                        </div>
                        <div className="tasks pending" onClick={() => handleCardsRoute(4)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-blank-line"></i>
                                 </span>
                                <h5>Rain water harvesting</h5>
                            </div>
                            <p>Take Action</p>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="header" onClick={(item) => handleCards(item)}>
                        <h4>Food Crises</h4>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks done" onClick={() => handleCardsRoute(5)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Reduce Food Waste</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks done" onClick={() => handleCardsRoute(6)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Look after the soil</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks pending" onClick={() => handleCardsRoute(7)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-blank-line"></i>
                                 </span>
                                <h5>Preserve food</h5>
                            </div>
                            <p>Take Action</p>
                        </div>
                        <div className="tasks pending" onClick={() => handleCardsRoute(8)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-blank-line"></i>
                                 </span>
                                <h5>Control lavishing of food</h5>
                            </div>
                            <p>Take Action</p>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="header" onClick={(item) => handleCards(item)}>
                        <h4>Electricity Scarcity</h4>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks done" onClick={() => handleCardsRoute(9)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Lighting Controls</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks done" onClick={() => handleCardsRoute(10)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <h5>Buy Energy-Efficient Products</h5>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks pending" onClick={() => handleCardsRoute(11)}>
                            <div>
                                 <span>
                                      <i className="ri-checkbox-blank-line"></i>
                                 </span>
                                <h5>Perform Energy Audit</h5>
                            </div>
                            <p>Take Action</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}