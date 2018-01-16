import React, { Component } from 'react';
import './App.css';
import MostPlayed from './components/MostPlayed';
import { fetchData } from "./utilities/helpers";

class App extends Component {
  state = {
    heroes: []
  };

  componentWillMount() {
    fetchData()
      .then(result => this.setState({heroes: result.data}));
  };

  render() {
    return (
      <div className="App">
        {this.state.heroes.map(hero => {
          return (
            <React.Fragment>
              <h4>{hero.name}</h4>
              <h6>{hero.age}</h6>
              <p>{hero.description}</p>
              <p><small>{hero.base_of_operations}</small></p>
            </React.Fragment>
          )
        })}
        <MostPlayed />
      </div>
    );
  }
}

export default App;
