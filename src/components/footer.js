import React, { Component } from "react";
import Logo from '../assets/logo.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Pintrest from '../assets/pinterest-logo.png';
import Youtube from '../assets/youtube.png';
import Twitter from '../assets/twitter.png';
//import { Navbar,Nav,NavDropdown,Form,Button,FormControl } from 'react-bootstrap';
class Footer extends Component{
    render(){
        return (
            // <footer className="site-footer">
            //     <div class="stories-footer-image">
                
            //     </div>
            // </footer>
            

            <footer>
                <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <a href=" " className="white_color">ABOUT US</a><br/><br/>
                        <a href=" " className="white_color">CONTACT US</a><br/><br/>
                        <a href=" " className="white_color">FAQ</a>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <center><a class="nav_brand_margin_right_left" href="/" ><img src={Logo}alt=" " height="80" width="200"/></a></center>
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div className="white_color"><h6>Address</h6><h6>Ludwig-Guttmann-Straße 6, 69123 Heidelberg</h6></div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-4">
                        <center>
                            <p className="white_color">Copyright © Wanderers | All Rights Reserved</p>
                        </center>
                    </div>

                    <div class="col-md-4">
                        <img src={Instagram}alt=" " style={{marginRight:"2%"}} height="20" width="20"/>
                        <img src={Facebook}alt=" " style={{marginRight:"2%"}} height="20" width="20"/>
                        <img src={Pintrest}alt=" " style={{marginRight:"2%"}} height="20" width="20"/>
                        <img src={Youtube}alt=" " style={{marginRight:"2%"}} height="20" width="20"/>
                        <img src={Twitter}alt=" " style={{marginRight:"2%"}} height="20" width="20"/>
                    </div>

                </div>

                
                </div>
            </footer>

            )
    }
}
export default Footer;