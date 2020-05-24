import React from 'react';
import employees from "./employees.json";
import Card from "./components/Card";
import Nav from "./components/Navbar";
import Button from "./components/Button";
import './App.css';

class App extends React.Component {
  state = {
    name: ["Food Director", "Senior Associate Food Editor", "Test Kitchen Manager", "Assistant Web Editor", "Test Kitchen Assistant"],
    activeDepartment: "Select",
    employees: employees,
    sortOrder: "ascending",
    sorted: false
  }

  }

export default App;