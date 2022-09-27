import React, { Component } from "react";
import DestinationIcon from '../assets/search-location.png';
import ChatIcon from '../assets/chatting.png';
import ReadIcon from '../assets/read.png';
import Redwoods from '../assets/redwoods.jpg';
import Beaches from '../assets/beaches.jpg';
import Hiking from '../assets/hiking.jpg';
import Adventure from '../assets/adventure.jpg';
import Leisure from '../assets/leisure.jpg';
import Towns from '../assets/towns.jpg';
import History from '../assets/history.jpg';
import Others from '../assets/others.jpg';

import Carousel from '../components/carousel';
import InfiniteCarousel from '../components/infiniteCarousel';
import Header from "./header";

class Body extends Component {
    render(){
        return (
            <>
                <Header/>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <center><img src={DestinationIcon}alt=" " style={{marginRight:"2%"}} height="80" width="80"/><br/></center>
                        <center><h5>START PLANNING YOUR DESTINATION</h5><b><p className="grey">Select a category below to uncover the endless activities.When you find a destination that suits your vacation style,add it to your bucketlist and find travel buddy</p></b> </center>
                    </div>
                    <div className="col-4"></div> 
                </div>

                    
                    <div class="container">
                        <div className="row">
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box redwoods" alt="100x100" src={Redwoods}  data-holder-rendered="true" width="252" height="252"/>
                                <h5 className="centered_dest_home white_color">REDWOODS</h5>
                            </div>
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100" src={Beaches} data-holder-rendered="true" width="252" height="252"/>
                                <h5 className="centered_dest_home white_color">BEACHES</h5>
                            </div>
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100" src={Hiking} data-holder-rendered="true" width="252" height="252" />
                                <h5 className="centered_dest_home white_color">HIKING</h5>
                            </div>
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100" src={Adventure} data-holder-rendered="true" width="252" height="252"/>
                                <h5 className="centered_dest_home white_color">ADVENTURE</h5>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="container">
                        <div className="row">
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100"  src={Leisure} data-holder-rendered="true" width="252" height="252" />
                                <h5 className="centered_dest_home white_color">LEISURE</h5>
                            </div>
                            <div className="col-3">
                                <a href="/destinations">
                                    <img class="rounded-circle z-depth-2 box" alt="100x100" src={Towns} data-holder-rendered="true" width="252" height="252"/>
                                    <h5 className="centered_dest_home white_color">TOWNS</h5>
                                </a>
                            </div>
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100" src={History} data-holder-rendered="true" width="252" height="252"/>
                                <h5 className="centered_dest_home white_color">HISTORY</h5>
                            </div>
                            <div className="col-3">
                                <img class="rounded-circle z-depth-2 box" alt="100x100" src={Others} data-holder-rendered="true" width="252" height="252"/>
                                <h5 className="centered_dest_home white_color">OTHERS</h5>
                            </div>
                        </div>
                    </div>

                    <br/><br/><br/><br/>

                    <div className="row">
                         <div className="col-4"></div>
                            <div className="col-4">
                                <center><img src={ChatIcon}alt=" " style={{marginRight:"2%"}} height="80" width="80"/><br/></center>
                                <center><h5>GET INSPIRED BY STORIES</h5><b><p className="grey">Read travel stories and get inspired to travel</p></b> </center>
                            </div>
                        <div className="col-4"></div> 
                    </div>
                    <br/>
                    <Carousel/>

                    <br/><br/><br/><br/>

                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <center><img src={ReadIcon}alt=" " style={{marginRight:"2%"}} height="80" width="80"/><br/></center>
                            <center><h5>CONNECT WITH FELLOW TRAVELERS</h5><b><p className="grey">Chat with fellow travelers and travel together with your budget.</p></b> </center>
                        </div>
                        <div className="col-4"></div> 
                    </div>
                    <br/>
                    <InfiniteCarousel/>
                    <br/><br/><br/><br/>

                
            </>
        )
    }
}
export default Body;