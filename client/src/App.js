import React from 'react';
import employees from "./employees.json";
import Card from "./components/Card/index";
// import Nav from "./components/Navbar";
// import Button from "./components/Button";


//An idividual show has NOT been selected yet, and the information hasn't been sorted YET 
class App extends React.Component {
  state = {
    search: "",
    name: ["From the Test Kitchen", "Gourmet Makes",],
    activeShow: "Select",
    employees: employees,
    filteredEmployees: [], 
    sortOrder: "ascending",
    sorted: false
  }
  componentDidMount() {
    console.log(this.state.employees[0].show.host)
    this.handleFilters();
  }
  handleFilters = () => {

    // saving the filtered employees in a temp array
    const temp = employees.filter((employee) => {
      if ( employee.name.includes(this.state.search)) {
        return true;
      }
      return false;
    })
  
    // setting state of filtered employees with temparray
    this.setState({
      filteredEmployees: temp
    })
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    

    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.handleFilters();

  };
  //render the search dropdown inside of a card here and render ALL the individual employees 
  render() {
    //place for drop down 
    console.log(this.state.search)
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
                    <input value={this.state.search} name="search" onChange={this.handleInputChange}></input>
                    {/* <select value={this.state.name} className="custom-select" id="inputGroupSelect01" onChange={(e) => this.state.name.handleChange(e)}>
                        <option>Select...</option>
                        {this.state.name.map(name => (
                            <option key={this.state.name} value={this.state.name[0]}>{this.state.name[1]}</option>
                        ))} */}
                        
                    {/* </select> */}
                    {/* <div className="input-group-append">
                         <button type="button" className="btn search-btn" onClick={this.state.name}>Search by Show</button>
                    </div> */}
                    
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
          {this.state.filteredEmployees.map(employees => (
            <Card
              name={employees.name}
              position={employees.position}
              host={employees.show.host}
              spotlight={employees.spotlight}
              guest={employees.show.guest}
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

// console.log(this.state.name)