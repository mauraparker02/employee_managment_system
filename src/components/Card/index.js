import React from "react";

function Card(props) {
    console.log(props)
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
                            <strong>Host of Show:</strong> {props.show}
                        </li>
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