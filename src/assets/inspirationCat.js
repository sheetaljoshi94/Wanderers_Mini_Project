import React, { Component } from "react";
import family from '../../assets/family.jpg';
import culture from '../../assets/culture.jpg';
import adventure from '../../assets/aurora-1185464_1920.jpg';
import romance from '../../assets/love-5192377_1920.jpg';
import food from '../../assets/food1.jpg';
import shopping from '../../assets/SHOPPING.jpg';
import beaches from '../../assets/beaches2.jpg';
import media from '../../assets/media.jpg';
import spiritual from '../../assets/spiritual.jpg';
import rain from '../../assets/rain.jpg';
import boat from '../../assets/boat.jpg';
import boy from '../../assets/boy.jpg';
import cycle from '../../assets/cycle.jpg';
import aurora2 from '../../assets/aurora2.jpg';



class InspirationCat extends Component {
    render(){
        return (
            <>
             <div class="stories-header-image">
          
          <h1 class="centered title_background grey">I TRAVEL FOR THE...</h1>

 </div>
            
            <br/><br/>
            <div class="row dest_margin">
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={culture} alt="Cardcap"/>
                        <h3 class="inspiration_title white">CULTURE</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={family} alt="Cardcap"/>
                        <h3 class="inspiration_title white">FAMILY</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={adventure} alt="Cardcap"/>
                        <h3 class="inspiration_title white">ADVENTURE</h3>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row dest_margin">
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={food} alt="Cardcap"/>
                        <h3 class="inspiration_title white">FOOD & DRINKS</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={beaches} alt="Cardcap"/>
                        <h3 class="inspiration_title white">BEACHES</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={spiritual} alt="Cardcap"/>
                        <h3 class="inspiration_title white">SPIRITUAL</h3>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row dest_margin">
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={media} alt="Cardcap"/>
                        <h3 class="inspiration_title white">SOCIAL MEDIA</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={romance} alt="Cardcap"/>
                        <h3 class="inspiration_title white">ROMANCE</h3>
                    </div>
                </div>
                <div className="col-4">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={shopping} alt="Cardcap"/>
                        <h3 class="inspiration_title white">SHOPPING</h3>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                       
                        <center><h5>ADVENTURES TO GET YOU INSPIRED</h5></center>
                        
                    </div>
                    <div className="col-1"></div> 
                  
                </div>
                <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                <div class="card" style={{width: "18rem;"}}>
                <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="aurora-image" src={adventure} alt="Cardcap"/>
                        <h3 class="story_title white">Sleep under the stars</h3>
                        
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="row">
                <div class="card" style={{width: "18rem;"}}>
                <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={rain} alt="Cardcap"/>
                        <h3 class="story_title white">When it rains cats and dogs</h3>
                        
                        </div>
                        <br></br>
                        <div className="row">
                <div class="card" style={{width: "18rem;"}}>
                <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={boat} alt="Cardcap"/>
                        <h3 class="story_title white">Explore the unknown</h3>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-1"></div>
                    </div>
                    <br>
                    </br>       


  
        
            
            </>
        )
    }
}
export default InspirationCat;