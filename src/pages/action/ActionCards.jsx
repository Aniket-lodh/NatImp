import "./actionCard.css";

export default function ActionCards() {
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
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="header" onClick={(item) => handleCards(item)}>
                        <h4>Water Scarcity</h4>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <div className="tasksContainer">
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                        <div className="tasks">
                            <div>
                                 <span>
                                      <i className="ri-checkbox-line"></i>
                                 </span>
                                <p>Water-saving habits</p>
                            </div>
                            <p>View</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}