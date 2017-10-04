import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Critter from './models/Critter'
import CritterList from './CritterList'
import CreateCritter from './CreateCritter'

class App extends Component {
  constructor(props){
    super(props);
    this.handleCreate = this.handleCreate.bind(this);

    this.state = {
      masterCritterList: [],
    }
  }
  handleCreate(name) {
    let newCritter = new Critter(name);
    let newCritterList = this.state.masterCritterList.slice();
    newCritterList.push(newCritter);
    this.setState({masterCritterList: newCritterList})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Critter Pound</h1>
        </header>
        <CreateCritter handleCreate = {this.handleCreate}></CreateCritter>
        <CritterList masterCritterList={this.state.masterCritterList}></CritterList>
      </div>
    );
  }
}

export default App;
