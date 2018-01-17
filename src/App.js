import React, { Component } from 'react';
import Hero from './components/Hero';
import Map from './components/Map';
import { fetchData } from "./utilities/helpers";

class App extends Component {
  state = {
    heroes: [],
    maps: []
  };

  componentWillMount() {
    fetchData('hero')
      .then(result => this.setState({heroes: result.data}));
    fetchData('map')
      .then(result => this.setState({maps: result.data}));
  };

  render() {
    return (
      <div className="App">

        {this.state.maps.map((map, index) => {
          return (
            <Map key={index} name={map.name} location={map.location} />
          )
        })}

        {this.state.heroes.map((hero, index) => {
          return (
            <Hero key={index} name={hero.name} age={hero.age} description={hero.description} base={hero.base_of_operations} />
          )
        })}

      </div>
    );
  }
}

export default App;
