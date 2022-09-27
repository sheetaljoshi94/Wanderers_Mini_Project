import React, { Component } from "react";
//import Redwoods from '../../assets/redwoods.jpg';
//import Arrow from '../../assets/up_right.png';
import DestinationIcon from '../../assets/search-location.png';

class DestFilters extends Component {
    render(){
        return (
            <>
            <hr/>
                <div className="row" >
                    <img src={DestinationIcon}alt=" " style={{marginLeft:"5%",marginTop:"1%"}} height="30" width="30"/>
                    <span style={{marginTop:"1%"}}>&nbsp;&nbsp;&nbsp;&nbsp;FILTERS:</span>
                    
                    <div class="dropdown" style={{marginLeft:"10%"}}>
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            DESTINATION
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Redwoods</a>
                            <a class="dropdown-item" href="/">Beaches</a>
                            <a class="dropdown-item" href="/">Hiking</a>
                            <a class="dropdown-item" href="/">Adventure</a>
                            <a class="dropdown-item" href="/">Leisure</a>
                            <a class="dropdown-item" href="/">Towns</a>
                            <a class="dropdown-item" href="/">History</a>
                            <a class="dropdown-item" href="/">Others</a>
                        </div>
                    </div>

                    <div class="dropdown" style={{marginLeft:"10%"}}>
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            COUNTRY
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </div>
                    </div>

                    <div class="dropdown" style={{marginLeft:"10%"}}>
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            REGION
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </div>
                    </div>

                </div>
                

            <hr/>
            </>
        )
    }
}
export default DestFilters;