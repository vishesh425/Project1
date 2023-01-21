import React from 'react';

import '../css/Section.css'

import image_2 from '../images/img-2.png'
import image_3 from '../images/img-3.png'
import image_4 from '../images/img-4.png'
import image_5 from '../images/img-5.png'
import image_6 from '../images/img-6.png'
import search_icon from '../images/search-icon.png'
import icon_1 from '../images/icon-1.png'
import icon_2 from '../images/icon-2.png'
import icon_3 from '../images/icon-3.png'
import icon_4 from '../images/icon-4.png'



class Project extends React.Component {
	render (){
		return( 
		<div>
        <div className="project_section  layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="project_main">
                    <h1 className="services_taital projectanim ">Our projects</h1>
                    <p className="services_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
                    <div className="moremore_bt"><a href="#">Read More </a></div>
                    <div className="image_6"><img src={image_6}/></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="images_main">
                    <div className="images_left">
                      <div className="container_1">
                        <img src={image_2} alt="Avatar" className="image"  />
                        <div className="middle">
                          <div className="text"><img src={search_icon} /></div>
                          <h2 className="fact_text">Established Fact</h2>
                        </div>
                      </div>
                      <div className="container_1">
                        <img src={image_3} alt="Avatar" className="image"  />
                        <div className="middle">
                          <div className="text"><img src={search_icon} /></div>
                          <h2 className="fact_text">Established Fact</h2>
                        </div>
                      </div>
                    </div>
                    <div className="images_right">
                      <div className="container_1">
                        <img src={image_4} alt="Avatar" className="image"  />
                        <div className="middle">
                          <div className="text"><img src={search_icon} /></div>
                          <h2 className="fact_text">Established Fact</h2>
                        </div>
                      </div>
                      <div className="container_1">
                        <img src={image_5} alt="Avatar" className="image"  />
                        <div className="middle">
                          <div className="text"><img src={search_icon} /></div>
                          <h2 className="fact_text">Established Fact</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>	
          <div className="project_section_2 layout_padding">
             <div className="container">
               <div className="row">
                 <div className="col-lg-3 col-sm-6">
                   <div className="icon_1"><img src={icon_3} /></div>
                   <h3 className="accounting_text_1">1000+</h3>
                   <p className="yers_text">Years of Business</p>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <div className="icon_1"><img src={icon_4} /></div>
                   <h3 className="accounting_text_1">20000+</h3>
                   <p className="yers_text">Projects Delivered</p>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <div className="icon_1"><img src={icon_2} /></div>
                   <h3 className="accounting_text_1">10000+</h3>
                   <p className="yers_text">Satisfied Customers</p>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <div className="icon_1"><img src={icon_1} /></div>
                   <h3 className="accounting_text_1">1500+</h3>
                   <p className="yers_text">Services</p>
                 </div>
               </div>
             </div>
          </div>	  
        </div>
        )
	}
}
export default Project;