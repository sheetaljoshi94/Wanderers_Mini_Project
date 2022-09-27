import React, { Component } from "react";
//import DestReview from '../destinations/destCardsReview';
import Restroom from '../../assets/toilets.png'
import Walk from '../../assets/walk.png'
import Pets from '../../assets/pawprint.png'
import Weather from '../../assets/cloudy.png'
import Food from '../../assets/fast-food.png'
import Disabled from '../../assets/disabled.png'
import Payment from '../../assets/payment-method.png'
import Virus from '../../assets/virus.png'
import Map from '../../assets/map.png'
import Compass from '../../assets/compass.png'
import Star from '../../assets/star.png'
import Carousel from '../carousel';
import Review1 from '../../assets/Story4.jpg'
import Review2 from '../../assets/Story2.jpg'
import Review3 from '../../assets/Story3.jpg'
import Buddies from '../../assets/people.png'
import InfiniteCarousel from '../infiniteCarousel';

class DestInfo extends Component {
    render(){
        return (
            <>
                <div class="subdestinfo-header-image">
                    <h1 class="centered title_background grey">HEIDELBERG CASTLE</h1>
                </div>
                <br/>
                <div className="row">
                    <div className='col-md-6'>
                        <Carousel/>
                    </div>
                    <div className='col-md-6'>
                        <div className="row">
                            <div className="col-3"></div>
                                <div className="col-6">
                                <center><i class="fas fa-lightbulb" style={{fontSize:'70px',color:'#065B5B'}}></i><span><h4>ABOUT</h4></span></center>
                                </div>
                            <div className="col-3"></div>
                        </div>

                        <div className="row">
                            <div className="col-1"></div>
                                <div className="col-10">
                                    <p>The castle has a history almost as old as the cityitself. The first parts of the castle were constructed around 1300, but it wasn’t beforePrince Elector Ruprecht III (1398 – 1410) that the castle was used as a regal residence. Until it was destroyed by lightning in 1764leaving it permanently uninhabitable, the castlwas the residence for most of the Prince Electors.In 1800, Count Charles de Graimbergbegan the difficult task of conserving the castle ruins.Up until this time, the citizens of Heidelberg had used the castle stones to build new houses.</p>
                                </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <div>
                <br/>
                    <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <i class="fas fa-clock" style={{fontSize:"40px",color:'#065B5B'}}></i>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Approx. around 2-3  hours.</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Restroom}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Restroom available</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Walk}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Moderate</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Pets}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Pets Allowed</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Weather}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Weather is seasonal, and temperatures range from 55°F-60°F. We suggest wearing layers.</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Food}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Food on-site available and can bring a snack or picnic</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Disabled}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>Wheelchair accessible</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Payment}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <p>€ 4.00 adults,€ 2.00 concession.€ 10.00 families,€ 4.00 audio guide.€ 3.60 for large groups of more than 20 people.</p>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Virus} alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <button type="button" class="btn btn-sm px-3 mb-2 " style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold'}}>KNOW MORE ON COVID</button>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-2">
                                        <img src={Map}alt=" " style={{marginLeft:"5%"}} height="40" width="40"/>
                                    </div>
                                    <div className="col-md-5">
                                        <button type="button" class="btn btn-sm px-3 mb-2 " style={{fontSize:"12px",backgroundColor:'#065B5B',color:'#fff',fontWeight:'bold'}}>GET DIRECTIONS</button>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                        </div>

                    <hr/>
                    <br/>
                </div>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <center><img src={Compass} alt=" "  height="70" width="70"/></center>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <center><h4>NEAR BY DESTINATIONS</h4></center>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br/><br/>
                <div className="row">
                    <Carousel/>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <center><img src={Star} alt=" "  height="30" width="30"/><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span></center>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <center><h4>TRAVELER REVIEWS</h4></center>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br/>
                <div className="row">
                    <div class="card-group">
                        <div className="col-md-4">
                            <div class="card" style={{width: "18rem;",height: "8rem;"}}>
                                <img class="card-img-top" src={Review1}  alt="Cardcap"/>
                                <div class="card-body">
                                    <center><h5 class="card-title">EMMA</h5></center>
                                    <p class="card-text"><center><img src={Star} alt=" "  height="30" width="30"/><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span></center></p>
                                    <center><p>Castle is very beatiful.</p></center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" style={{width: "18rem;"}}>
                                <img class="card-img-top" src={Review2} alt="Cardcap"/>
                                <div class="card-body">
                                    <center><h5 class="card-title">JACKSON</h5></center>
                                    <p class="card-text"><center><img src={Star} alt=" "  height="30" width="30"/><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span></center></p>
                                    <center><p>Castle is very beatiful.</p></center>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card" style={{width: "18rem;"}}>
                                <img class="card-img-top" src={Review3} alt="Cardcap"/>
                                <div class="card-body">
                                    <center><h5 class="card-title">RACHEL</h5></center>
                                    <p class="card-text"><center><img src={Star} alt=" "  height="30" width="30"/><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span><span><img src={Star} alt=" "  height="30" width="30"/></span></center></p>
                                    <center><p>Castle is very beatiful.</p></center>
                                </div>
                            </div>
                        </div>
                        </div>
                    
                    
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <center><img src={Buddies} alt=" "  height="70" width="70"/></center>
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <center><h4>FIND BUDDIES TRAVELLING TO HEIDELBERG</h4></center>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br/>
                <InfiniteCarousel/>
                <br/><br/>
            </>
        )
    }
}
export default  DestInfo;
