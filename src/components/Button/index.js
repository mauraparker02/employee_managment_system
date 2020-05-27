// import React from "react";

// function Button(props) {
//             {/* pseduo code for what I want the buttons to do: 

//             I want to be able to sort by Show & by Position  

//             //input form with a dropdown menu to filter results by show sections: 
//                     //From the Test Kitchen
//                         //Host
//                     //Back-to-Back Chef 
//                         //Host 
//                             //Guest (Only if there's a guest)
//                     //One of Everything 
//                         //Host 
//                             //Guest (Only if there's a guest)
//                     //Reverse Engineering 
//                         //Host 
//                             //Guest (Only if there's a guest)
//                     //Molly Tries 
//                         //Host 
//                             //Guest (Only if there's a guest)
//                     //It's Alive 
//                         //Host 
//                             //Guest (Only if there's a guest)
//                     //Gormet Makes 
//                         //Host 
//                             //Guest (Only if there's a guest)
//             //input a form with a dropdown menu to filter employee cards by Position:
//                     Sections: 
//                     // "Food Director" 
//                         resulting id: 9
//                     // "Senior Associate Food Editor" 
//                         resulting id: 1, 3, 4, 7 
//                     // "Test Kitchen Manager" 
//                         resulting id: 2 
//                     // "Assistant Web Editor" 
//                         resulting id: 6 
//                     //"Test Kitchen Assistant" 
//                         resulting id: 5, 8, 10  */}

// return (
//         <div>
//             <form>
//                 <div className="input-group mb-3">
//                     <div className="input-group-prepend">
//                         <label className="input-group-text" for="inputGroupSelect01">Shows</label>
//                     </div>
//                     <select value={props.activePosition} className="custom-select" id="inputGroupSelect01" onChange={(e) => props.handleChange(e)}>
//                         <option>Select...</option>
//                         {props.position.map(position => (
//                             <option key={props.id} value={position}>{position}</option>
//                         ))}
                        
//                     </select>
//                     <div className="input-group-append">
//                          <button type="button" className="btn search-btn" onClick={props.search}>Search</button>
//                     </div>
//                 </div>
//             </form>
            
//             {/* Button to Organize Show: Show Title 
//                                         Host 
//                                             Guest  */}
//             {/* <p className="sort"><button type="button" className="btn sort-btn" onClick={props.sortedShow}>Sort by show</button></p> */}
//         </div>
//     );
// }

// export default Button;
