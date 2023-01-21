import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (

     <ol className="carousel-indicators">
     {sliderImage.map((slider, index)=>( 
        <li 
        key={index} data-target="#carouselExampleIndicators" data-slide-to="0"
         className={`${activeIndex === index ? "dot active" : "dot"}`}
          onClick={() => onclick(index)}></li>
      ))} 
      </ol>
   


  );
}

export default Dots;

 
 
