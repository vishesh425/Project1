import React from 'react';
import Navbar from './Navbar';
import '../css/navbar.css';
import banner from '../images/banner-img.png'

class Header extends React.Component {
    render() {
        return (
            <div className="header_section">
                <div className="header_left">
                    <Navbar />
                    <div className="banner_main">
                        <h1 className="banner_taital">financial <br />Service</h1>
                        <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                        <div className="btn_main">
                            <div className="more_bt"><a href="#">Read More </a></div>
                            <div className="contact_bt"><a href="#">Contact Us</a></div>
                        </div>
                    </div>
                </div>
                <div className="header_right">
                    <img src={banner} className="banner_img" />
                </div>
            </div>

        )
    }
}

export default Header;