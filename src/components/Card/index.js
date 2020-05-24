import React from "react";

function Card(props) {
    return (
        <div>
            {/* pseduo code for what I want to render on employee cards:  
            (Photo)

            Name: 
            Position: 
            Host of: 
            Spotlight: 
            
            // */}
            <div className="card">
                <div className="content">
                    <ul>
                        <li id="employee">
                            {props.name}
                        </li>
                        <li>
                            <strong>Position:</strong> {props.position}
                        </li>
                        {/* <li>
                            <strong>Host of Show:</strong> {props.show.host[0]}
                        </li> */}
                        <li>
                            <strong>Spotlight:</strong> {props.spotlight}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;