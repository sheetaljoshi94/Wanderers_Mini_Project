import React, { Component } from "react";
import LocationPin from '../../assets/pin.png';
import Check from '../../assets/check.png';
import People from '../../assets/people.png';
import Chat from '../../assets/chatting.png';
import DatePicker from "react-datepicker";
import Connect1 from "../../assets/Story2.jpg";
import Connect2 from "../../assets/Story3.jpg";
import Connect3 from "../../assets/Story4.jpg";
import France from "../../assets/france.png";
import Calender from "../../assets/calendar.png";
import Cash from "../../assets/payment-method.png";
import Info from "../../assets/info.png";
 
import "react-datepicker/dist/react-datepicker.css";

class BuddyHome extends Component{
    render(){
        return (
            <>
                <div class="buddy-header-image">
                    <h1 class="centered title_background grey">TRAVEL BUDDIES FOR ESCAPADES</h1>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1">
                        
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <center><img class="img img-responsive" src={LocationPin} style={{width:"50px"}} width="10" alt="Cardcap"/></center>
                                    </div>
                                    <div className="col-md-6">
                                           <center><strong><h5>1.Create Trip</h5></strong></center>
                                           <center><p>Wait for others to join or join existing trips.</p></center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <center><img class="img img-responsive" src={Check} style={{width:"50px"}} width="10" alt="Cardcap"/></center>
                                    </div>
                                    <div className="col-md-6">
                                            <center><strong><h5>3.Approve Buddies</h5></strong></center>
                                           <center><p>Approve buddies you like.</p></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <center><img class="img img-responsive" src={People} style={{width:"50px"}} width="10" alt="Cardcap"/></center>
                                    </div>
                                    <div className="col-md-6">
                                           <center><strong><h5>3.Invite Travelleres</h5></strong></center>
                                           <center><p>Let others know abaout your trip by inviting or wait someone to join.</p></center>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <center><img class="img img-responsive" src={Chat} style={{width:"50px"}} width="10" alt="Cardcap"/></center>
                                    </div>
                                    <div className="col-md-6">
                                            <center><strong><h5>4.Start Chat</h5></strong></center>
                                           <center><p>Start planning by using chat option.</p></center>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <h3>
                        FIND TRAVEL BUDDY / MEET LOCALS
                    </h3>
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                            <div class="card" style={{width: "18rem;",height: "8rem;"}}>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div class="dropdown">
                                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Destinations
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="/">Nature</a>
                                                    <a class="dropdown-item" href="/">Beaches</a>
                                                    <a class="dropdown-item" href="/">Family</a>
                                                    <a class="dropdown-item" href="/">Adventure</a>
                                                    <a class="dropdown-item" href="/">Leisure</a>
                                                    <a class="dropdown-item" href="/">Towns</a>
                                                    <a class="dropdown-item" href="/">History</a>
                                                    <a class="dropdown-item" href="/">Others</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <DatePicker  placeholderText="From"/>
                                        </div>
                                        <div className="col-md-3">
                                            <DatePicker  placeholderText="To"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Language" name="search"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div class="dropdown">
                                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Gender
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="/">Male</a>
                                                    <a class="dropdown-item" href="/">Female</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Budget Range" name="search"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Age From" name="search"/>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" placeholder="Age To" name="search"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-3">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                                Buddy
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                                Localite
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold'}}>Search</button>
                                        </div>
                                        <div className="col-md-3">
                                            <p><span style={{color:'#065B5B',fontSize:'20px',fontWeight:'500'}}>+</span><a href="/">Add yourself to list </a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-10" >
                        <div class="row">
                                <div class="col-md-4" style={{marginLeft:"-3%"}}>
                                    <img src={Connect1} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Trip to Paris for christmas</h5>
                                    <p class="card-text">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={France} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Destination : France
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={People} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Looking for female
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Calender} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        Dates : 25/12/2020 - 01/01/2021
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Cash} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Budget : $500 - $2500
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src={Info} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-10" style={{marginLeft:"-2%"}}>
                                                        Hi! My name is Emma, I am from Kent in the UK. I am happy, positive and adventurous yet I am a peaceful person. I love to travel
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <a href="/chat"><button type="button"   data-target = "#modal-1" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold',float:"right"}}>Connect</button></a><br/>
                                    </p>
                                   
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-10" >
                        <div class="row">
                                <div class="col-md-4" style={{marginLeft:"-3%"}}>
                                    <img src={Connect2} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Trip to Italy for New Year</h5>
                                    <p class="card-text">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={France} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Destination : France
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={People} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Looking for female
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Calender} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        Dates : 25/12/2020 - 01/01/2021
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Cash} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Budget : $500 - $2500
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row" >
                                                    <div className="col-md-2">
                                                        <img src={Info} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-10" style={{marginLeft:"-2%"}}>
                                                        Hi! My name is Emma, I am from Kent in the UK. I am happy, positive and adventurous yet I am a peaceful person. I love to travel
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <a href="/chat"><button type="button"   data-target = "#modal-1" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold',float:"right"}}>Connect</button></a>
                                    </p>
                                    
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-10" >
                        <div class="row">
                                <div class="col-md-4" style={{marginLeft:"-3%"}}>
                                    <img src={Connect3} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Trip to Italy for New Year</h5>
                                    <p class="card-text">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={France} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Destination : France
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={People} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Looking for female
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Calender} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        Dates : 25/12/2020 - 01/01/2021
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Cash} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Budget : $500 - $2500
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row" >
                                                    <div className="col-md-2">
                                                        <img src={Info} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-10" style={{marginLeft:"-2%"}}>
                                                        Hi! My name is Emma, I am from Kent in the UK. I am happy, positive and adventurous yet I am a peaceful person. I love to travel
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <a href="/chat"><button type="button"   data-target = "#modal-1" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold',float:"right"}}>Connect</button></a>
                                    </p>
                                    
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div class="card col-md-10" >
                        <div class="row">
                                <div class="col-md-4" style={{marginLeft:"-3%"}}>
                                    <img src={Connect1} class="card-img" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Trip to Paris for christmas</h5>
                                    <p class="card-text">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={France} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Destination : France
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={People} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Looking for female
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Calender} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                        Dates : 25/12/2020 - 01/01/2021
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                         <img src={Cash} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-9">
                                                            Budget : $500 - $2500
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src={Info} class="card-img" style={{width:"30px"}} alt="..."/>
                                                    </div>
                                                    <div className="col-md-10" style={{marginLeft:"-2%"}}>
                                                        Hi! My name is Emma, I am from Kent in the UK. I am happy, positive and adventurous yet I am a peaceful person. I love to travel
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <a href="/chat"><button type="button"   data-target = "#modal-1" class="btn" style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold',float:"right"}}>Connect</button></a>
                                    </p>
                                   
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
                <br/><br/>




            {/* Modal chat */}

            
            </>
        )

        }
}
export default BuddyHome;