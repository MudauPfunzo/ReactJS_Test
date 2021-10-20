import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const Services = (props) => {
  const [currentSlide, setCurrentSlide] = useState(3);
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <p>
            What are you
            <span className="bold-span"> here to do?</span>
          </p>
        </div>
        <div className="row">
          <Carousel
            swipeable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            customTransition="all .5"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            afterChange={(nextSlide) => setCurrentSlide(nextSlide - 1)}
          >
            {props.data ? (
              props.data.map((d, i) => (
                <div key={`${d.id}-${i}`}>
                  <div className="card">
                    <div
                      className={
                        currentSlide.toString() == d.id.toString()
                          ? "card-body highlighted"
                          : "card-body"
                      }
                    >
                      <img src={d.image} className="card-img-top" alt="..." />
                      <p className="card-text">{`${d.title}-${currentSlide}`}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
