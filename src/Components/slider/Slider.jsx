import {faCopy} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

export default function Slider(props) {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 150
        }
    };
    return (
        <Carousel responsive={responsive}
                  arrows={true}
                  autoPlay={false}
                  autoPlaySpeed={3000}
                  containerClass="container"
                  draggable={true}
                  focusOnSelect={false}
                  keyBoardControl={false}
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  partialVisible={true}
                  className="carousal-container"
        >
            {
                props.cards.map((cardItem, i) => (
                    <div className="trendingCards" key={i}>
                        <img src={cardItem.img.src} alt="" className={cardItem.img.src ? "trImg" : "noHighLight"}/>

                        <h4 className={cardItem.header ? 'trHeader' : "noAction"}>
                            {cardItem.header}
                        </h4>

                        <div className="trDesc">
                            <p className={cardItem.highlightState === true ? "trHighlight" : "noHighLight"}>
                                {cardItem.highLightText}
                            </p>
                            <p className={cardItem.header ? "trHeaderCaption" : "trCaption"}>
                                {cardItem.caption}
                            </p>

                            <small>
                                <span
                                    className={cardItem.subtitleIconState === true ? 'subtitleActive' : 'noHighLight'}>
                                        <FontAwesomeIcon icon={faCopy}/>
                                </span>
                                <span>
                                        {cardItem.subtitleIconState === true ? "Related Article" : cardItem.subtitle}
                                </span>
                            </small>
                        </div>
                    </div>
                ))
            }

        </Carousel>
    )
}