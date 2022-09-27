import React, { Component } from "react";
import Arrow from '../../assets/up_right.png';
import DestFilters from "./destFilters";
import Header from "../header";
import Heidelberg from '../../assets/Heidelberg.jpg';
import Nuremberg from '../../assets/Nuremberg.jpg';
import Weimar from '../../assets/weimar.jpg';
import Leipzig from '../../assets/Leipzig.jpg';
import Bonn from '../../assets/Bonn.jpg';
import Lubeck from '../../assets/lubeck.jpg';

class DestHome extends Component {
    render(){
        return (
            <>
            <Header/>
            <DestFilters/>
            
            <br/><br/>
            <div class="row dest_margin">
                <div className="col-4">
                    <a href="/destinfo">
                        <div class="card" style={{width: "18rem;"}}>
                            <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                                <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                            </button>
                            <img class="card-img-top" src={Heidelberg} alt="Cardcap"/>
                            <h3 class="centered_dest title_background grey">HEIDELBERG<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
                        </div>
                    </a>
                    
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Nuremberg} alt="Cardcap"/>
                        <h3 class="centered_dest title_background grey">NUREMBERG<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Weimar} alt="Cardcap"/>
                        <h3 class="centered_dest title_background grey" style={{marginLeft:"-6%"}}>WEIMAR<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
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
                        <img class="card-img-top" src={Leipzig} alt="Cardcap"/>
                        <h3 class="centered_dest title_background grey" style={{marginLeft:"-8%"}}>LEIPZIG<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Bonn} alt="Cardcap"/>
                        <h3 class="centered_dest title_background grey"  style={{marginLeft:"-11%"}}>BONN<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <button type="button" class="btn btn-sm px-3 mb-2 material-tooltip-main centered_heart" style={{borderRadius:"50%"}} data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                            <i class="far fa-heart" style={{marginRight:"2%"}}></i>
                        </button>
                        <img class="card-img-top" src={Lubeck} alt="Cardcap"/>
                        <h3 class="centered_dest title_background grey">LüBECK<img src={Arrow} style={{width:"50px"}} alt=" "/></h3>
                    </div>
                </div>
            </div>
            <br/><br/>
            </>
        )
    }
}
export default DestHome;