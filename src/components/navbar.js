import React, { Component } from "react";
import Logo from '../assets/logo.png'
//import { Navbar,Nav,NavDropdown,Form,Button,FormControl } from 'react-bootstrap';
class Navbar extends Component{

    render(){
      return (

        <div className="navbar-centered">
			<nav class="navbar navbar-expand-lg navbar-light navbar_color navbar_size">
                <a class="navbar-brand nav_brand_margin_right_left" href="/" ><img src={Logo}alt=" " height="80" width="200"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse nav_element" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto navbar-list">
                            <li class="nav-item active">
                                <a class="nav-link white_color" href="/destinations"><span className="white_color">DESTINATIONS</span> <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white_color" href="/inspirations"><span className="white_color">INSPIRATION</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link white_color" href="/buddy"><span className="white_color ">TRAVEL BUDDY</span></a>
                            </li>

                    </ul>
                    <form class="example">
                        <input type="text" style={{width:"20vw"}} placeholder="Search for city,place and more..." name="search"/><button type="button" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold',marginTop:'-1.3%'}}><i class="fas fa-search"></i></button>
                    </form>

                    <div class="dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0" alt="avatarimage" height="35"/>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/login">Login</a>
                            <a class="dropdown-item" href="/signup">Signup</a>
                            <a class="dropdown-item" href="/chat">Chat</a>
                    </div>

                </div>

                </div>
            </nav>	
		</div>
    
      )
    }
  
  }
  export default Navbar;