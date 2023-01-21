import React, { useEffect, useState } from "react";

import SliderContent from "./SliderContent";
import Dots from "./Dots";
import sliderImage from "./SliderImage";
import "../css/Section.css";
 

const len = sliderImage.length - 1;

function Client(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
  <div className="client_section layout_padding">
    <div className="container">
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
           <Dots
             activeIndex={activeIndex}
             sliderImage={sliderImage}
             onclick={(activeIndex) => setActiveIndex(activeIndex)}
           />

          <div className="carousel-inner">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
          </div>

        </div>
    </div>
  </div>

 	);
	}


export default Client
