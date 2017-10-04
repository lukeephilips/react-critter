import React, { Component } from 'react';
import bulldog from './bulldog.png';
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

  handleCreate(name, avatar) {
    let newCritter = new Critter(name, avatar);
    let newCritterList = this.state.masterCritterList.slice();
    newCritterList.push(newCritter);
    this.setState({masterCritterList: newCritterList})
  }
  feedCritter(i, interaction){
    let newCritters = this.state.masterCritterList.slice();
    if (interaction === "feed") {
      if (newCritters[i].hunger >= 5){
        newCritters[i].hunger -= 5;
      } else {
        newCritters[i].hunger = 0;
      }
    } else if (interaction === "rest") {
      newCritters[i].energy += 5;
    }
    this.setState({masterCritterList: newCritters})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bulldog} className="App-logo" alt="logo" />
          <h1 className="App-title">Critter Pound</h1>
          <CreateCritter handleCreate = {this.handleCreate}></CreateCritter>
        </header>
        <CritterList masterCritterList={this.state.masterCritterList} feedCritter={this.feedCritter}></CritterList>
      </div>
    );
  }
}

export default App;
