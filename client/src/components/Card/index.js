import React from "react";

function Card(props) {
    // console.log(props)
    return (
        <div>
            {/* pseduo code for what I want to render on employee cards:  
            (Photo)

            Name: 
            Position: 
            Host of: 
            Spotlight: how to render with a link?? 
            
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
                        <li>
                            <strong>Host of Show:</strong> {props.host}
                        </li>
                        <li>
                            <strong>Guest on Show:</strong> {props.guest}
                        </li>
                        <li>
                            <strong>Spotlight:</strong> <a href={props.spotlight}>{props.spotlight}</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;