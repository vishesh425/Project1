import React from 'react';

import '../css/Section.css'

import img_7 from '../images/img-7.png';
import img_8 from '../images/img-8.png';
import img_9 from '../images/img-9.png';
import img_10 from '../images/img-10.png';

import fb_icon from '../images/fb-icon.png';
import twitter_icon from '../images/twitter-icon.png';
import linkedin_icon from '../images/linkedin-icon.png';

class Team extends React.Component{
	render(){
		return(
			 <div className="team_section layout_padding">
      <div className="container">
        <h1 className="what_taital Teamanim">Our Team and experts</h1>
        <p className="what_text_1">It is a long established fact that a reader will be distracted by the readable content of a </p>
        <div className="team_section_2 layout_padding">
          <div className="row">
            <div className="col-sm-3">
              <img src={img_7} className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={twitter_icon} /></a></li>
                  <li><a href="#"><img src={linkedin_icon} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_8} className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={linkedin_icon} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_9} className="image_7" />
              <p className="readable_text">Readable</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={linkedin_icon} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <img src={img_10} className="image_7" />
              <p className="readable_text">Content</p>
              <p className="readable_text_1">Follow Us</p>
              <div className="social_icon">
                <ul>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={fb_icon} /></a></li>
                  <li><a href="#"><img src={linkedin_icon} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
	}
}
export default Team;