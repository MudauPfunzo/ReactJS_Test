import { useEffect, useState } from "react";
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
const GItems = (props) => {
  return props.data ? (
    props.data.map((d, i) => (
      <div key={`${d.id}-${i}`} className="gallery-item">
        <div className="deal-card">
          <div className={"card-body"}>
            <img src={d.image} className="card-img-top" alt="..." />
            <p className="card-text">{`${d.title}`}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div></div>
  );
};
export const Services = (props) => {
  // super(props);
  const [galleryContainer, setGalleryContainer] = useState({});
  const [galleryControls, setGalleryConrols] = useState(["Previous", "Next"]);
  const [galleryControlsContainer, setgalleryControlsContainer] = useState({});
  const [newDirection, setNewDirection] = useState("next");
  const [directionNext, setDirectionNext] = useState(0);
  const [directionPrevious, setDirectionPrevious] = useState(0);
  //carouselContainer = {};
  //carouselControls = {};
  const [count, setCount] = useState(0);
  const [carouselArray, setcarouselArray] = useState([]);
  useEffect(() => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    if (galleryItems) {
      if (count == 0) setcarouselArray((arry) => (arry = [...galleryItems]));
      if (galleryItems.length > 0) {
        if (count == 0) {
          setCount(galleryItems.length);
        }
      }
    }
  }, [carouselArray]);
  useEffect(() => {
    if (carouselArray) {
      if (carouselArray.length > 0) {
        setcarouselArray((arr) => {
          // arr[0].classList.add("gallery-item-first")
          arr[0].classList.add("gallery-item-first");
          arr[1].classList.add("gallery-item-previous");
          arr[2].classList.add("gallery-item-selected");
          arr[3].classList.add("gallery-item-next");
          arr[4].classList.add("gallery-item-last");
        });
      }
    }
    setgalleryControlsContainer(document.querySelector(".gallery-controls"));
    //console.log(carouselArray);
  }, [count]);

  useEffect(() => {
    //const triggers = [...galleryControlsContainer.childNodes];

    //const target = control;
    const selected = document.querySelectorAll(".gallery-item-selected");
    const previous = document.querySelectorAll(".gallery-item-previous");
    const next = document.querySelectorAll(".gallery-item-next");
    const first = document.querySelectorAll(".gallery-item-first");
    const last = document.querySelectorAll(".gallery-item-last");
    selected.forEach((el) => {
      el.classList.remove("gallery-item-selected");

      if (newDirection == "previous") {
        el.classList.add("gallery-item-next");
      } else {
        el.classList.add("gallery-item-previous");
      }
    });

    previous.forEach((el) => {
      el.classList.remove("gallery-item-previous");

      if (newDirection == "previous") {
        el.classList.add("gallery-item-selected");
      } else {
        el.classList.add("gallery-item-first");
      }
    });

    next.forEach((el) => {
      el.classList.remove("gallery-item-next");

      if (newDirection == "previous") {
        el.classList.add("gallery-item-last");
      } else {
        el.classList.add("gallery-item-selected");
      }
    });

    first.forEach((el) => {
      el.classList.remove("gallery-item-first");

      if (newDirection == "previous") {
        el.classList.add("gallery-item-previous");
      } else {
        el.classList.add("gallery-item-last");
      }
    });

    last.forEach((el) => {
      el.classList.remove("gallery-item-last");

      if (newDirection == "previous") {
        el.classList.add("gallery-item-first");
      } else {
        el.classList.add("gallery-item-next");
      }
    });
  }, [directionNext, directionPrevious, newDirection]);

  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <p>
            What are you
            <span className="bold-span"> here to do?</span>
          </p>
        </div>
        <div className="row gallery-container">
          <GItems data={props.data} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div class="gallery-controls">
            <button
              class="gallery-controls-previous"
              onClick={() => {
                setDirectionPrevious((v) => v + 1);
                setNewDirection("previous");
              }}
            >
              previous
            </button>
            <button
              class="gallery-controls-next"
              onClick={() => {
                setDirectionNext((v) => v + 1);
                setNewDirection("next");
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
