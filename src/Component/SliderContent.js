import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <>
     {sliderImage.map((slider, index)=>
      <div  className="carousel-item" key={index} className={index === activeIndex ? "carousel-item active" : " carousel-item "} >
         <h1 className="what_taital Clientanim" >{slider.title}</h1>
           <div className="client_section_2 layout_padding">
             <ul>
               <li><img src={slider.image} className="round_1" /></li>
               <li><img src={slider.image2} className="image_11" /></li>
               <li><img src={slider.image3} className="round_2" /></li>
             </ul>
              <p className="dummy_text">{slider.quote}</p>
            </div>
          </div>

        )}
    </>
      

  );
}

export default SliderContent;