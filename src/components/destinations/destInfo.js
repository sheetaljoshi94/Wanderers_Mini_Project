import React, { Component } from "react";
import DestReview from '../destinations/destCardsReview';

class DestInfo extends Component {
    render(){
        return (
            <>
                <div class="destinfo-header-image">
                    <h1 class="centered title_background grey">HEIDELBERG</h1>
                </div>
                <br/>
                <div className="row">
                    <div className="col-5"></div>
                        <div className="col-2">
                        <center><i class="fas fa-lightbulb" style={{fontSize:'70px',color:'#065B5B'}}></i></center>
                        </div>
                    <div className="col-5"></div>
                </div>
                <div className="row">
                    <div className="col-5"></div>
                        <div className="col-2">
                            <h2><center>About</center></h2>
                        </div>
                    <div className="col-5"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                        <div className="col-10">
                            <h6>
                                <center>
                                    Heidelberg is a city worth falling in love with: the dreamy, romantic setting around the Old Bridge and the castle, an unparalleled choice of culture and entertainment wherever you go  and hearty yet heavenly cuisine.All of which is nestled between the Neckar River and the foothills of the Odenwald forest. It's easy to see why visitors flock straight for the castle, sat upon its throne on the hill some 70 metres above the Neckar River, when they comet o Heidelberg. Together with the Old Bridge, it is among the most impressive sights to be found in Germany. It is worth joining a guided tour of the town, if only to appreciate the history of this mighty fortress, which has seen a thing or two over the past 700 years. 
                                </center>
                            </h6>
                        </div>
                    <div className="col-1"></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-4"></div>
                        <div className="col-4">
                        <center><i class="fas fa-compass" style={{fontSize:'70px',color:'#065B5B'}}></i></center>
                        </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                        <div className="col-4">
                            <h2><center>PLACES TO VISIT NEAR BY</center></h2>
                        </div>
                    <div className="col-4"></div>
                </div>

                <DestReview/>
            </>
        )
    }
}
export default  DestInfo;
