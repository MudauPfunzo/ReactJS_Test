import { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.galleryContainer = {};
    this.carouselContainer = {};
    this.carouselControls = {};
    this.carouselArray = [];
    this.setInitialState = this.setInitialState.bind(this);
    this.setCurrentState = this.setCurrentState.bind(this);
  }
  componentDidMount() {
    this.wordStates = document.querySelectorAll(".list-of-states li");
  }

  setInitialState() {
    this.carouselArray[0].classList.add("gallery-item-first");
    this.carouselArray[1].classList.add("gallery-item-previous");
    this.carouselArray[2].classList.add("gallery-item-selected");
    this.carouselArray[3].classList.add("gallery-item-next");
    this.carouselArray[4].classList.add("gallery-item-last");
  }
  setCurrentState(target, selected, previous, nect, first, last) {
    selected.foreach((el) => {
      el.classList.remove("gallery-item-selected");
      if (target.className == "gallery-controls-previous") {
        el.classList.add("gallery-item-next");
      } else {
        el.classList.add("gallery-item-previous");
      }
    });
    previous.forEach((el) => {
      el.classList.remove("gallery-item-previous");

      if (target.className == "gallery-controls-previous") {
        el.classList.add("gallery-item-selected");
      } else {
        el.classList.add("gallery-item-first");
      }
    });

    next.forEach((el) => {
      el.classList.remove("gallery-item-next");

      if (target.className == "gallery-controls-previous") {
        el.classList.add("gallery-item-last");
      } else {
        el.classList.add("gallery-item-selected");
      }
    });

    first.forEach((el) => {
      el.classList.remove("gallery-item-first");

      if (target.className == "gallery-controls-previous") {
        el.classList.add("gallery-item-previous");
      } else {
        el.classList.add("gallery-item-last");
      }
    });

    last.forEach((el) => {
      el.classList.remove("gallery-item-last");

      if (target.className == "gallery-controls-previous") {
        el.classList.add("gallery-item-first");
      } else {
        el.classList.add("gallery-item-next");
      }
    });
  }
  setNav() {
    this.state.galleryContainer.appendChild(
      document.createElement("ul")
    ).className = "gallery-nav";

    this.carouselArray.forEach((item) => {
      const nav = galleryContainer.lastElementChild;
      nav.appendChild(document.createElement("li"));
    });
  }
  // Construct the carousel controls
  setControls() {
    this.state.carouselControls.forEach((control) => {
      this.state.galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
    });

    !!this.state.galleryControlsContainer.childNodes[0]
      ? (this.state.galleryControlsContainer.childNodes[0].innerHTML =
          this.state.carouselControls[0])
      : null;
    !!this.state.galleryControlsContainer.childNodes[1]
      ? (this.state.galleryControlsContainer.childNodes[1].innerHTML =
          this.state.carouselControls[1])
      : null;
  }
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...this.state.galleryControlsContainer.childNodes];

    triggers.forEach((control) => {
      control.addEventListener("click", () => {
        const target = control;
        const selectedItem = document.querySelectorAll(
          ".gallery-item-selected"
        );
        const previousSelectedItem = document.querySelectorAll(
          ".gallery-item-previous"
        );
        const nextSelectedItem =
          document.querySelectorAll(".gallery-item-next");
        const firstCarouselItem = document.querySelectorAll(
          ".gallery-item-first"
        );
        const lastCarouselItem =
          document.querySelectorAll(".gallery-item-last");

        this.setCurrentState(
          target,
          selectedItem,
          previousSelectedItem,
          nextSelectedItem,
          firstCarouselItem,
          lastCarouselItem
        );
      });
    });
  }
}
