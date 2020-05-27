import React from 'react';
import employees from "./employees.json";
import Card from "./components/Card/index";
import Nav from "./components/Navbar";
import Button from "./components/Button";

//An idividual show has NOT been selected yet, and the information hasn't been sorted YET 
class App extends React.Component {
  state = {
    name: ["From the Test Kitchen", "Gourmet Makes"],
    activeShow: "Select",
    employees: employees,
    sortOrder: "ascending",
    sorted: false
  }

  //render the search dropdown inside of a card here and render ALL the individual employees 
  render() {
    //place for drop down 
    return (
      <div className="App">
        <div className= "row">
          <div className= "col-1"></div>
          <div className="col-10">
        <div class="card">
          <div class="card-body">
          <div>
            <form>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Show</label>
                    </div>
                    <select value={this.state.name} className="custom-select" id="inputGroupSelect01" onChange={(e) => this.name.handleChange(e)}>
                        <option>Select...</option>
                        {this.state.name.map(dept => (
                            <option key={this.state.name} value={this.state.name[0]}>{this.state.name[1]}</option>
                        ))}
                        
                    </select>
                    <div className="input-group-append">
                         <button type="button" className="btn search-btn" onClick={this.state.name}>Search by Show</button>
                    </div>
                </div>
            </form>
        </div>
    

  </div>
      </div>
    
        </div>
        {/* <Nav />
          <div className="container">
          <Button/> */}
          
        {/* All Employees  */}
        <div className="row">
          <div> 
          {this.state.employees.map(employees => (
            <Card
              name={employees.name}
              position={employees.position}
              host={employees.show}
              spotlight={employees.spotlight}
            />
            
          ))}
          </div>
        </div>
      </div>
    </div>


    );
  }
}
console.log(employees)
export default App;

