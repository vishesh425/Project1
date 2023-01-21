import React from 'react';

import map_icon from '../images/map-icon.png'
import call_icon from '../images/call-icon.png'
import mail_icon from '../images/mail-icon.png'

import img_12 from '../images/img-12.png'

import fb_icon from '../images/fb-icon1.png';
import twitter_icon from '../images/twitter-icon1.png';
import linkedin_icon from '../images/linkedin-icon1.png';
import youtub_icon from '../images/youtub-icon1.png';

class Footer extends React.Component{
	render(){
		return(
			<>
     <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">About Financial</h4>
            <div className="location_text"><img src={map_icon} /><span className="padding_left_15">Locations</span></div>
            <div className="location_text"><img src={call_icon} /><span className="padding_left_15">+01 9876543210</span></div>
            <div className="location_text"><img src={mail_icon} /><span className="padding_left_15">demo@gmail.com</span></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">About Financial</h4>
            <p className="dolor_text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Instagram</h4>
            <div className="footer_images">
              <div className="footer_images_left">
                <div className="image_12"><img src={img_12} /></div>
                <div className="image_12"><img src={img_12} /></div>
                <div className="image_12"><img src={img_12} /></div>
              </div>
              <div className="footer_images_right">
                <div className="image_12"><img src={img_12} /></div>
                <div className="image_12"><img src={img_12} /></div>
                <div className="image_12"><img src={img_12} /></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="about_text">Newsletter</h4>
            <input type="text" className="mail_text" placeholder="Enter your email" name="Enter your email" />
            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
            <div className="footer_social_icon">
              <ul>
                <li><a href="#"><img src={fb_icon} /></a></li>
                 <li><a href="#"><img src={twitter_icon}/></a></li>
                <li><a href="#"><img src={linkedin_icon} /></a></li>
                <li><a href="#"><img src={youtub_icon} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_section">
          <div className="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html  Templates</a></div>
        </div>
      </div>
    </div>
    </>

			)
	}
}

export default Footer;