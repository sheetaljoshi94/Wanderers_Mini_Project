import React, { Component } from "react";
//import Redwoods from '../../assets/redwoods.jpg';
import Arrow from '../../assets/up_right.png';
import Castle from '../../assets/heidelberg_castle.jpg';
import Altstadt from '../../assets/altstadt.jpg';
import Kunigstuhl from '../../assets/kunikstul.JPG';
import Zoo from '../../assets/zoo.jpg';
import Schloss from '../../assets/schloss.jpg';
import Heiligenberg from '../../assets/heiligenberg.jpg';
import Bad from '../../assets/badwimpfeen.jpg';
import Dilsberg from '../../assets/dilsberg.jpg';
import Karl from '../../assets/karl.jpg';

class DestReview extends Component {
    render(){
        return (
            <>
            <br/><br/>
            <div class="row dest_margin" >
                <div className="col-4">
                <a href="/subdestinfo">
                    <div class="card" style={{width: "18rem;"}}>
                         <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Castle} alt="Cardcap"/>
                        <h5 class="centered_dest title_background grey" style={{marginLeft:"3%"}}>HEIDELBERG CASTLE<img src={Arrow} style={{width:"50px"}} alt=" "/></h5>
                    </div>
                    </a>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Altstadt} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-12%"}}>ALTSTADT<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Karl} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-2%"}}>Karl Theodor Bridge<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="row dest_margin">
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Kunigstuhl} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-11%"}}>Königstuhl<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Zoo} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-17%"}}>ZOO<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Schloss} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-14%"}}>Schloss <img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="row dest_margin">
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Heiligenberg} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-9%"}}>Heiligenberg<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Bad} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-9%"}}>Bad Wimpfen<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                         <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Dilsberg} alt="Cardcap"/>
                        <h6 class="centered_dest title_background grey" style={{marginLeft:"-5%"}}>Dilsberg Fortress<img src={Arrow} style={{width:"50px"}} alt=" "/></h6>
                    </div>
                    <div >
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span class="fa fa-star checked" style={{color:'#065B5B'}}></span>
                        <span>350 reviews</span>
                    </div>
                </div>
            </div>
            <br/><br/>
            </>
        )
    }
}
export default DestReview;