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
    this.feedCritter = this.feedCritter.bind(this);

    this.state = {
      masterCritterList: [],
    }
  }
  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() => this.updateTime(),
    2000);
  }
  updateTime() {
    let newCritters = this.state.masterCritterList.slice();
    newCritters.forEach((critter) =>
      critter.setTime()
    );
    this.setState({masterCritterList: newCritters})
  }
  componentWillUnmount() {
    clearInterval(this.timeSinceOpenedChecker);
  }

  handleCreate(name) {
    let newCritter = new Critter(name);
    let newCritterList = this.state.masterCritterList.slice();
    newCritterList.push(newCritter);
    this.setState({masterCritterList: newCritterList})
  }
  feedCritter(i, interaction){
    let newCritters = this.state.masterCritterList.slice();
    if (interaction === "feed") {
      newCritters[i].hunger -= 5;
    } else if (interaction === "rest") {
      newCritters[i].energy += 5;
    }
    this.setState({masterCritterList: newCritters})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Critter Pound</h1>
        </header>
        <CreateCritter handleCreate = {this.handleCreate}></CreateCritter>
        <CritterList masterCritterList={this.state.masterCritterList} feedCritter={this.feedCritter}></CritterList>
      </div>
    );
  }
}

export default App;
