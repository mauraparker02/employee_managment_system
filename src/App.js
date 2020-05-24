import React from 'react';
import employees from "./employees.json";
import Card from "./components/Card/index";
import Nav from "./components/Navbar";
// import Button from "./components/Button";

//first what is the state 
class App extends React.Component {
  state = {
    name: ["Food Director", "Senior Associate Food Editor", "Test Kitchen Manager", "Assistant Web Editor", "Test Kitchen Assistant"],
    activeDepartment: "Select",
    employees: employees,
    sortOrder: "ascending",
    sorted: false
  }

  //Sort for WHAT to render can go here? 
    //Sort will be based on what button was pressed? 

    render() {
      return (
        <div className="App">
          <Nav />
          <div className="container">
            <div className="row">
              {this.state.employees.map(employees => (
                <Card
                  name={employees.name}
                  position={employees.position}
                  host={employees.show.host[0]}
                  spotlight={employees.spotlight}
                />
              ))}
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  export default App;

  