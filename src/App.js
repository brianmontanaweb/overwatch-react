import React, {Component} from 'react';
import Hero from './components/Hero';
import Map from './components/Map';
import Navigation from './components/Navigation';
import {fetchData} from "./utilities/helpers";

class App extends Component {
  state = {
    heroes: [],
    maps: [],
    navItems: [{
      name: 'Heroes',
      path: 'heroes'
    }, {
      name: 'Maps',
      path: 'maps'
    }, {
      name: 'Favorites',
      path: 'favorites'
    }]
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

        <Navigation navItems={this.state.navItems} />

        {this.state.maps.map((map, index) => {
          return (
            <Map key={index} name={map.name} location={map.location}/>
          )
        })}

        {this.state.heroes.map((hero, index) => {
          return (
            <Hero key={index} name={hero.name} age={hero.age} description={hero.description}
                  base={hero.base_of_operations}/>
          )
        })}

      </div>
    );
  }
}

export default App;
