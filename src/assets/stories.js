import React, { Component } from "react";
import Inspcat from "./inspirationCat";
import mount from '../../assets/mountain_girl.jpg';
import cycle from '../../assets/cycle.jpg';
import aurora2 from '../../assets/aurora2.jpg';
import Carousel from "../carousel";

class Story extends Component {
    render(){
        return (
            <>
            <div class="aurora-header-image">
          
          <h1 class="centered title_background grey">AURORA SURPRISE: <br></br>Sleep under the stars</h1>
          
            </div>
            <br></br>

               <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                       
                        <left><h5>Is it Really Magic?</h5></left>
                        <p className="grey ">It sure looks like it. But in fact, for auroras to occur and be visible to us a lot of natural factors need to align just right. This may sound like science-fiction, but it all begins with a space journey. Around 150 million kilometers away, massive flares from the sun send bursts of charged particles streaming toward Earth. Around 40 hours later, when the particles in our upper atmosphere collide with atoms, that's when things really start to get interesting.</p>
                    </div>
                    <div className="col-1"></div> 
                </div>
                <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="girl-image" src={mount} alt="Cardcap"/>
                        
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="row">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={cycle} alt="Cardcap"/>
                        
                        </div>
                        <br></br>
                        <div className="row">
                <div class="card" style={{width: "18rem;"}}>
                        <img class="card-img-top" src={aurora2} alt="Cardcap"/>
                       
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col-1"></div> 
                    </div>
                    <br>
                    </br>                    
                    <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                       
                        
                        <p className="grey" align="justify">
                            The atmospheric collision results in glowing emissions that, depending on the type of atoms involved,
                             the strength of solar activity and the pull of Earth's magnetic forces, take on different shapes, motions, 
                             colors and brightness. Green is the most common color of northern lights, though violet or red hues can also be seen more rarely, and the lights can appear, among other ways, as a rippling curtain, streaming rays or an arc.
                             The atmospheric collision results in glowing emissions that, depending on the type of atoms involved,
                             the strength of solar activity and the pull of Earth's magnetic forces, take on different shapes, motions, 
                             colors and brightness. Green is the most common color of northern lights, though violet or red hues can also be seen more rarely, and the lights can appear, among other ways, as a rippling curtain, streaming rays or an arc.
                           <br></br>
                           <br></br>
                           Isn’t science magical?
                           <br></br>
                           <br></br>
                          <b>When can we see northern lights ?</b>
                          <br></br>
                           <br></br>

                            Unfortunately, there is no magic on-off switch for these lights, 
                            although they are most likely to occur in Scandinavia during wintertime. 
                            Night-time darkness is necessary for viewing, so schedule your trip between September and April
                             when the sunset times are in your favor (ideally October - March).
                             Unfortunately, there is no magic on-off switch for these lights, 
                            although they are most likely to occur in Scandinavia during wintertime. 
                            Night-time darkness is necessary for viewing, so schedule your trip between September and April
                             when the sunset times are in your favor (ideally October - March).
                             

                             </p>
                    </div>
                    <div className="col-1"></div> 
                </div>
                <br></br><br></br>
        
                <Carousel/>
                <br></br><br></br>
            </>
        )     
    }
}
export default Story;