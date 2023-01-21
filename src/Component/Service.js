import React from "react";
import '../css/Section.css';

import icon_1 from '../images/icon-1.png'
import icon_2 from '../images/icon-2.png'
import icon_3 from '../images/icon-3.png'
import icon_4 from '../images/icon-4.png'
	


class Service extends React.Component{
	render(){
		return(
			  <div className="what_we_do_section layout_padding">
      <div className="container">
        <h1 className="what_taital Serviceanim">WHAT WE DO</h1>
        <p className="what_text">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="what_we_do_section_2">
          <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_1} /></div>
              <h3 className="accounting_text">Accounting</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main active">
              <div className="icon_1"><img src={icon_2} /></div>
              <h3 className="accounting_text">Advisor</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_3} /></div>
              <h3 className="accounting_text">Investment</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_4} /></div>
              <h3 className="accounting_text">Financial</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Read More </a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  
			)
	}
}

export default Service